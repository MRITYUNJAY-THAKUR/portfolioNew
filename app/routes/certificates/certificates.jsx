import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Reveal, RevealItem } from '~/components/reveal';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './certificates.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Certificates | Mrityunjay Thakur',
    description: `Verified learning certifications and credentials earned by ${config.name} in Artificial Intelligence and Python programming fundamentals.`,
  });
};

const certificates = [
  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys',
    date: 'March 2026',
    url: 'https://drive.google.com/file/d/1k1Krj9g2zcLTwEOV4_paDBgygTxFJZkD/view?usp=drive_link',
  },
  {
    name: 'Programming Fundamentals using Python - Part 1',
    issuer: 'Infosys',
    date: 'July 2026',
    url: 'https://drive.google.com/file/d/10vaMxJipL13l0W9X9nwIG0v9LS8Z1c1f/view?usp=sharing',
  },
  {
    name: 'Programming Fundamentals using Python - Part 2',
    issuer: 'Infosys',
    date: 'August 2026',
    url: 'https://drive.google.com/file/d/1F10ljJuPQED8lyPvF5Q1RMQS_6oQcbin/view?usp=drive_link',
  },
];

const learningAreas = [
  {
    title: 'Artificial Intelligence',
    text: 'Foundational concepts covering machine intelligence, problem representation, reasoning paradigms, and emerging AI technologies.',
  },
  {
    title: 'Python Programming',
    text: 'Core language syntax, procedural programming, functional patterns, object-oriented concepts, and standard library utilities.',
  },
  {
    title: 'Programming Fundamentals',
    text: 'Algorithmic control flow, conditional logic, iterative loops, data structures, modular function design, and debugging.',
  },
];

export const Certificates = () => {
  return (
    <>
      <ProjectContainer className={styles.certificates}>
        {/* 1. Header with built-in slide/fade */}
        <ProjectHeader
          title="Certificates"
          description="Verified course certifications and learning credentials documenting foundational milestones in Artificial Intelligence and Python programming fundamentals issued by Infosys."
        />

        {/* 2. Certificate Gallery with Staggered Card Entrance */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Verified Credentials" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Each certificate represents a completed curriculum milestone validated with official issuer accreditation:
                  </ProjectSectionText>
                  <div className={styles.certGrid}>
                    {certificates.map((cert, index) => (
                      <RevealItem
                        key={cert.name}
                        index={index}
                        stagger={100}
                        visible={visible}
                        className={styles.certCard}
                      >
                        <div className={styles.certTop}>
                          <span className={styles.certIssuerBadge}>{cert.issuer}</span>
                          <div className={styles.certTitle}>{cert.name}</div>
                          <div className={styles.certDate}>Issued: {cert.date}</div>
                        </div>
                        <div>
                          <Button
                            secondary
                            iconHoverShift
                            icon="chevron-right"
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Certificate
                          </Button>
                        </div>
                      </RevealItem>
                    ))}
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Credentials Table View with Progressive Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow stretch width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Summary Table" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableHeadCell>Certificate Name</TableHeadCell>
                        <TableHeadCell>Issuer</TableHeadCell>
                        <TableHeadCell>Issue Date</TableHeadCell>
                        <TableHeadCell>Credential</TableHeadCell>
                      </TableRow>
                      {certificates.map((cert, index) => (
                        <TableRow
                          key={cert.name}
                          style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'none' : 'translate3d(0, 16px, 0)',
                            transition: `opacity 0.6s var(--bezierFastoutSlowin) ${index * 120 + 200}ms, transform 0.6s var(--bezierFastoutSlowin) ${index * 120 + 200}ms`,
                          }}
                        >
                          <TableCell style={{ fontWeight: 'var(--fontWeightMedium)', color: 'var(--textTitle)' }}>
                            {cert.name}
                          </TableCell>
                          <TableCell>{cert.issuer}</TableCell>
                          <TableCell style={{ color: 'var(--primary)', fontWeight: 'var(--fontWeightMedium)' }}>
                            {cert.date}
                          </TableCell>
                          <TableCell>
                            <Button
                              secondary
                              iconHoverShift
                              icon="chevron-right"
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ padding: 'var(--spaceXS) var(--spaceM)', fontSize: '0.85rem' }}
                            >
                              View Certificate
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 3. Learning Areas with Staggered Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Competency &amp; Learning Areas" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Core conceptual domains strengthened through these structured certifications:
                  </ProjectSectionText>
                  <div className={styles.learningAreasGrid}>
                    {learningAreas.map((area, index) => (
                      <RevealItem
                        key={area.title}
                        index={index}
                        stagger={100}
                        visible={visible}
                        className={styles.areaCard}
                      >
                        <div className={styles.areaTitle}>{area.title}</div>
                        <div className={styles.areaText}>{area.text}</div>
                      </RevealItem>
                    ))}
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 4. Certificates CTA with Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              <ProjectTextRow width="m">
                <ProjectSectionHeading>Continue Exploring</ProjectSectionHeading>
                <ProjectSectionText>
                  Discover more about my background, technical skill set, or the software builds I have created.
                </ProjectSectionText>
                <div className={styles.navLinks}>
                  <Button href="/about" icon="arrow-right">
                    About Me
                  </Button>
                  <Button secondary href="/skills" icon="chevron-right">
                    View Skills
                  </Button>
                  <Button secondary href="/projects" icon="chevron-right">
                    View Projects
                  </Button>
                </div>
              </ProjectTextRow>
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
