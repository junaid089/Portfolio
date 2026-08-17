import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { Skills } from './skills';
import { Metrics } from './metrics';
import { Experience } from './experience';
import { EducationCerts } from './education-certs';
import { ProjectsGrid } from './projects-grid';
import { Testimonials } from './testimonials';
import { FAQ } from './faq';
import { ProjectSummary } from './project-summary';
import { ResumeModal } from '~/components/resume-modal';
import { AiAssistant } from '~/components/ai-assistant';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI Architect, AI Engineer & Automation Specialist',
    description: `Official portfolio of ${config.name} (Junaid AS) — AI Architect, AI Engineer and Automation Specialist specializing in designing autonomous intelligent systems, enterprise task automation pipelines, LLM architectures, Flutter mobile apps, and scalable web backends.`,
    keywords: [
      'Junaid A S',
      'Junaid AS',
      'Junaid',
      'junaid089',
      'AI Architect',
      'AI Engineer',
      'Automation Engineer',
      'Task Automation Specialist',
      'Autonomous AI Agents',
      'Full-Stack Developer',
      'Software Engineer',
      'Flutter Developer',
      'Python AI Engineer',
      'SayBill AI',
      'ERMS',
      'RAG Architectures',
      'Palakkad',
      'Kerala',
      'India'
    ]
  });
};


export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const details = useRef();
  const skills = useRef();
  const metrics = useRef();
  const experience = useRef();
  const education = useRef();
  const projects = useRef();
  const testimonials = useRef();
  const faq = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      details,
      skills,
      metrics,
      experience,
      education,
      projects,
      testimonials,
      faq,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Web Development"
        description="End-to-end website delivery — design, development, and hosting. React, Node.js, Django, REST APIs."
        buttonText="More details"
        buttonLink="/#details"
        model={{
          type: 'laptop',
          alt: 'Web Development',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Mobile App Development"
        description="Cross-platform iOS and Android apps. AI-integrated mobile experiences with polished UI."
        buttonText="More details"
        buttonLink="/#details"
        model={{
          type: 'phone',
          alt: 'Mobile App Development',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
        onOpenResume={() => setResumeOpen(true)}
      />
      <Skills
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
      />
      <Metrics
        sectionRef={metrics}
        visible={visibleSections.includes(metrics.current)}
        id="metrics"
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <EducationCerts
        sectionRef={education}
        visible={visibleSections.includes(education.current)}
        id="education"
      />
      <ProjectsGrid
        sectionRef={projects}
        visible={visibleSections.includes(projects.current)}
        id="projects"
      />
      <Testimonials
        sectionRef={testimonials}
        visible={visibleSections.includes(testimonials.current)}
        id="testimonials"
      />
      <FAQ
        sectionRef={faq}
        visible={visibleSections.includes(faq.current)}
        id="faq"
      />
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
      <AiAssistant />
      <Footer />
    </div>
  );
};

