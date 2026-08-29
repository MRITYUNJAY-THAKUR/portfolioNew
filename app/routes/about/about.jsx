import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Reveal, RevealItem } from '~/components/reveal';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './about.module.css';

export const meta = () => {
  return baseMeta({
    title: 'About | Mrityunjay Thakur',
    description: `About ${config.name} — Computer Science & Engineering student at Lovely Professional University focused on programming, problem solving, software development, and AI.`,
  });
};

const focusAreas = [
  {
    title: 'Programming',
    desc: 'Writing clean, structured, and modular code across Python, C, and C++ with attention to computational efficiency and readable syntax.',
  },
  {
    title: 'Problem Solving',
    desc: 'Deconstructing computational logic and solving algorithmic challenges using fundamental data structures and optimal time/space complexity.',
  },
  {
    title: 'Software Development',
    desc: 'Developing interactive applications, web interface clones, and hardware-software IoT integrations with responsive design principles.',
  },
  {
    title: 'AI / Emerging Technologies',
    desc: 'Actively exploring artificial intelligence concepts and engaging in independent research on Small Language Models (SLMs).',
  },
];

const educationEntries = [
  {
    qualification: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Lovely Professional University, Phagwara, Punjab',
    score: 'CGPA: 9.60',
    date: 'August 2025',
  },
  {
    qualification: 'Intermediate (CBSE)',
    institution: 'Vivekanand Mission Vidyapeeth, Madhubani, Bihar',
    score: '81%',
    date: 'April 2022 - March 2024',
  },
  {
    qualification: 'Matriculation (CBSE)',
    institution: "St. Xavier's School, Madhubani, Bihar",
    score: '94.8%',
    date: 'April 2021 - March 2022',
  },
];

export const About = () => {
  return (
    <>
      <ProjectContainer className={styles.about}>
        {/* 1. Header with built-in slide/fade */}
        <ProjectHeader
          title="About Me"
          description="I am a Computer Science and Engineering student at Lovely Professional University focused on programming, problem solving, software development, AI, and continuous learning."
          roles={[
            'Student',
            'Programmer',
            'Problem Solver',
            'Software Developer',
          ]}
        />

        {/* 1. Story & Portrait with Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up" delay={100}>
              <ProjectSectionColumns centered className={styles.columns}>
                <div className={styles.imagesText}>
                  <ProjectSectionHeading>
                    <DecoderText text="Background &amp; Philosophy" delay={400} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    I am pursuing my Bachelor of Technology in Computer Science and Engineering at{' '}
                    <Link href="https://www.lpu.in">Lovely Professional University</Link> with an active
                    academic record of <strong style={{ color: 'var(--primary)' }}>CGPA 9.60</strong>.
                    My approach to computer science is grounded in consistent practice, mastering fundamentals,
                    and turning computational logic into working software solutions.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Whether implementing game algorithms in Python, structuring accessible web layouts in vanilla
                    HTML/CSS/JavaScript, or exploring sensor telemetry in IoT, I focus on writing reliable,
                    well-tested code.
                  </ProjectSectionText>
                </div>
                <div className={styles.sidebarImage}>
                  <ProjectImage
                    srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                    placeholder={profileImgPlaceholder}
                    sizes="(max-width: 696px) 100vw, 420px"
                    alt="Portrait of Mrityunjay Thakur"
                  />
                </div>
              </ProjectSectionColumns>
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 2. Development Focus with Staggered Cards */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Development Focus" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    My current technical interests and academic efforts are concentrated across four primary disciplines:
                  </ProjectSectionText>
                  <div className={styles.focusGrid}>
                    {focusAreas.map((area, index) => (
                      <RevealItem
                        key={area.title}
                        index={index}
                        stagger={100}
                        visible={visible}
                        className={styles.focusCard}
                      >
                        <div className={styles.focusTitle}>{area.title}</div>
                        <div className={styles.focusText}>{area.desc}</div>
                      </RevealItem>
                    ))}
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 3. Education Timeline with Progressive Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow stretch width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Education Timeline" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableHeadCell>Degree / Qualification</TableHeadCell>
                        <TableHeadCell>Institution</TableHeadCell>
                        <TableHeadCell>Score / Grade</TableHeadCell>
                        <TableHeadCell>Date</TableHeadCell>
                      </TableRow>
                      {educationEntries.map((edu, index) => (
                        <TableRow
                          key={edu.qualification}
                          style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'none' : 'translate3d(0, 16px, 0)',
                            transition: `opacity 0.6s var(--bezierFastoutSlowin) ${index * 120 + 200}ms, transform 0.6s var(--bezierFastoutSlowin) ${index * 120 + 200}ms`,
                          }}
                        >
                          <TableCell style={{ fontWeight: 'var(--fontWeightMedium)', color: 'var(--textTitle)' }}>
                            {edu.qualification}
                          </TableCell>
                          <TableCell>{edu.institution}</TableCell>
                          <TableCell style={{ color: 'var(--primary)', fontWeight: 'var(--fontWeightBold)' }}>
                            {edu.score}
                          </TableCell>
                          <TableCell>{edu.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 4. Training Section with Staggered List Items */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="m">
                  <ProjectSectionHeading>
                    <DecoderText text="Training &amp; Practice" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <div className={styles.trainingCard}>
                    <p style={{ fontWeight: 'var(--fontWeightMedium)', color: 'var(--textTitle)', marginBottom: 'var(--spaceS)' }}>
                      Programming Practice &amp; Problem Solving — NEO Colab (June 2025 - July 2025)
                    </p>
                    <p style={{ color: 'var(--textBody)', marginBottom: 'var(--spaceM)', lineHeight: '1.6' }}>
                      Completed structured technical training focused on coding fundamentals, algorithmic thinking,
                      and software problem-solving:
                    </p>
                    <List>
                      <ListItem>
                        Core programming languages: C, C++, and Python syntax and runtime paradigms.
                      </ListItem>
                      <ListItem>
                        Control flow structures: Nested loops, function decomposition, and conditional branching.
                      </ListItem>
                      <ListItem>
                        Memory and data organization: Fixed arrays, strings manipulation, and basic data structures.
                      </ListItem>
                      <ListItem>
                        Robust software practices: Defensive input handling, runtime debugging, and code optimization.
                      </ListItem>
                    </List>
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 5. Problem Solving with Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="m">
                  <ProjectSectionHeading>
                    <DecoderText text="Problem Solving" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    I actively solve Data Structures and Algorithms (DSA) problems on LeetCode to continuously
                    refine my analytical approach, evaluate complexity trade-offs, and maintain sharp coding proficiency.
                  </ProjectSectionText>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 6. Educational Content with Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="m">
                  <ProjectSectionHeading>
                    <DecoderText text="Educational Content" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Passionate about peer learning and knowledge sharing, I have created and published{' '}
                    <span className={styles.highlightBadge}>10 Educational Videos</span> on Python programming.
                    These video guides break down fundamental programming concepts, control flow, functions, and
                    hands-on coding techniques designed specifically for beginner learners.
                  </ProjectSectionText>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 7. About Page CTA with Entrance Animation */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              <ProjectTextRow width="m">
                <ProjectSectionHeading>Continue Exploring</ProjectSectionHeading>
                <ProjectSectionText>
                  Take a deeper look at the technologies I use or inspect the applications I have developed.
                </ProjectSectionText>
                <div className={styles.ctaActions}>
                  <Button href="/skills" icon="arrow-right">
                    Explore My Skills
                  </Button>
                  <Button secondary href="/projects" icon="chevron-right">
                    View My Projects
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
