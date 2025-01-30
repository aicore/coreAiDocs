import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn LLM',
  tagline: 'Large Language Models Made Simple',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://docs.core.ai',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'core.ai',
  projectName: 'coreAiDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/core-ai/coreAiDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/core-ai/coreAiDocs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/llm-social-card.jpg',
      navbar: {
        title: 'Learn LLM',
        logo: {
          alt: 'Learn LLM Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '5-Min Tutorial',
          },
          {
            to: '/quickstart',
            label: 'Quick Start',
            position: 'left',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/core-ai/coreAiDocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: '5-Min Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Quick Start',
                to: '/quickstart',
              },
              {
                label: 'Best Practices',
                to: '/docs/best-practices',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/core-ai/coreAiDocs',
              },
              {
                label: 'Interactive Examples',
                to: '/docs/examples',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/core-ai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/core_ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Core.ai - Learn LLM. Built with Docusaurus.`,
      },
      // Theme configurations
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Syntax highlighting
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'javascript', 'bash'],
      },
    }),
};

export default config;