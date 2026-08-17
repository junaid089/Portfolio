import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './faq.module.css';

const faqs = [
  {
    question: 'Who is Junaid A S and what are his primary disciplines?',
    answer: 'Junaid A S (also known as Junaid AS) is an AI Architect, AI Engineer, and Automation Specialist based in Palakkad, Kerala, India. He specializes in designing autonomous intelligent architectures, engineering end-to-end task automation pipelines, orchestrating multi-agent workflows, building cross-platform Flutter apps, and scaling Python/React backend systems.'
  },
  {
    question: 'What is Junaid’s expertise in Task Automation Engineering & Autonomous Agents?',
    answer: 'Junaid has deep, hands-on knowledge in automating complex, multi-step business and data tasks using autonomous AI agents, LangChain, LangGraph, n8n, custom async Python workers, and API orchestration. He specializes in eliminating manual friction by designing self-healing, deterministic agentic workflows.'
  },
  {
    question: 'What is SayBill AI and how does its voice engine work?',
    answer: 'SayBill AI is a voice-first Point of Sale (POS) and intelligent retail inventory ecosystem created by Junaid. It uses Dart background isolates to stream real-time audio over WebSockets and instruction-tuned LLMs to extract structured JSON carts with a sub-420ms latency and 98.6% speech parsing accuracy, integrated with Bluetooth thermal printing and automated WhatsApp invoices.'
  },
  {
    question: 'What is Junaid’s core technical stack and AI toolkit?',
    answer: 'Junaid’s core technical stack spans AI Architecture & Automation (Autonomous AI Agents, Task Automation Engineering, Agentic Workflows, LangChain, LangGraph, n8n, OpenAI API, Hugging Face, RAG pipelines, Prompt Engineering), Mobile (Flutter, Dart), Web & Backend (Python, Django, Flask, FastAPI, React.js, Node.js, Express.js, PHP CodeIgniter), Databases (PostgreSQL, MySQL, MariaDB, SQLite, Supabase, Firebase), and Cloud DevOps (AWS SES/EC2, Docker, Vercel, Cloudflare Pages).'
  },
  {
    question: 'What is Junaid’s education and certification background?',
    answer: 'Junaid holds a Bachelor of Computer Applications (BCA) from the University of Calicut (2022–2025) and a Professional Diploma in Artificial Intelligence from Mskills (2022–2024). He has earned industry certifications from IBM (Python for Data Science, AI & Development), DeepLearning.AI (Prompt Engineering for Developers), BCG X (GenAI Simulation), and Deloitte Australia (Data Analytics).'
  }
];



export const FAQ = ({ id, visible, sectionRef }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [focused, setFocused] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Section
      className={styles.faqSection}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      tabIndex={-1}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.header} data-visible={visible}>
              <div className={styles.badge}>AEO & AI Knowledge Base</div>
              <Heading level={3} as="h2" className={styles.title}>
                Frequently Asked Questions
              </Heading>
              <Text size="l" as="p" className={styles.description}>
                Direct answers to common queries for human visitors, search engines, and AI answer models.
              </Text>
            </div>

            <div className={styles.accordion}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={faq.question} 
                    className={styles.item}
                    data-open={isOpen}
                    data-visible={visible}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button 
                      className={styles.questionBtn} 
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={styles.chevron} aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className={styles.answerContainer}>
                        <p className={styles.answerText}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
