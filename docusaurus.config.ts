// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

export default {
  title: 'Lacuna Docs',
  tagline: 'Здесь вы сможете найти для себя много полезной информации по работе с ботом Lacuna.',
  favicon: 'img/favicon-128x128.png',

  // Set the production url of your site here
  url: 'https://docs.lacunabot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LacunaHub', // Usually your GitHub org/user name.
  projectName: 'LacunaDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lacuna',
        logo: {
          alt: 'Lacuna avatar',
          src: 'img/favicon-128x128.png',
        },
        items: [
          {
            href: 'https://lacunabot.com',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://discord.gg/lacunabot',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Xelitte`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
} satisfies Config
