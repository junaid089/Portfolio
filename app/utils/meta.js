import config from '~/config.json';

const { name, url } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
  ogType = 'website',
  canonicalUrl,
  keywords = [
    'Junaid A S',
    'Junaid AS',
    'Junaid',
    'junaid089',
    'AI Engineer',
    'Full-Stack Developer',
    'Software Engineer',
    'Flutter Developer',
    'Python AI Developer',
    'SayBill AI',
    'ERMS',
    'LLM Integration',
    'RAG Pipelines',
    'Palakkad',
    'Kerala',
    'India',
  ],
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const pageUrl = canonicalUrl || url;
  const secureOgImage = ogImage.startsWith('http') ? ogImage : `${url}${ogImage}`;

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'keywords', content: Array.isArray(keywords) ? keywords.join(', ') : keywords },
    { name: 'author', content: name },
    { name: 'creator', content: name },
    { name: 'publisher', content: name },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: ogType },
    { property: 'og:site_name', content: `${name} | AI Engineer & Full-Stack Developer` },
    { property: 'og:title', content: titleText },
    { property: 'og:description', content: description },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: secureOgImage },
    { property: 'og:image:secure_url', content: secureOgImage },
    { property: 'og:image:alt', content: `${titleText} - Banner Preview` },
    { property: 'og:image:width', content: '1280' },
    { property: 'og:image:height', content: '800' },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image', content: secureOgImage },
    { property: 'twitter:image:alt', content: `${titleText} - Banner Preview` },
  ];
}

