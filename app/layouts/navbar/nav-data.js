import config from '~/config.json';

export const navLinks = [
  {
    label: 'Highlights',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Skills',
    pathname: '/#skills',
  },
  {
    label: 'Experience',
    pathname: '/#experience',
  },
  {
    label: 'Education',
    pathname: '/#education',
  },
  {
    label: 'Projects',
    pathname: '/#projects',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/junaid-as',
    icon: 'linkedin',
  },
];
