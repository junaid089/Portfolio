import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Button } from '~/components/button';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './projects-grid.module.css';

const projects = [
  {
    num: 'PROJECT 01',
    title: 'SayBill AI',
    desc: 'AI-powered mobile POS for retail billing and inventory management.',
    features: [
      'Voice-driven billing supporting multilingual speech',
      'Real-time AI product scanner with custom UI',
      'Business analytics dashboards, Bluetooth printing, and WhatsApp invoicing'
    ],
    tech: ['Flutter', 'Dart', 'CodeIgniter', 'REST API', 'LLM'],
    link: '/projects/saybill'
  },
  {
    num: 'PROJECT 02',
    title: 'ERMS',
    desc: 'Educational Resource Management System for performance tracking and automated reporting.',
    features: [
      'Student performance tracking with automated reporting',
      'Admin dashboard with automated report generation',
      'Clean Bootstrap interface for resource management workflows'
    ],
    tech: ['Flask', 'SQLYOG', 'Bootstrap'],
    link: '/projects/erms'
  }
];

export const ProjectsGrid = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Section
      className={styles.projects}
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
                Selected Work
              </Heading>
              <Text size="l" as="p" className={styles.description}>
                Projects designed to be useful, scalable, and ready for real users.
              </Text>
            </div>
            
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className={styles.projectCard} 
                  data-visible={visible}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span className={styles.projectNum}>{project.num}</span>
                  <Heading level={4} as="h3" className={styles.projectTitle}>
                    {project.title}
                  </Heading>
                  <Text as="p" className={styles.projectDesc}>
                    {project.desc}
                  </Text>
                  
                  <div className={styles.features}>
                    {project.features.map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <span className={styles.featureIcon}>•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.techStack}>
                    {project.tech.map(t => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Button href={project.link} secondary iconEnd="arrow-right">
                      View Project
                    </Button>
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
