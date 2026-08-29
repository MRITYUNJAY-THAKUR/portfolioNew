import diceTextureLarge from '~/assets/dice-game-large.jpg';
import diceTexturePlaceholder from '~/assets/dice-game-placeholder.jpg';
import diceTexture from '~/assets/dice-game.jpg';
import goiTexture2Large from '~/assets/goi-clone-2-large.jpg';
import goiTexture2Placeholder from '~/assets/goi-clone-2-placeholder.jpg';
import goiTexture2 from '~/assets/goi-clone-2.jpg';
import goiTextureLarge from '~/assets/goi-clone-1-large.jpg';
import goiTexturePlaceholder from '~/assets/goi-clone-1-placeholder.jpg';
import goiTexture from '~/assets/goi-clone-1.jpg';
import iotTextureLarge from '~/assets/iot-food-large.jpg';
import iotTexturePlaceholder from '~/assets/iot-food-placeholder.jpg';
import iotTexture from '~/assets/iot-food.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Reveal, RevealItem } from '~/components/reveal';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Computer Science & Engineering Student',
    description: `Personal developer portfolio of ${config.name} — Computer Science & Engineering student at Lovely Professional University focused on programming, problem solving, software development, and AI.`,
  });
};

const stats = [
  { value: '9.60', label: 'CGPA Record', sub: 'Lovely Professional University' },
  { value: 'B.Tech', label: 'CSE Student', sub: 'Computer Science & Engineering' },
  { value: '10', label: 'Python Videos', sub: 'Educational Concept Guides' },
  { value: '3', label: 'Certifications', sub: 'Infosys Verified Credentials' },
];

const techOverview = [
  { category: 'Programming', items: 'C, C++, Python, JavaScript, HTML, CSS' },
  { category: 'Libraries', items: 'NumPy' },
  { category: 'Databases', items: 'MySQL, PostgreSQL' },
  { category: 'Tools', items: 'Git, GitHub, VS Code, Jupyter Notebook' },
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const highlights = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const cta = useRef();

  useEffect(() => {
    const sections = [intro, highlights, projectOne, projectTwo, projectThree, details, cta];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) sectionObserver.observe(section.current);
    });

    if (intro.current) indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      {/* 1. Hero with 3D DisplacementSphere */}
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      {/* 2 & 3 & 4. Short Intro, Highlights, & What I Work With */}
      <section className={styles.introSection} ref={highlights} id="highlights">
        <div className={styles.introContainer}>
          <Reveal animation="fade-up" visible={visibleSections.includes(highlights.current)}>
            <div className={styles.introText}>
              <Heading level={3} as="h2" style={{ marginBottom: 'var(--spaceS)' }}>
                <DecoderText text="Overview &amp; Highlights" start={visibleSections.includes(highlights.current)} delay={300} />
              </Heading>
              <p className={styles.introDescription}>
                I am a Computer Science and Engineering student at Lovely Professional University focused on
                programming, problem solving, software development, AI, and emerging technologies.
              </p>
            </div>
          </Reveal>

          {/* Stat Cards with Staggered Entrance */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <RevealItem
                key={stat.label}
                index={index}
                stagger={80}
                visible={visibleSections.includes(highlights.current)}
                className={styles.statCard}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statSub}>{stat.sub}</span>
              </RevealItem>
            ))}
          </div>

          {/* What I Work With */}
          <div className={styles.techOverview}>
            <Reveal animation="fade-up" visible={visibleSections.includes(highlights.current)}>
              <Heading level={4} as="h3" style={{ marginBottom: 'var(--spaceS)' }}>
                What I Work With
              </Heading>
              <p style={{ color: 'var(--textBody)', fontSize: 'var(--fontSizeBodyM)' }}>
                Core technologies and tools applied across academic practice, algorithms, and software builds.
              </p>
            </Reveal>
            <div className={styles.techGrid}>
              {techOverview.map((tech, index) => (
                <RevealItem
                  key={tech.category}
                  index={index}
                  stagger={80}
                  visible={visibleSections.includes(highlights.current)}
                  className={styles.techCard}
                >
                  <div className={styles.techCategory}>{tech.category}</div>
                  <div className={styles.techItems}>{tech.items}</div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Projects with 3D Laptop/Phone Canvas */}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Interactive Dice Roll Game"
        description="Developed a multiplayer game in Python featuring turn management, player input, score tracking, and conditional logic. Tested across 100+ simulated rounds."
        buttonText="View Project"
        buttonLink="/projects"
        model={{
          type: 'laptop',
          alt: 'Python Multiplayer Dice Roll Game interface and simulation log',
          textures: [
            {
              srcSet: `${diceTexture} 1280w, ${diceTextureLarge} 2560w`,
              placeholder: diceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Government Website Clone"
        description="A responsive educational website clone developed with HTML, CSS, and JavaScript focusing on structured layouts, accessibility, forms, and intuitive navigation."
        buttonText="View Project"
        buttonLink="/projects"
        model={{
          type: 'phone',
          alt: 'Government of India educational website clone interface (HTML/CSS/JavaScript)',
          textures: [
            {
              srcSet: `${goiTexture} 375w, ${goiTextureLarge} 750w`,
              placeholder: goiTexturePlaceholder,
            },
            {
              srcSet: `${goiTexture2} 375w, ${goiTexture2Large} 750w`,
              placeholder: goiTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="IoT Food Contamination Detection"
        description="Hardware and software integrated IoT solution designed for automated real-time food contamination detection and telemetry monitoring."
        buttonText="View Project"
        buttonLink="/projects"
        model={{
          type: 'laptop',
          alt: 'IoT-Based Food Contamination Detection System telemetry and monitoring dashboard',
          textures: [
            {
              srcSet: `${iotTexture} 1280w, ${iotTextureLarge} 2560w`,
              placeholder: iotTexturePlaceholder,
            },
          ],
        }}
      />

      {/* View All Projects Action */}
      <Reveal animation="fade-up">
        <div className={styles.projectsAction}>
          <Button href="/projects" icon="arrow-right">
            View All Projects
          </Button>
        </div>
      </Reveal>

      {/* 6. Profile & Education Preview */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      {/* 7. Final Home CTA */}
      <section className={styles.finalCta} ref={cta} id="home-cta">
        <Reveal animation="fade-up" visible={visibleSections.includes(cta.current)}>
          <div className={styles.finalCtaContent}>
            <Heading level={3} as="h2">
              <DecoderText text="Interested in what I build?" start={visibleSections.includes(cta.current)} delay={300} />
            </Heading>
            <Text size="l" style={{ color: 'var(--textBody)' }}>
              Explore my projects, technical skills, and ongoing software development work.
            </Text>
            <div className={styles.finalCtaActions}>
              <Button href="/projects" icon="arrow-right">
                Explore Projects
              </Button>
              <Button secondary href="/contact" icon="send">
                Contact Me
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};
