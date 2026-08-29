import config from '~/config.json';

export const navLinks = [
  {
    label: 'Home',
    pathname: '/',
  },
  {
    label: 'About',
    pathname: '/about',
  },
  {
    label: 'Skills',
    pathname: '/skills',
  },
  {
    label: 'Projects',
    pathname: '/projects',
  },
  {
    label: 'Certificates',
    pathname: '/certificates',
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
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
];
