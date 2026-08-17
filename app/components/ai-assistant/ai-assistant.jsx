import { useState, useRef, useEffect } from 'react';
import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import styles from './ai-assistant.module.css';

const KNOWLEDGE_BASE = [
  {
    keywords: ['who', 'about', 'bio', 'junaid', 'introduce', 'profile', 'architect'],
    answer: `**Junaid A S** is an **AI Architect, AI Engineer & Automation Specialist** based in Palakkad, Kerala, India.\n\nHe specializes in designing autonomous intelligent architectures and engineering deep automation workflows that automate complex tasks end-to-end. He also builds multi-agent systems, RAG pipelines, Flutter mobile apps, and scalable web backends with Python & React.\n\nCurrently, he works as an AI Architect & Engineer at **Artcl.in**.`
  },
  {
    keywords: ['automation', 'automate', 'agent', 'workflow', 'tasks', 'orchestration', 'pipeline'],
    answer: `**Junaid's Task Automation Engineering Expertise**:\n\n• **End-to-End Task Automation**: Deep hands-on knowledge in automating repetitive and complex business tasks, data transformations, and reporting.\n• **Autonomous AI Agents**: Multi-agent systems, LangChain, LangGraph, and autonomous tool calling.\n• **Workflow Orchestration**: n8n, custom async Python workers, API integrations, and webhook pipelines.\n• **Real-World Impact**: Automated SayBill AI's voice order parsing and ERMS automated report generation.`
  },
  {
    keywords: ['saybill', 'pos', 'voice', 'billing', 'retail'],
    answer: `**SayBill AI** is Junaid's flagship voice-first Point of Sale & retail management ecosystem:\n\n• **Voice-First Input**: Cashiers speak orders naturally, and an instruction-tuned LLM parses unstructured audio into structured JSON carts within **<420ms**.\n• **Tech Stack**: Flutter, Dart Isolates for 120Hz background audio streaming, PHP CodeIgniter backend, and Vision barcode scanner.\n• **Business Impact**: **98.6%** speech parsing accuracy and **70%** reduction in retail checkout time.`
  },
  {
    keywords: ['erms', 'database', 'school', 'education', 'reporting'],
    answer: `**ERMS (Educational Resource Management System)** is an enterprise academic portal engineered by Junaid:\n\n• **Architecture**: High-performance Python Flask backend coupled with SQLYOG / MySQL composite database indexing.\n• **Automated Engine**: Calculates real-time class averages, grade distributions, and percentile metrics, cutting report-card generation from days to seconds.`
  },
  {
    keywords: ['skill', 'stack', 'tech', 'languages', 'framework', 'python', 'flutter'],
    answer: `**Junaid's Core Technical Toolkit**:\n\n• **AI Architecture & Automation**: Autonomous AI Agents, Task Automation Engineering, Agentic Workflows, LangChain, LangGraph, n8n, RAG Architectures, OpenAI API, Hugging Face, Prompt Engineering.\n• **Languages**: Python, Dart, JavaScript/TypeScript, SQL, PHP, C, C++, HTML5, CSS3.\n• **Frameworks**: Flutter, React.js, Remix, Django, Flask, FastAPI, Node.js, Express.js.\n• **Databases**: PostgreSQL, MySQL, MariaDB, SQLite, Firebase, Supabase.\n• **Cloud & Tools**: AWS, Docker, Vercel, Firebase Hosting, Figma.`
  },
  {
    keywords: ['experience', 'work', 'job', 'artcl', 'febno', 'company'],
    answer: `**Professional Career Timeline**:\n\n1. **AI Architect & Engineer at Artcl.in** (07/2025 – Present | Palakkad):\n   • Architected enterprise AI solutions, autonomous agent pipelines, and task automation systems.\n   • Containerizes microservices with Docker and deploys to cloud infrastructure.\n\n2. **Python Full Stack Developer Intern at Febno.co** (05/2025 – 07/2025 | Calicut):\n   • Built full-stack web applications using Django, Python, and PostgreSQL.`
  },
  {
    keywords: ['contact', 'hire', 'email', 'phone', 'reach', 'linkedin', 'github'],
    answer: `You can connect with Junaid directly:\n\n• **Email**: [junu089@gmail.com](mailto:junu089@gmail.com)\n• **Phone**: [+91 7034092876](tel:+917034092876)\n• **GitHub**: [github.com/junaid089](https://github.com/junaid089)\n• **LinkedIn**: [linkedin.com/in/junaid-as](https://www.linkedin.com/in/junaid-as)\n• **Contact Page**: You can also use the [/contact](/contact) form right here on the site!`
  },
  {
    keywords: ['education', 'degree', 'cert', 'certification', 'college'],
    answer: `**Education & Academic Background**:\n\n• **BCA (Bachelor of Computer Applications)** — University of Calicut (2022–2025)\n• **Professional Diploma in AI** — Mskills (2022–2024)\n\n**Certifications**: IBM Python for Data Science & AI, DeepLearning.AI Prompt Engineering, BCG X GenAI Simulation, Deloitte Australia Data Analytics.`
  }
];

