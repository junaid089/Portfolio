import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './saybill.module.css';

const title = 'SayBill AI';
const description =
  'An AI-powered voice billing and retail POS ecosystem built with Flutter, Dart, CodeIgniter, and LLMs.';
const roles = [
  'Mobile Architecture',
  'Voice & AI Pipeline',
  'Backend & Cloud API',
];

export const meta = () => {
  return baseMeta({
    title: 'SayBill AI — Voice-First Point of Sale Ecosystem',
    description: 'An AI-powered voice billing and retail POS ecosystem built with Flutter, Dart, CodeIgniter, and LLMs by Junaid.',
    prefix: 'Projects',
    ogImage: '/static/saybill_scanner_mockup.png',
    canonicalUrl: 'https://junaidas.in/projects/saybill',
    keywords: [
      'SayBill AI',
      'Voice POS',
      'AI Billing App',
      'Flutter Point of Sale',
      'Junaid A S',
      'Junaid',
      'Dart Audio Isolates',
      'Retail POS LLM'
    ]
  });
};

const saybillSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SayBill AI",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "BusinessApplication",
  "description": "An AI-powered voice billing and retail POS ecosystem built with Flutter, Dart isolates, and LLMs.",
  "author": {
    "@type": "Person",
    "name": "Junaid A S",
    "url": "https://junaidas.in"
  },
  "creator": {
    "@type": "Person",
    "name": "Junaid A S",
    "url": "https://junaidas.in"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Real-time voice-driven order transcription",
    "Sub-420ms voice-to-cart latency with LLM JSON schema extraction",
    "Camera Vision barcode scanner",
    "Automated WhatsApp invoice delivery",
    "Bluetooth thermal receipt printing"
  ]
};

export const SayBill = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saybillSchema) }}
      />
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/junaid089"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet="/static/saybill_scanner_mockup.png 1280w, /static/saybill_scanner_mockup.png 2560w"
              width={1280}
              height={800}
              placeholder="/static/saybill_scanner_mockup.png"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="SayBill AI Voice Mobile App showcasing the smart product scanner and voice waveform visualizer."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
              Traditional Point of Sale (POS) systems are often bulky, slow, and expensive. 
              For small-to-medium retail merchants and local shopkeepers in fast-paced markets, 
              learning complex POS interfaces or manually typing out every line-item creates 
              significant customer friction. In addition, these systems rarely support seamless 
              multilingual regional speech inputs, locking non-technical business owners out of 
              efficient digital operations.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Intelligent UI & Analytics</ProjectSectionHeading>
              <ProjectSectionText>
                To provide merchants with complete control, we designed a responsive and 
                premium dashboard. Utilizing glassmorphism elements, high-contrast HSL slate 
                and neon green colors, the UI presents sales velocities, peak revenue hours, 
                real-time low-stock inventory alerts, and instant Bluetooth print queues 
                without clunky navigation layers.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Under the Hood: AI & Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                SayBill AI combines a robust Flutter frontend and a secure PHP CodeIgniter 
                REST API backend. The core innovation lies in Junaid's custom AI pipeline. 
                When a merchant speaks into the app, a voice widget captures the audio, parses 
                it using natural language processing (NLP) and LLM classification models, 
                automatically mapping spoken products and quantities directly into a structured cart. 
                Simultaneously, a camera-based Vision scanner detects physical barcode patterns 
                instantly. Invoices are dispatched to clients in real-time via automated WhatsApp 
                notifications while local copies are sent to integrated Bluetooth thermal printers.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Engineering Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Ultimately, Junaid's SayBill AI successfully modernized billing operations for 
                pilot retail merchants. The application reduced checkout billing times by over 70%, 
                achieving a multilingual speech parsing accuracy of 98.6%. Shop owners can 
                now manage stock, send PDF invoices on WhatsApp, print thermal receipts, 
                and track revenues with absolute ease. Learn more about the project's source on{' '}
                <Link href="https://github.com/junaid089">
                  Junaid's GitHub
                </Link>.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
