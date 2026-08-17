import profileImg from '~/assets/IMG_3016.jpeg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { List, ListItem } from '~/components/list';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Junaid A S, an AI Architect, AI Engineer, and Automation Specialist from Kerala, India. I specialize in designing autonomous intelligent architectures and engineering deep automation workflows that automate complex tasks end-to-end.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My core areas of expertise include:
    </Text>
    <List className={styles.description} data-visible={visible}>
      <ListItem>
        <strong>AI Architecture & Task Automation Engineering:</strong> Architecting autonomous agent pipelines, intelligent data workflows, and automating complex business tasks using LLMs and modern automation frameworks.
      </ListItem>
      <ListItem>
        <strong>AI-Powered Web & Mobile Apps:</strong> Integrating LLMs, Voice AI, Vision models, and real-time inference into Flutter, React, and native apps.
      </ListItem>
      <ListItem>
        <strong>Full-Stack & Backend Systems:</strong> High-performance APIs and scalable architectures using Python (Django, Flask, FastAPI), Node.js, and relational database indexing.
      </ListItem>
      <ListItem>
        <strong>Cloud Deployment & DevOps:</strong> Containerized, resilient deployments on AWS, Docker, Firebase, and Cloudflare Pages.
      </ListItem>
    </List>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My technical toolkit spans Python, Dart, JavaScript/TypeScript, SQL, Flutter, Django, React, FastAPI, Docker, and AWS. In AI and Automation, I architect multi-agent systems, RAG pipelines, Prompt Engineering systems, and task automation orchestrations.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently, I work as an AI Engineer at Artcl.in, where I architect AI-powered software solutions, enterprise automation pipelines, and machine learning implementations. Previously, I was a Python Full Stack Developer Intern at Febno.co.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I love collaborating on ambitious AI architectures, autonomous agents, and intelligent automation challenges. Feel free to reach out and connect!
    </Text>
  </Fragment>
);


export const Profile = ({ id, visible, sectionRef, onOpenResume }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.buttonGroup} data-visible={visible}>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
                {onOpenResume && (
                  <Button
                    className={styles.button}
                    data-visible={visible}
                    onClick={onOpenResume}
                    icon="arrow-right"
                  >
                    View ATS Resume
                  </Button>
                )}
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  srcSet={`${profileImg} 480w, ${profileImg} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

