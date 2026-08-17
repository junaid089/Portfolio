import { baseMeta } from '~/utils/meta';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import { Transition } from '~/components/transition';
import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { formatDate } from '~/utils/date';
import { Link as RouterLink } from '@remix-run/react';
import { Fragment } from 'react';
import styles from './articles.module.css';

const title = 'Articles';
const description = 'Technical articles, research notes, and architectural write-ups by Junaid A S covering AI engineering, full-stack development, and database systems.';

export const meta = () => {
  return baseMeta({
    title: 'Technical Articles & Research',
    description: 'Technical articles, research notes, and architectural write-ups by Junaid A S covering AI engineering, LLM integration, Flutter, and database systems.',
    prefix: 'Articles',
    canonicalUrl: 'https://junaidas.in/articles',
    keywords: [
      'Junaid A S Articles',
      'AI Engineering Guides',
      'Flutter Voice POS',
      'Flask Database Architecture',
      'LLM JSON Schema',
      'Junaid AS Technical Blog'
    ]
  });
};

const articles = [
  {
    title: "Scale & Analytics: Architectural Design of ERMS",
    abstract: "Deep dive into the architectural design and database optimizations of Junaid's Educational Resource Management System built with Flask and SQLYOG.",
    date: "2026-05-19",
    banner: "/static/erms_dashboard_mockup.png",
    timecode: "6 mins read",
    slug: "erms-database-architecture"
  },
  {
    title: "Voice-First POS with Flutter & LLMs",
    abstract: "Developing SayBill AI: How a cross-platform Flutter application integrates with large language models to provide instant, voice-first retail billing.",
    date: "2026-05-18",
    banner: "/static/saybill_dashboard_mockup.png",
    timecode: "8 mins read",
    slug: "saybill-voice-pos"
  }
];

const articlesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Technical Articles by Junaid A S",
  "description": "Technical writeups and architecture deep dives on AI, mobile development, and databases.",
  "itemListElement": articles.map((art, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `https://junaidas.in/articles/${art.slug}`,
    "name": art.title,
    "description": art.abstract
  }))
};

export function ArticlesIndex() {
  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }}
      />
      <section className={styles.articles}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Heading level={2} as="h1" className={styles.title}>
              <DecoderText text="Writing" start={true} delay={100} />
            </Heading>
            <Text className={styles.subtitle}>
              Sharing thoughts on machine learning, database indexing, API scaling, and design patterns.
            </Text>
          </header>

          <div className={styles.grid}>
            {articles.map((article, index) => {
              const formattedDate = formatDate(article.date);
              return (
                <RouterLink 
                  to={`/articles/${article.slug}`} 
                  key={article.slug} 
                  className={styles.card}
                  aria-label={`Read article: ${article.title}`}
                >
                  <div className={styles.cardBanner}>
                    <img 
                      src={article.banner} 
                      alt={article.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.cardDate}>{formattedDate}</span>
                      <span className={styles.cardTime}>{article.timecode}</span>
                    </div>
                    <Heading level={4} as="h3" className={styles.cardTitle}>
                      {article.title}
                    </Heading>
                    <Text className={styles.cardAbstract}>
                      {article.abstract}
                    </Text>
                    <div className={styles.cardFooter}>
                      <span>Read article</span>
                      <span className={styles.cardArrow} aria-hidden="true">→</span>
                    </div>
                  </div>
                </RouterLink>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
