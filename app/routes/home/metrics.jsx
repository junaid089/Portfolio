import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './metrics.module.css';

const metrics = [
  {
    value: '98.6%',
    label: 'Speech Parsing Accuracy',
    detail: 'Multilingual conversational intent extraction in SayBill AI',
    tag: 'AI / NLP'
  },
  {
    value: '< 420ms',
    label: 'End-to-End Latency',
    detail: 'From audio finish to structured POS cart render via Dart isolates',
    tag: 'Real-Time Systems'
  },
  {
    value: '70%',
    label: 'Checkout Acceleration',
    detail: 'Reduction in customer billing and transaction time for retail pilots',
    tag: 'Product Impact'
  },
  {
    value: '10,000+',
    label: 'Records Indexed',
    detail: 'Optimized relational schema queries & sub-second report generation in ERMS',
    tag: 'Database Architecture'
  }
];

export const Metrics = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Section
      className={styles.metricsSection}
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
                Engineering Impact & Benchmarks
              </Heading>
              <Text size="l" as="p" className={styles.description}>
                Quantifiable metrics demonstrating production speed, accuracy, and scalability.
              </Text>
            </div>

            <div className={styles.grid}>
              {metrics.map((metric, index) => (
                <div 
                  key={metric.label} 
                  className={styles.card}
                  data-visible={visible}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.tag}>{metric.tag}</span>
                    <span className={styles.glowIndicator} aria-hidden="true">✦</span>
                  </div>
                  <div className={styles.value}>{metric.value}</div>
                  <Heading level={4} as="h3" className={styles.metricLabel}>
                    {metric.label}
                  </Heading>
                  <p className={styles.detail}>{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
