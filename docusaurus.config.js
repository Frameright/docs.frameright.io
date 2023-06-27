// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const githubOrgName = 'frameright';
const githubProjectName = 'docs.frameright.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frameright',
  tagline: 'For developers',
  favicon: 'img/frameright_logo.png',

  // Set the production url of your site here
  url: 'https://docs.frameright.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: githubOrgName,
  projectName: githubProjectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${githubOrgName}/${githubProjectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/frameright_logo.png',
      navbar: {
        title: 'Frameright',
        logo: {
          alt: 'Frameright Logo',
          src: 'img/frameright_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://www.frameright.io/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://frameright.io/about',
            label: 'About us',
            position: 'left',
          },
          {
            href: 'https://frameright.app',
            label: 'Frameright App',
            position: 'right',
          },
          {
            href: 'https://github.com/frameright',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Overview',
                to: '/docs',
              },
              {
                label: 'React Component',
                to: '/docs/react-component',
              },
              {
                label: 'Web Component',
                to: '/docs/web-component',
              },
              {
                label: 'JavaScript Library',
                to: '/docs/javascript-library',
              },
              {
                label: 'PHP Library',
                to: '/docs/php-library',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/Frameright/react-image-display-control/discussions',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/getframeright',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/frameright',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/getframeright/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Frameright/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Frameright App',
                href: 'https://frameright.app',
              },
              {
                label: 'Blog',
                href: 'https://frameright.io/blog',
              },
              {
                label: 'About us',
                href: 'https://frameright.io/about',
              },
              {
                label: 'Contact us',
                href: 'https://www.frameright.io/contact',
              },
              {
                label: 'Careers',
                href: 'https://wellfound.com/company/frameright',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Frameright (Coberg Ltd)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        // Disable dark mode for now because our `feature_*.svg` images don't
        // look good in this mode. See
        // https://docusaurus.io/docs/api/themes/configuration#color-mode---dark-mode
        defaultMode: 'light',
        disableSwitch: true,
      },
    }),
};

module.exports = config;