const SUGGESTED_PROMPTS = [
  'Who is Junaid?',
  'What task automation systems does Junaid build?',
  'How does SayBill AI work?',
  'What is Junaid’s AI tech stack?',
  'How can I contact or hire Junaid?'
];


export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi there! I am Junaid’s AI Portfolio Assistant. Ask me anything about Junaid’s projects, AI engineering work, skills, or experience!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = KNOWLEDGE_BASE.find(k => k.keywords.some(kw => lower.includes(kw)));
      
      let answerText = matched 
        ? matched.answer 
        : `Junaid A S is an AI Engineer and Full-Stack Developer specializing in LLM integrations, RAG pipelines, Flutter apps, and web backends. Check out his [Selected Work](/projects/saybill) or reach him at [junu089@gmail.com](mailto:junu089@gmail.com).`;

      setMessages(prev => [...prev, { role: 'assistant', text: answerText }]);
      setIsTyping(false);
    }, 600);
  };

  const renderFormattedText = (text) => {
    // Simple markdown helper for bold, bullet points, and links
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      let formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

      if (line.startsWith('• ') || line.startsWith('   • ')) {
        return <div key={idx} className={styles.bulletItem} dangerouslySetInnerHTML={{ __html: formatted }} />;
      }
      if (line === '') {
        return <div key={idx} className={styles.spacer} />;
      }
      return <p key={idx} className={styles.msgParagraph} dangerouslySetInnerHTML={{ __html: formatted }} />;
    });
  };

  return (
    <div className={styles.assistantRoot}>
      {!isOpen && (
        <button 
          className={styles.triggerButton} 
          onClick={() => setIsOpen(true)}
          aria-label="Ask AI Assistant about Junaid"
        >
          <div className={styles.pulseDot} />
          <span className={styles.botIcon}>✦</span>
          <span className={styles.triggerLabel}>Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div className={styles.chatWindow} role="dialog" aria-label="AI Portfolio Assistant">
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <span className={styles.sparkle}>✦</span>
              <div>
                <div className={styles.headerTitle}>Junaid AI Assistant</div>
                <div className={styles.headerStatus}>Online • Knowledge Base Ingested</div>
              </div>
            </div>
            <button className={styles.closeHeaderBtn} onClick={() => setIsOpen(false)} aria-label="Close AI Assistant">
              <Icon icon="close" />
            </button>
          </div>

          <div className={styles.messageList}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={msg.role === 'assistant' ? styles.assistantMsg : styles.userMsg}
              >
                {msg.role === 'assistant' && <span className={styles.avatar}>✦</span>}
                <div className={styles.msgBubble}>
                  {renderFormattedText(msg.text)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={styles.assistantMsg}>
                <span className={styles.avatar}>✦</span>
                <div className={styles.typingBubble}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.promptChips}>
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button 
                key={i} 
                className={styles.chip}
                onClick={() => handleSend(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form 
            className={styles.inputArea}
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input 
              type="text"
              className={styles.textInput}
              placeholder="Ask about Junaid's AI, Flutter, or projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className={styles.sendBtn} aria-label="Send query" disabled={!input.trim()}>
              <Icon icon="send" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
