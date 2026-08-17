import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './skills.module.css';

const skillCategories = [
  {
    title: 'AI Architecture & Automation',
    skills: ['Autonomous AI Agents', 'Agentic Workflows', 'Task Automation Engineering', 'RAG Pipelines', 'Prompt Engineering', 'LangChain', 'LangGraph', 'n8n Workflows', 'API Orchestration']
  },
  {
    title: 'Languages',
    skills: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'PHP', 'C', 'C++', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'AI & ML Tooling',
    skills: ['OpenAI API', 'Hugging Face Transformers', 'Google Vision AI', 'TensorFlow', 'PyTorch', 'Vector Databases', 'Model Inference']
  },
  {
    title: 'Frameworks & Systems',
    skills: ['Flutter', 'Django', 'Flask', 'FastAPI', 'React.js', 'Node.js', 'Express.js', 'CodeIgniter', 'Bootstrap', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Databases & Optimization',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'MariaDB', 'SQLite', 'Firebase Firestore', 'Supabase', 'SQLYOG']
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: ['Docker', 'AWS (SES, EC2, S3)', 'Git', 'GitHub', 'GitLab', 'Vercel', 'Firebase Hosting', 'Cloudflare Pages', 'Figma']
  }
];


export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Section
      className={styles.skills}
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
                Technology Stack
              </Heading>
              <Text size="l" as="p" className={styles.description}>
                A practical mix of programming languages, AI tooling, frameworks, databases, deployment platforms, and design tools.
              </Text>
            </div>
            
            <div className={styles.grid}>
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className={styles.skillGroup} 
                  data-visible={visible}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Heading level={4} as="h3" className={styles.groupTitle}>
                    {category.title}
                  </Heading>
                  <div className={styles.chips}>
                    {category.skills.map(skill => (
                      <span key={skill} className={styles.chip}>{skill}</span>
                    ))}
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
