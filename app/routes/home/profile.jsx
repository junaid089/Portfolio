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
      I’m Junaid A S, an AI Engineer and Full-Stack Developer from Kerala, India. I work across the complete product lifecycle: planning, UI/UX design, frontend development, backend APIs, AI workflows, cloud deployment, and hosting.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My core services include:
    </Text>
    <List className={styles.description} data-visible={visible}>
      <ListItem>
        <strong>AI-Powered Web & Mobile Apps:</strong> Integrating LLMs, Vision AI, and automation into real products.
      </ListItem>
      <ListItem>
        <strong>Full-Stack Web Development:</strong> End-to-end website delivery using React, Node.js, Django, and REST APIs.
      </ListItem>
      <ListItem>
        <strong>Mobile App Development:</strong> Cross-platform iOS and Android apps with polished UI using Flutter.
      </ListItem>
      <ListItem>
        <strong>Cloud Deployment & Hosting:</strong> Scalable deployments on Firebase, AWS, Vercel, and Hostinger.
      </ListItem>
    </List>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My technical toolkit includes Python, Dart, JavaScript/TypeScript, SQL, Flutter, Django, React, and Node.js. For AI and Machine Learning, I frequently work with OpenAI, Hugging Face, RAG pipelines, and Prompt Engineering.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently, I work as an AI Engineer at Artcl.in, where I develop AI-powered software solutions focusing on automation and ML model implementation. Previously, I was a Python Full Stack Developer Intern at Febno.co, building and maintaining web apps using Django and PostgreSQL.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time, I like to explore new AI/ML tools, and build intelligent automation workflows. I’m always down for hearing about new projects, so feel free to drop me a line.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
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
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
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
