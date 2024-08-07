/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'README',
    'general-settings',
    'commands',
    {
      type: 'category',
      label: 'Модерирование',
      items: [
        {
          type: 'autogenerated',
          dirName: 'moderation'
        }
      ]
    },
    {
      type: 'category',
      label: 'Пользовательское поведение',
      items: [
        {
          type: 'autogenerated',
          dirName: 'custom-behavior'
        }
      ],
      link: { type: 'doc', id: 'custom-behavior/README' }
    },
    {
      type: 'category',
      label: 'Активности',
      items: [
        {
          type: 'autogenerated',
          dirName: 'activities'
        }
      ]
    },
    'social-alerts',
    {
      type: 'category',
      label: 'Голосовые каналы',
      items: [
        {
          type: 'autogenerated',
          dirName: 'voice'
        }
      ]
    },
    {
      type: 'category',
      label: 'Полезное',
      items: [
        {
          type: 'autogenerated',
          dirName: 'useful'
        }
      ]
    },
    {
      type: 'category',
      label: 'Руководства',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides'
        }
      ]
    },
    {
      type: 'category',
      label: 'Прочее',
      items: [
        {
          type: 'autogenerated',
          dirName: 'other'
        }
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
}

export default sidebars
