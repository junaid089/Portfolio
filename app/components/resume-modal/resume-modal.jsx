import { useState, useRef } from 'react';
import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Icon } from '~/components/icon';
import { VisuallyHidden } from '~/components/visually-hidden';
import styles from './resume-modal.module.css';

export function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const resumeRef = useRef();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `JUNAID A S
AI Architect, AI Engineer & Automation Specialist
Palakkad, Kerala, India | +91 7034092876 | junu089@gmail.com
Website: https://junaidas.in | GitHub: github.com/junaid089 | LinkedIn: linkedin.com/in/junaid-as

PROFESSIONAL SUMMARY
AI Architect, AI Engineer, and Automation Specialist with hands-on experience building production AI systems, autonomous agentic workflows, enterprise task automation pipelines, LLM integrations, RAG pipelines, Flutter mobile applications, and high-performance web systems. Deep expertise in automating end-to-end tasks, orchestrating multi-agent systems, and database query optimization.

EXPERIENCE
AI Architect & Engineer | Artcl.in, Palakkad (07/2025 - Present)
- Architected AI-powered enterprise software solutions and automated end-to-end task pipelines.
- Built custom prompt pipelines, multi-agent systems, and RAG architectures for client-facing AI features.
- Containerized and deployed services using Docker, AWS, and Cloudflare Pages.
- Integrated OpenAI, Hugging Face models, vector stores, and automated business integrations.

Python Full Stack Developer Intern | Febno.co, Calicut (05/2025 - 07/2025)
- Developed and maintained web applications using Python, Django, and PostgreSQL.
- Implemented RESTful APIs and optimized SQL database schemas.
- Collaborated in an Agile/Scrum cross-functional engineering team.

KEY PROJECTS
SayBill AI - Voice-First Point of Sale Ecosystem
- Built a voice-driven retail billing application using Flutter, Dart isolates, and LLM JSON schema extraction.
- Engineered sub-420ms voice-to-cart latency and 98.6% speech parsing accuracy.
- Integrated automated WhatsApp PDF invoices and Bluetooth thermal receipt printing.

ERMS - Educational Resource Management System
- Designed Flask and MySQL/SQLYOG architecture managing student records and automated reporting.
- Reduced grade sheet calculation and report generation times from days to seconds.

TECHNICAL SKILLS
- AI Architecture & Automation: Autonomous AI Agents, Task Automation Engineering, Agentic Workflows, LangChain, LangGraph, n8n, Prompt Engineering, RAG Systems, OpenAI API, Hugging Face
- Programming Languages: Python, Dart, JavaScript (ES6+), TypeScript, PHP, SQL, C, C++, HTML5, CSS3
- Frameworks & Libraries: Flutter, React.js, Remix, Django, Flask, FastAPI, Node.js, Express.js
- Databases & Storage: PostgreSQL, MySQL, MariaDB, SQLite, Firebase Firestore, Supabase
- DevOps & Cloud: Git, GitHub, GitLab, Docker, AWS (SES, EC2), Vercel, Firebase Hosting, Figma

EDUCATION & CERTIFICATIONS
- Bachelor of Computer Applications (BCA) | University of Calicut (2022 - 2025)
- Professional Diploma in Artificial Intelligence | Mskills (2022 - 2024)
- Python for Data Science, AI & Development | IBM
- Prompt Engineering for Developers | DeepLearning.AI
`;
    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <Heading level={3} as="h2" id="resume-title">
              Junaid A S — ATS Resume
            </Heading>
            <span className={styles.atsBadge}>✓ ATS-Optimized Format</span>
          </div>
          <div className={styles.actions}>
            <Button secondary onClick={handleCopyText} icon={copied ? 'check' : 'copy'}>
              {copied ? 'Copied Text' : 'Copy Plain Text'}
            </Button>
            <Button onClick={handlePrint} icon="arrow-right">
              Print / Save PDF
            </Button>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close resume modal">
              <Icon icon="close" />
            </button>
          </div>
        </div>

        <div className={styles.resumePaper} ref={resumeRef}>
          {/* Header */}
          <header className={styles.resumeHeader}>
            <h1 className={styles.name}>JUNAID A S</h1>
            <p className={styles.jobTitle}>AI Architect, AI Engineer & Automation Specialist</p>
            <p className={styles.contactLine}>
              Palakkad, Kerala, India • +91 7034092876 • <a href="mailto:junu089@gmail.com">junu089@gmail.com</a>
            </p>
            <p className={styles.linksLine}>
              <a href="https://junaidas.in" target="_blank" rel="noopener noreferrer">junaidas.in</a> •{' '}
              <a href="https://github.com/junaid089" target="_blank" rel="noopener noreferrer">github.com/junaid089</a> •{' '}
              <a href="https://www.linkedin.com/in/junaid-as" target="_blank" rel="noopener noreferrer">linkedin.com/in/junaid-as</a>
            </p>
          </header>

          {/* Summary */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>PROFESSIONAL SUMMARY</h2>
            <div className={styles.divider} />
            <p className={styles.summaryText}>
              AI Architect, AI Engineer, and Automation Specialist with hands-on experience building production AI systems, autonomous agentic workflows, enterprise task automation pipelines, LLM integrations, RAG pipelines, Flutter mobile applications, and high-performance web systems. Deep expertise in automating end-to-end tasks, orchestrating multi-agent systems, and database query optimization.
            </p>
          </section>

          {/* Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>EXPERIENCE</h2>
            <div className={styles.divider} />
            
            <div className={styles.job}>
              <div className={styles.jobHeader}>
                <strong>AI Architect & Engineer</strong>
                <span>07/2025 – Present</span>
              </div>
              <div className={styles.jobSub}>Artcl.in — Palakkad, Kerala</div>
              <ul className={styles.bulletList}>
                <li>Architected AI-powered enterprise software solutions and automated end-to-end task pipelines.</li>
                <li>Built custom prompt pipelines, multi-agent systems, and RAG architectures for client-facing AI features.</li>
                <li>Containerized and deployed services using Docker, AWS, and Cloudflare Pages.</li>
                <li>Collaborated on AI projects using Python, TensorFlow, PyTorch, OpenAI API, and automated workflows.</li>
              </ul>
            </div>

            <div className={styles.job}>
              <div className={styles.jobHeader}>
                <strong>Python Full Stack Developer Intern</strong>
                <span>05/2025 – 07/2025</span>
              </div>
              <div className={styles.jobSub}>Febno.co — Calicut, Kerala</div>
              <ul className={styles.bulletList}>
                <li>Built and maintained web applications using Django, Python, and PostgreSQL.</li>
                <li>Implemented RESTful APIs and database schemas with relational query optimization.</li>
                <li>Collaborated in an Agile/Scrum cross-functional development environment.</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>KEY PROJECTS</h2>
            <div className={styles.divider} />

            <div className={styles.projectItem}>
              <div className={styles.jobHeader}>
                <strong>SayBill AI — Voice-First Point of Sale Ecosystem</strong>
                <span>Flutter, Dart, CodeIgniter, LLMs</span>
              </div>
              <ul className={styles.bulletList}>
                <li>Built a voice-driven retail billing application using Flutter, Dart isolates, and LLM JSON schema extraction.</li>
                <li>Engineered sub-420ms voice-to-cart latency and 98.6% multilingual speech parsing accuracy.</li>
                <li>Integrated camera Vision barcode scanning, Bluetooth thermal printing, and WhatsApp invoice dispatch.</li>
              </ul>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.jobHeader}>
                <strong>ERMS — Educational Resource Management System</strong>
                <span>Flask, SQLYOG, MySQL, Bootstrap</span>
              </div>
              <ul className={styles.bulletList}>
                <li>Designed relational database schemas managing thousands of student profiles and academic records.</li>
                <li>Created automated reporting engine calculating grade percentiles and class distributions in real-time.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>TECHNICAL SKILLS</h2>
            <div className={styles.divider} />
            <p className={styles.skillLine}>
              <strong>AI Architecture & Automation:</strong> Autonomous AI Agents, Task Automation Engineering, Agentic Workflows, LangChain, LangGraph, n8n, Prompt Engineering, RAG Systems, OpenAI API, Hugging Face
            </p>
            <p className={styles.skillLine}>
              <strong>Programming Languages:</strong> Python, Dart, JavaScript (ES6+), TypeScript, PHP, SQL, C, C++, HTML5, CSS3
            </p>
            <p className={styles.skillLine}>
              <strong>Frameworks & Libraries:</strong> Flutter, React.js, Remix, Django, Flask, FastAPI, Node.js, Express.js, CodeIgniter, Bootstrap
            </p>
            <p className={styles.skillLine}>
              <strong>Databases & Storage:</strong> PostgreSQL, MySQL, MariaDB, SQLite, Firebase Firestore, Supabase
            </p>
            <p className={styles.skillLine}>
              <strong>DevOps & Tools:</strong> Git, GitHub, GitLab, Docker, AWS (SES, EC2), Vercel, Firebase Hosting, Figma
            </p>
          </section>

          {/* Education & Certs */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>EDUCATION & CERTIFICATIONS</h2>
            <div className={styles.divider} />
            <div className={styles.jobHeader}>
              <strong>Bachelor of Computer Applications (BCA)</strong>
              <span>University of Calicut (2022 – 2025)</span>
            </div>
            <div className={styles.jobHeader}>
              <strong>Professional Diploma in Artificial Intelligence</strong>
              <span>Mskills (2022 – 2024)</span>
            </div>
            <p className={styles.certList}>
              <strong>Key Certifications:</strong> Python for Data Science, AI & Development (IBM), Prompt Engineering for Developers (DeepLearning.AI), ChatGPT for Everyone (Prompt Engineering), GenAI Job Simulation (BCG X), Flutter & Dart Guide (Udemy).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
