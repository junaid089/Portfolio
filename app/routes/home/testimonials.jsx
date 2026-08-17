import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './testimonials.module.css';

const testimonials = [
  {
    name: 'Athul Anil Kumar',
    role: 'AI Engineer',
    quote: 'Junaid’s ability to turn complex LLM architectures into ultra-fast, user-friendly mobile and web products is remarkable. His work on real-time speech pipelines, autonomous agents, and database optimization reflects a rare blend of systems engineering and modern AI design.',
    initials: 'AK'
  },
  {
    name: 'Nafih Rahman CS',
    role: 'AI Engineer',
    quote: 'Working alongside Junaid demonstrated his meticulous attention to API design, async performance, and task automation architecture. When tackling tough backend challenges or building responsive Flutter applications, he consistently delivers exceptional engineering quality.',
    initials: 'NR'
  },
  {
    name: 'Amrutha',
    role: 'AI Engineer',
    quote: 'Junaid has an innate grasp of prompt engineering, model evaluation, and RAG retrieval pipelines. He doesn’t just build prototypes—he architects production-grade AI automation systems that execute reliably and seamlessly in real-world workflows.',
    initials: 'AM'
  },
  {
    name: 'Shanavas NS',
    role: 'AI Engineer',
    quote: 'Junaid is a dedicated AI Architect and engineer who effortlessly bridges sleek frontend finesse with deep relational database optimizations and agentic task pipelines. His drive to master emerging tools makes him a standout collaborator.',
    initials: 'SN'
  }
];


export const Testimonials = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Section
      className={styles.testimonialsSection}
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
                Colleague & Peer Endorsements
              </Heading>
              <Text size="l" as="p" className={styles.description}>
                What engineering peers and team members say about collaborating with Junaid.
              </Text>
            </div>

            <div className={styles.grid}>
              {testimonials.map((item, index) => (
                <div 
                  key={item.name} 
                  className={styles.card}
                  data-visible={visible}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className={styles.quoteIcon} aria-hidden="true">“</div>
                  <p className={styles.quoteText}>{item.quote}</p>
                  
                  <div className={styles.author}>
                    <div className={styles.avatar}>{item.initials}</div>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>{item.name}</div>
                      <div className={styles.authorRole}>{item.role}</div>
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
