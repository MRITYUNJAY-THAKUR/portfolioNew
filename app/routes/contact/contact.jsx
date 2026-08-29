import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json } from '@remix-run/node';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { Link } from '~/components/link';
import config from '~/config.json';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact | Mrityunjay Thakur',
    description: `Connect with ${config.name} for software development, technical inquiries, or collaborative discussions.`,
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

export async function action({ context, request }) {
  const formData = await request.formData();
  const isBot = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  const errors = {};

  if (isBot) return json({ success: true });

  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  const awsAccessKey = process?.env?.AWS_ACCESS_KEY_ID || context?.cloudflare?.env?.AWS_ACCESS_KEY_ID;
  const awsSecretKey = process?.env?.AWS_SECRET_ACCESS_KEY || context?.cloudflare?.env?.AWS_SECRET_ACCESS_KEY;
  const targetEmail = process?.env?.EMAIL || context?.cloudflare?.env?.EMAIL;
  const fromEmail = process?.env?.FROM_EMAIL || context?.cloudflare?.env?.FROM_EMAIL;

  if (awsAccessKey && awsSecretKey && targetEmail && fromEmail) {
    try {
      const ses = new SESClient({
        region: 'us-east-1',
        credentials: {
          accessKeyId: awsAccessKey,
          secretAccessKey: awsSecretKey,
        },
      });

      await ses.send(
        new SendEmailCommand({
          Destination: {
            ToAddresses: [targetEmail],
          },
          Message: {
            Body: {
              Text: {
                Data: `From: ${email}\n\n${message}`,
              },
            },
            Subject: {
              Data: `Portfolio message from ${email}`,
            },
          },
          Source: `Portfolio <${fromEmail}>`,
          ReplyToAddresses: [email],
        })
      );
    } catch (err) {
      console.error('SES Send Error:', err);
    }
  }

  return json({ success: true });
}

const interests = [
  'Programming & Algorithm Design',
  'Software Development & Web Systems',
  'Problem Solving & DSA Optimization',
  'Artificial Intelligence & Small Language Models',
  'Continuous Learning & Engineering Projects',
];

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <Form
            unstable_viewTransition
            className={styles.form}
            method="post"
            ref={nodeRef}
          >
            {/* 1. Introduction with DecoderText & delayed slide */}
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Let's connect" start={status !== 'exited'} delay={300} />
            </Heading>
            <Text
              size="l"
              style={{
                color: 'var(--textBody)',
                marginBottom: 'var(--spaceXL)',
                lineHeight: '1.6',
                opacity: status === 'entered' ? 1 : 0,
                transform: status === 'entered' ? 'none' : 'translate3d(0, 16px, 0)',
                transition: `opacity 0.8s var(--bezierFastoutSlowin) 350ms, transform 0.8s var(--bezierFastoutSlowin) 350ms`,
              }}
            >
              I am always open to discussing software projects, algorithmic problem solving, AI exploration, or
              collaborative initiatives. Drop a note below or reach out directly.
            </Text>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />

            {/* 2. Interactive Contact Form with floating label transitions */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && actionData?.errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef: errNodeRef }) => (
                <div
                  className={styles.formError}
                  ref={errNodeRef}
                  data-status={errorStatus}
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {actionData?.errors?.email}
                      {actionData?.errors?.message}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>

            {/* 3. Direct Contact Channels with staggered entry */}
            <div
              style={{
                marginTop: 'var(--space3XL)',
                paddingTop: 'var(--spaceXL)',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spaceS)',
                opacity: status === 'entered' ? 1 : 0,
                transform: status === 'entered' ? 'none' : 'translate3d(0, 16px, 0)',
                transition: `opacity 0.8s var(--bezierFastoutSlowin) 500ms, transform 0.8s var(--bezierFastoutSlowin) 500ms`,
              }}
            >
              <Text size="s" style={{ color: 'var(--textTitle)', fontWeight: 'var(--fontWeightBold)' }}>
                Direct Connection Channels:
              </Text>
              <div style={{ display: 'flex', gap: 'var(--spaceL)', flexWrap: 'wrap', marginTop: 'var(--spaceXS)' }}>
                <Link href={`mailto:${config.email}`} style={{ fontSize: 'var(--fontSizeBodyS)' }}>
                  {config.email}
                </Link>
                <Link
                  href={`https://www.linkedin.com/in/${config.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 'var(--fontSizeBodyS)' }}
                >
                  LinkedIn
                </Link>
                <Link
                  href={`https://github.com/${config.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 'var(--fontSizeBodyS)' }}
                >
                  GitHub
                </Link>
              </div>
            </div>

            {/* 4. What I Am Interested In with smooth reveal */}
            <div
              style={{
                marginTop: 'var(--space2XL)',
                padding: 'var(--spaceL)',
                background: 'var(--backgroundLight)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--borderRadiusM)',
                opacity: status === 'entered' ? 1 : 0,
                transform: status === 'entered' ? 'none' : 'translate3d(0, 16px, 0)',
                transition: `opacity 0.8s var(--bezierFastoutSlowin) 600ms, transform 0.8s var(--bezierFastoutSlowin) 600ms`,
              }}
            >
              <div style={{ fontWeight: 'var(--fontWeightBold)', color: 'var(--primary)', marginBottom: 'var(--spaceS)', fontSize: 'var(--fontSizeBodyS)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Areas of Interest &amp; Collaboration:
              </div>
              <ul style={{ margin: 0, paddingLeft: 'var(--spaceL)', color: 'var(--textBody)', fontSize: 'var(--fontSizeBodyS)', lineHeight: '1.6' }}>
                {interests.map(item => (
                  <li key={item} style={{ marginBottom: 'var(--spaceXS)' }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* 5. Final Closing Note */}
            <div
              style={{
                marginTop: 'var(--spaceXL)',
                textAlign: 'center',
                opacity: status === 'entered' ? 1 : 0,
                transition: `opacity 0.8s var(--bezierFastoutSlowin) 700ms`,
              }}
            >
              <Text size="s" style={{ color: 'var(--textBody)' }}>
                Have a project, idea, or opportunity to discuss? Let&apos;s connect.
              </Text>
            </div>
          </Form>
        )}
      </Transition>

      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              Thank you for reaching out. I’ll get back to you promptly.
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
