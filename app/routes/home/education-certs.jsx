import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Icon } from '~/components/icon';
import { useState } from 'react';

import styles from './education-certs.module.css';

const education = [
  {
    degree: 'BCA',
    institution: 'University of Calicut',
    date: '08/2022 – 03/2025'
  },
  {
    degree: 'Professional Diploma in Artificial Intelligence',
    institution: 'Mskills',
    date: '08/2022 – 08/2024'
  }
];

const certifications = [
  { title: 'Python for Data Science, AI & Development', issuer: 'IBM' },
  { title: 'Data Visualisation', issuer: 'Tata Group' },
  { title: 'GenAI Job Simulation', issuer: 'BCG X', image: '/certs/bcg.png' },
  { title: 'Cloud Platform Job Simulation', issuer: 'Verizon' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte Australia', image: '/certs/deloitte.png' },
  { title: 'Project Management Job Simulation', issuer: 'Accenture', image: '/certs/accenture.png' },
  { title: 'ChatGPT for Everyone: Learn Prompting', issuer: 'Prompt Engineering', image: '/certs/learn-prompting.png' },
  { title: 'Flutter & Dart — The Complete Guide', issuer: 'Udemy' },
  { title: 'Prompt Engineering for Developers', issuer: 'DeepLearning.AI' }
];

export const EducationCerts = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <Section
      className={styles.educationCerts}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onMouseMove={handleMouseMove}
      as="section"
      id={id}
      ref={sectionRef}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            
            <div className={styles.sectionGroup}>
              <div className={styles.header} data-visible={visible}>
                <Heading level={3} as="h2" className={styles.title}>
                  Education
                </Heading>
                <Text size="l" as="p" className={styles.description}>
                  Academic foundation in computing and AI.
                </Text>
              </div>
              
              <div className={styles.eduGrid}>
                {education.map((edu, index) => (
                  <div 
                    key={edu.degree} 
                    className={styles.eduCard} 
                    data-visible={visible}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <Heading level={4} as="h3" className={styles.eduTitle}>
                      {edu.degree}
                    </Heading>
                    <div className={styles.eduInst}>{edu.institution}</div>
                    <div className={styles.eduDate}>{edu.date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionGroup}>
              <div className={styles.header} data-visible={visible}>
                <Heading level={3} as="h2" className={styles.title}>
                  Certifications
                </Heading>
                <Text size="l" as="p" className={styles.description}>
                  Focused learning across AI, data, cloud, mobile, and product delivery.
                </Text>
              </div>

              <div className={styles.certGrid}>
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.title} 
                    className={styles.certCard}
                    data-visible={visible}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredCert(cert)}
                    onMouseLeave={() => setHoveredCert(null)}
                  >
                    <div className={styles.certIcon} aria-hidden="true">★</div>
                    <div className={styles.certInfo}>
                      <span className={styles.certTitle}>{cert.title}</span>
                      <span className={styles.certIssuer}>{cert.issuer}</span>
                    </div>
                    <Icon icon="arrow-right" className={styles.certArrow} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </Transition>

      {hoveredCert && hoveredCert.image && (
        <div 
          className={styles.floatingPreview}
          style={{ 
            transform: `translate3d(${mousePos.x + 20}px, ${mousePos.y + 20}px, 0)`
          }}
        >
          <img src={hoveredCert.image} alt={hoveredCert.title} />
        </div>
      )}
    </Section>
  );
};
