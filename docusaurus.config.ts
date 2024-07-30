// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

export default {
  title: 'Lacuna Docs',
  tagline: 'Здесь вы сможете найти для себя много полезной информации по работе с ботом Lacuna.',
  favicon: 'favicon-128x128.png',

  // Set the production url of your site here
  url: 'https://docs.lacunabot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru']
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/LacunaHub/LacunaDocs/tree/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      }
    ]
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/1920x1080.png',
    navbar: {
      title: 'Lacuna',
      logo: {
        alt: 'Lacuna avatar',
        src: 'favicon-128x128.png'
      },
      items: [
        {
          href: 'https://lacunabot.com',
          className: 'header--link header--www-link',
          position: 'right'
        },
        {
          href: 'https://discord.gg/lacunabot',
          className: 'header--link header--discord-link',
          position: 'right'
        },
        {
          href: 'https://t.me/roviusistaken',
          className: 'header--link header--telegram-link',
          position: 'right'
        },
        {
          href: 'https://github.com/LacunaHub',
          className: 'header--link header--github-link',
          position: 'right'
        },
        {
          href: 'https://crowdin.com/project/lacuna',
          className: 'header--link header--translate-link',
          position: 'right'
        }
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true
    }
  }
} satisfies Config
