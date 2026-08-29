import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { List, ListItem } from '~/components/list';
import { Reveal } from '~/components/reveal';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects | Mrityunjay Thakur',
    description: `Software, programming builds, and engineering case files developed by ${config.name} — Interactive Python games, web clones, IoT systems, and AI research.`,
  });
};

export const Projects = () => {
  return (
    <>
      <ProjectContainer className={styles.projects}>
        {/* 1. Header with built-in slide/fade */}
        <ProjectHeader
          title="Projects"
          description="Detailed software case files, interactive application builds, and engineering projects developed with a focus on problem solving, logic, and practical implementation."
          linkLabel="Visit GitHub Profile"
          url={`https://github.com/${config.github}`}
        />

        {/* PROJECT 01: DICE ROLL GAME */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up" delay={50}>
              {({ visible }) => (
                <div className={styles.projectCard}>
                  <div className={styles.projectMetaHeader}>
                    <span className={styles.projectIndex}>01. DICE ROLL GAME</span>
                    <div className={styles.badges}>
                      <span className={`${styles.badge} ${styles.badgeCompleted}`}>Status: Completed</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Python</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Game Logic</span>
                    </div>
                  </div>

                  <div>
                    <ProjectSectionHeading>
                      <DecoderText text="Overview &amp; Architecture" start={visible} delay={200} />
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Developed an interactive multiplayer dice game in Python using randomization, loops,
                      functions, and conditional logic to manage complete gameplay flow. The program manages
                      multi-user game sessions, validates turn-based inputs, calculates dynamic rolls, and determines
                      victory thresholds with robust state management.
                    </ProjectSectionText>
                  </div>

                  <div className={styles.featureBox}>
                    <div className={styles.featureTitle}>Key Features &amp; Capabilities:</div>
                    <List>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Turn Management:</strong> Seamless turn-taking flow between players with prompt validation and state transitions.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Player Input:</strong> Defensive input handling routines to prevent invalid commands and runtime exceptions.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Score Tracking:</strong> Cumulative session scoring, double-roll bonuses, and real-time standings display.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Game-State Handling:</strong> Structured game loop with conditional win detection and post-match replay options.
                      </ListItem>
                    </List>
                  </div>

                  <div className={styles.testBox}>
                    <strong style={{ color: 'var(--primary)' }}>Testing &amp; Verification:</strong> Verified across{' '}
                    <strong>100+ simulated game rounds</strong> to confirm score integrity, randomization distribution,
                    and zero state deadlocks.
                  </div>
                </div>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* PROJECT 02: NUMBER GUESSING GAME */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up" delay={50}>
              {({ visible }) => (
                <div className={styles.projectCard}>
                  <div className={styles.projectMetaHeader}>
                    <span className={styles.projectIndex}>02. NUMBER GUESSING GAME</span>
                    <div className={styles.badges}>
                      <span className={`${styles.badge} ${styles.badgeCompleted}`}>Status: Completed</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Python</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Sept - Oct 2025</span>
                    </div>
                  </div>

                  <div>
                    <ProjectSectionHeading>
                      <DecoderText text="Overview &amp; Architecture" start={visible} delay={200} />
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Developed an interactive number guessing game (September 2025 - October 2025) using randomized
                      target generation, user input validation, higher/lower hints, and dynamic attempt tracking.
                      Engineered with an emphasis on defensive programming, clean feedback loops, and engaging CLI interaction.
                    </ProjectSectionText>
                  </div>

                  <div className={styles.featureBox}>
                    <div className={styles.featureTitle}>Key Features &amp; Capabilities:</div>
                    <List>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Higher / Lower Hints:</strong> Adaptive directional hints generated dynamically based on player proximity to target.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Dynamic Attempt Handling:</strong> Configurable difficulty ceilings and attempt decrement tracking.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Random Target Generation:</strong> Cryptographically sound pseudo-random numerical generation per match.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Input Validation:</strong> Bounds checking and type validation ensuring stable CLI execution.
                      </ListItem>
                    </List>
                  </div>

                  <div className={styles.testBox}>
                    <strong style={{ color: 'var(--primary)' }}>Testing &amp; Verification:</strong> Evaluated and verified across{' '}
                    <strong>100+ game rounds</strong> under multiple boundary conditions and edge cases.
                  </div>
                </div>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* PROJECT 03: GOVERNMENT OF INDIA WEBSITE CLONE */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up" delay={50}>
              {({ visible }) => (
                <div className={styles.projectCard}>
                  <div className={styles.projectMetaHeader}>
                    <span className={styles.projectIndex}>03. GOVERNMENT WEBSITE CLONE</span>
                    <div className={styles.badges}>
                      <span className={`${styles.badge} ${styles.badgeCompleted}`}>Status: Educational Build</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>HTML</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>CSS</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>JavaScript</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>June - July 2025</span>
                    </div>
                  </div>

                  <div>
                    <ProjectSectionHeading>
                      <DecoderText text="Overview &amp; Educational Purpose" start={visible} delay={200} />
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Developed a responsive personal and educational website clone of a Government of India website layout
                      (June 2025 - July 2025) using vanilla HTML, CSS, and JavaScript. The objective centered on recreating
                      complex public sector web architectures with clean typography, accessible navigation, and multi-device responsiveness.
                    </ProjectSectionText>
                    <p style={{ fontSize: 'var(--fontSizeBodyS)', color: 'var(--textBody)', fontStyle: 'italic', marginTop: 'var(--spaceXS)' }}>
                      Note: This is an independent personal/educational UI engineering study. It does not claim or imply official government affiliation.
                    </p>
                  </div>

                  <div className={styles.featureBox}>
                    <div className={styles.featureTitle}>Key Areas &amp; Structural Components:</div>
                    <List>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Navigation Menus:</strong> Multi-tiered desktop navigation bar and mobile drawer menu.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Content Sections:</strong> Informational grid layouts, notice banners, and categorical service hubs.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Forms &amp; Buttons:</strong> Interactive citizen registration forms with client-side JavaScript validation.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Responsive Design:</strong> Fluid CSS Flexbox and Grid layouts tested across desktop, tablet, and mobile breakpoints.
                      </ListItem>
                    </List>
                  </div>
                </div>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* PROJECT 04: IOT-BASED FOOD CONTAMINATION DETECTION */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up" delay={50}>
              {({ visible }) => (
                <div className={styles.projectCard}>
                  <div className={styles.projectMetaHeader}>
                    <span className={styles.projectIndex}>04. IOT FOOD CONTAMINATION DETECTION SYSTEM</span>
                    <div className={styles.badges}>
                      <span className={`${styles.badge} ${styles.badgeCompleted}`}>Status: Completed</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>IoT</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Embedded Hardware</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Sensors</span>
                    </div>
                  </div>

                  <div>
                    <ProjectSectionHeading>
                      <DecoderText text="Overview &amp; Purpose" start={visible} delay={200} />
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      A completed hardware and software integrated Internet of Things (IoT) engineering solution designed
                      for automated detection and real-time monitoring of food contamination. Built to bridge sensor
                      acquisition with connected telemetry monitoring.
                    </ProjectSectionText>
                  </div>

                  <div className={styles.featureBox}>
                    <div className={styles.featureTitle}>System Concept &amp; Core Highlights:</div>
                    <List>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Automated Sensing Pipeline:</strong> Food sample inspection workflow connecting physical sensors to embedded processing.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Connected Monitoring:</strong> Telemetry stream relaying sample state alerts to monitoring units.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Hardware &amp; Software Integration:</strong> Bridging embedded microcontroller data acquisition with dashboard telemetry.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Completed Build:</strong> System assembly, interfacing, and baseline sensor calibration finalized.
                      </ListItem>
                    </List>
                  </div>
                </div>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* PROJECT 05: SMALL LANGUAGE MODEL (SLM) PROJECT */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up" delay={50}>
              {({ visible }) => (
                <div className={styles.projectCard}>
                  <div className={styles.projectMetaHeader}>
                    <span className={styles.projectIndex}>05. SMALL LANGUAGE MODEL (SLM) PROJECT</span>
                    <div className={styles.badges}>
                      <span className={`${styles.badge} ${styles.badgeProgress}`}>Status: In Progress</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Artificial Intelligence</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Python</span>
                      <span className={`${styles.badge} ${styles.badgeTech}`}>Research Build</span>
                    </div>
                  </div>

                  <div>
                    <ProjectSectionHeading>
                      <DecoderText text="Overview &amp; Ongoing Exploration" start={visible} delay={200} />
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Currently working on an independent research and engineering project focused on Small Language Models (SLMs).
                      This dedicated initiative explores compact language model techniques, computational efficiency, and practical AI applications.
                    </ProjectSectionText>
                    <p style={{ fontSize: 'var(--fontSizeBodyS)', color: 'var(--textBody)', marginTop: 'var(--spaceXS)' }}>
                      This project represents an ongoing exploration into language representation and machine learning fundamentals.
                    </p>
                  </div>

                  <div className={styles.featureBox}>
                    <div className={styles.featureTitle}>Research Focus Areas:</div>
                    <List>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Small Language Models:</strong> Investigating resource-efficient model concepts for focused task execution.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>AI Fundamentals:</strong> Deepening foundational understanding of language modeling algorithms and tensor operations.
                      </ListItem>
                      <ListItem>
                        <strong style={{ color: 'var(--textTitle)' }}>Independent Development:</strong> Ongoing technical work maintained as a dedicated research track.
                      </ListItem>
                    </List>
                  </div>
                </div>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* GitHub Profile Section with Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              <div className={styles.githubCta}>
                <ProjectSectionHeading>
                  <DecoderText text="Explore My Code on GitHub" delay={200} />
                </ProjectSectionHeading>
                <ProjectSectionText style={{ maxWidth: '600px', margin: '0 auto var(--spaceL)' }}>
                  View repositories, source code implementations, and project activity directly on my GitHub profile.
                </ProjectSectionText>
                <Button href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer" icon="arrow-right">
                  Visit GitHub Profile
                </Button>
              </div>
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
