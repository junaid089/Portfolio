import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation,
  useRouteError,
} from '@remix-run/react';
import { createCookieSessionStorage, json } from '@remix-run/cloudflare';
import { ThemeProvider, themeStyles } from '~/components/theme-provider';
import GothamBook from '~/assets/fonts/gotham-book.woff2';
import GothamMedium from '~/assets/fonts/gotham-medium.woff2';
import { useEffect } from 'react';
import { Error } from '~/layouts/error';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Navbar } from '~/layouts/navbar';
import { Progress } from '~/components/progress';
import config from '~/config.json';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';

export const links = () => [
  {
    rel: 'preload',
    href: GothamMedium,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  {
    rel: 'preload',
    href: GothamBook,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
  { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];

export const loader = async ({ request, context }) => {
  const { url } = request;
  const { pathname } = new URL(url);
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const canonicalUrl = `${config.url}${cleanPath}`;

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: [context.cloudflare.env.SESSION_SECRET || ' '],
      secure: true,
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  const theme = session.get('theme') || 'dark';

  return json(
    { canonicalUrl, theme },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
};

export default function App() {
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();

  if (fetcher.formData?.has('theme')) {
    theme = fetcher.formData.get('theme');
  }

  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === 'dark' ? 'light' : 'dark' },
      { action: '/api/set-theme', method: 'post' }
    );
  }

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://junaidas.in/#person",
        "name": "Junaid A S",
        "alternateName": ["Junaid AS", "Junaid", "Junaid A.S.", "junaid089"],
        "description": "AI Architect, AI Engineer and Automation Specialist specializing in designing end-to-end autonomous intelligent systems, enterprise task automation pipelines, LLM architectures, Flutter mobile apps, and scalable web platforms.",
        "jobTitle": "AI Architect & Automation Engineer",
        "gender": "Male",
        "nationality": {
          "@type": "Country",
          "name": "India"
        },
        "url": "https://junaidas.in",
        "image": "https://junaidas.in/social-image.png",
        "email": "mailto:junu089@gmail.com",
        "telephone": "+917034092876",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Palakkad",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Artcl.in",
          "url": "https://artcl.in"
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "University of Calicut"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Mskills"
          }
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "AI Architect & Automation Engineer",
          "skills": "AI Architecture, Task Automation Engineering, Autonomous Agent Workflows, LLM Fine-Tuning, Prompt Engineering, RAG Systems, Flutter, Python, Dart, React, Django, PostgreSQL, Cloud Infrastructure"
        },
        "sameAs": [
          "https://github.com/junaid089",
          "https://www.linkedin.com/in/junaid-as"
        ],
        "knowsAbout": [
          "AI Architecture & System Design",
          "Enterprise Task Automation & Agentic Workflows",
          "Autonomous AI Agents",
          "Artificial Intelligence & Machine Learning",
          "Large Language Models (LLMs) & Prompt Engineering",
          "Generative AI & RAG Pipelines",
          "Mobile Application Development (Flutter)",
          "Full-Stack Web Development (React, Node.js, Django, Flask)",
          "Database Schema Design & Query Optimization (PostgreSQL, MySQL, SQLYOG)",
          "Computer Vision & Speech Processing",
          "Cloud Deployment & DevOps (AWS, Firebase, Vercel, Docker)"
        ],
        "mainEntityOfPage": {
          "@id": "https://junaidas.in/#profile"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://junaidas.in/#website",
        "url": "https://junaidas.in",
        "name": "Junaid A S | AI Architect, Engineer & Automation Specialist",
        "alternateName": "Junaid Portfolio",
        "description": "Official portfolio, research writeups, and AI engineering projects of Junaid A S.",
        "publisher": {
          "@id": "https://junaidas.in/#person"
        },
        "author": {
          "@id": "https://junaidas.in/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfilePage",
        "@id": "https://junaidas.in/#profile",
        "url": "https://junaidas.in",
        "name": "Junaid A S - Profile & Digital Portfolio",
        "isPartOf": {
          "@id": "https://junaidas.in/#website"
        },
        "about": {
          "@id": "https://junaidas.in/#person"
        },
        "mainEntity": {
          "@id": "https://junaidas.in/#person"
        },
        "primaryImageOfPage": "https://junaidas.in/social-image.png"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme color doesn't support oklch so I'm hard coding these hexes for now */}
        <meta name="theme-color" content={theme === 'dark' ? '#111' : '#F2F2F2'} />
        <meta
          name="color-scheme"
          content={theme === 'light' ? 'light dark' : 'dark light'}
        />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Summary Feed" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Knowledge Profile" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body data-theme={theme}>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <Progress />
          <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
            Skip to main content
          </VisuallyHidden>
          <Navbar />
          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={state === 'loading'}
          >
            <Outlet />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark light" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        <Error error={error} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
