import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './experience.module.css';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'Artcl.in, Palakkad',
    date: '07/2025 – Present',
    duties: [
      'Develops AI-powered software solutions focusing on automation and ML model implementation',
      'Manages and maintains a wide range of client-facing AI services',
      'Builds prompt pipelines and RAG systems for enterprise AI features',
      'Works on Docker containerization and deployment',
      'Collaborates on AI projects using Python, TensorFlow, and PyTorch'
    ]
  },
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Febno.co, Calicut',
    date: '05/2025 – 07/2025',
    duties: [
      'Built and maintained web apps using Django and Python',
      'Worked with PostgreSQL and MySQL databases',
      'Collaborated in Agile/Scrum environment'
    ]
  }
];

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.header} data-visible={visible}>
              <Heading level={3} as="h2" className={styles.title}>
                Experience
              </Heading>
              <Text size="l" as="p" className={styles.description}>
                Real product experience across AI engineering, automation, and full-stack systems.
              </Text>
            </div>
            
            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div 
                  key={exp.role + exp.company} 
                  className={styles.timelineItem} 
                  data-visible={visible}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={styles.timelineDot} aria-hidden="true" />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTop}>
                      <div>
                        <Heading level={4} as="h3" className={styles.role}>
                          {exp.role}
                        </Heading>
                        <div className={styles.company}>{exp.company}</div>
                      </div>
                      <div className={styles.date}>{exp.date}</div>
                    </div>
                    <div className={styles.duties}>
                      {exp.duties.map((duty, idx) => (
                        <div key={idx} className={styles.duty}>
                          <span className={styles.dutyIcon}>•</span>
                          <span>{duty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
