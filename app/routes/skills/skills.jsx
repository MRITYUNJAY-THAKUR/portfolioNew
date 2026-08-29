import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Reveal, RevealItem } from '~/components/reveal';
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
import styles from './skills.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Skills & Toolkit | Mrityunjay Thakur',
    description: `Technical skill set of ${config.name} — Programming languages, databases, libraries, tools, and platforms.`,
  });
};

const languages = ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript'];
const libraries = ['NumPy'];
const databases = ['MySQL', 'PostgreSQL'];
const devTools = ['VS Code', 'Git', 'GitHub', 'Jupyter Notebook'];
const designTools = ['Figma', 'AutoCAD', 'StarUML'];
const softSkills = [
  'Team Collaboration',
  'Problem Solving',
  'Adaptability',
  'Communication',
  'Critical Thinking',
  'Leadership',
];

const skillApplications = [
  {
    title: 'Python & Algorithm Practice',
    text: 'Applied to build interactive games (Dice Roll Game, Number Guessing Game), sensor data pipelines, and educational programming video guides.',
  },
  {
    title: 'C & C++ Computational Fundamentals',
    text: 'Utilized in intensive problem-solving training at NEO Colab and active Data Structures & Algorithms practice on LeetCode.',
  },
  {
    title: 'Web Technologies (HTML, CSS, JavaScript)',
    text: 'Applied to build structured, accessible, and responsive website interfaces like the Government of India website clone.',
  },
  {
    title: 'Relational Databases (MySQL, PostgreSQL)',
    text: 'Used for structured query design, data modeling, schema organization, and backend database concepts.',
  },
  {
    title: 'Version Control & Workflow Tools',
    text: 'Git and GitHub for collaborative version control, commit discipline, and project repository management.',
  },
];

export const Skills = () => {
  return (
    <>
      <ProjectContainer className={styles.skills}>
        {/* 1. Header */}
        <ProjectHeader
          title="Skills &amp; Toolkit"
          description="A structured overview of the programming languages, libraries, database systems, development tools, and engineering software I currently work with across academic practice and software development."
        />

        {/* 2. Programming Languages with Staggered Appearance */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Programming Languages" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Core programming languages practiced through coursework, algorithmic problem solving, and software projects:
                  </ProjectSectionText>
                  <div className={styles.skillsGrid}>
                    {languages.map((lang, index) => (
                      <RevealItem
                        key={lang}
                        index={index}
                        stagger={70}
                        visible={visible}
                        className={styles.skillItem}
                      >
                        {lang}
                      </RevealItem>
                    ))}
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 3, 4, 5, 6. Technical Stack Categories with Staggered Grid */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Technical Stack &amp; Platforms" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <div className={styles.categoriesGrid}>
                    {/* Libraries */}
                    <RevealItem index={0} stagger={100} visible={visible} className={styles.categoryCard}>
                      <div className={styles.categoryHeader}>Libraries &amp; Data</div>
                      <div className={styles.tagList}>
                        {libraries.map(lib => (
                          <span className={styles.tag} key={lib}>{lib}</span>
                        ))}
                      </div>
                    </RevealItem>

                    {/* Databases */}
                    <RevealItem index={1} stagger={100} visible={visible} className={styles.categoryCard}>
                      <div className={styles.categoryHeader}>Databases &amp; Backend</div>
                      <div className={styles.tagList}>
                        {databases.map(db => (
                          <span className={styles.tag} key={db}>{db}</span>
                        ))}
                      </div>
                    </RevealItem>

                    {/* Dev Tools */}
                    <RevealItem index={2} stagger={100} visible={visible} className={styles.categoryCard}>
                      <div className={styles.categoryHeader}>Development Tools</div>
                      <div className={styles.tagList}>
                        {devTools.map(tool => (
                          <span className={styles.tag} key={tool}>{tool}</span>
                        ))}
                      </div>
                    </RevealItem>

                    {/* Design Tools */}
                    <RevealItem index={3} stagger={100} visible={visible} className={styles.categoryCard}>
                      <div className={styles.categoryHeader}>Design &amp; Engineering Tools</div>
                      <div className={styles.tagList}>
                        {designTools.map(tool => (
                          <span className={styles.tag} key={tool}>{tool}</span>
                        ))}
                      </div>
                    </RevealItem>
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 7. Soft Skills with Staggered Cards */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="Soft Skills &amp; Professional Strengths" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <div className={styles.softSkillsList}>
                    {softSkills.map((skill, index) => (
                      <RevealItem
                        key={skill}
                        index={index}
                        stagger={70}
                        visible={visible}
                        className={styles.softSkillCard}
                      >
                        <span className={styles.softSkillDot} />
                        <span style={{ color: 'var(--textTitle)', fontWeight: 'var(--fontWeightMedium)' }}>
                          {skill}
                        </span>
                      </RevealItem>
                    ))}
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 8. How I Apply These Skills with Staggered Slide In */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              {({ visible }) => (
                <ProjectTextRow width="l">
                  <ProjectSectionHeading>
                    <DecoderText text="How I Apply These Skills" start={visible} delay={200} />
                  </ProjectSectionHeading>
                  <ProjectSectionText>
                    Connecting technical proficiencies to practical application across verified software projects and academic training:
                  </ProjectSectionText>
                  <div className={styles.usageList}>
                    {skillApplications.map((app, index) => (
                      <RevealItem
                        key={app.title}
                        index={index}
                        stagger={100}
                        visible={visible}
                        className={styles.usageCard}
                      >
                        <div className={styles.usageTitle}>{app.title}</div>
                        <div className={styles.usageText}>{app.text}</div>
                      </RevealItem>
                    ))}
                  </div>
                </ProjectTextRow>
              )}
            </Reveal>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 9. Skills CTA with Reveal */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <Reveal animation="fade-up">
              <ProjectTextRow width="m">
                <ProjectSectionHeading>Want to see these skills in action?</ProjectSectionHeading>
                <ProjectSectionText>
                  Inspect the complete collection of software builds, games, and systems I have developed.
                </ProjectSectionText>
                <div style={{ marginTop: 'var(--spaceM)' }}>
                  <Button href="/projects" icon="arrow-right">
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
