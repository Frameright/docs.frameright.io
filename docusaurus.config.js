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
  favicon: 'img/frameright/frameright_logo.png',

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

          // Custom sidebar for external links. See
          // https://docusaurus.io/docs/sidebar/autogenerated#customize-the-sidebar-items-generator
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            docs,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator({
              docs,
              ...args,
            });
            return replaceExternalLinks(sidebarItems, docs);
          },

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${githubOrgName}/${githubProjectName}/tree/main/`,

          // Docs-only mode, see
          // https://docusaurus.io/docs/docs-introduction#docs-only-mode
          routeBasePath: '/',
        },
        blog: false,
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
      image: 'img/frameright/frameright_logo.png',
      navbar: {
        title: 'Frameright',
        logo: {
          alt: 'Frameright Logo',
          src: 'img/frameright/frameright_logo.png',
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
            href: 'https://frameright.io',
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
                label: 'Introduction',
                to: '/introduction',
              },
              {
                label: 'React Component',
                to: '/react',
              },
              {
                label: 'Web Component',
                to: '/web-component',
              },
              {
                label: 'JavaScript Library',
                to: '/javascript',
              },
              {
                label: 'PHP Library',
                to: '/php',
              },
              {
                label: 'WordPress Plugin',
                to: '/wordpress',
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
                href: 'https://frameright.io',
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

// Recursively replaces internal links to special pages like
// docs/react/github-repo.md with external links. See
// https://docusaurus.io/docs/sidebar/autogenerated#customize-the-sidebar-items-generator
function replaceExternalLinks(items, docs) {
  return items.map((item) => {
    if (item.type === 'category') {
      // Recursion
      return {
        ...item,
        items: replaceExternalLinks(item.items, docs),
      };
    } else if (item.type === 'doc') {
      // If this item is known to be a special page, replace it with an
      // external link.
      const document = docs.find((doc) => doc.id === item.id);
      if (document && document.frontMatter.href) {
        return {
          type: 'link',
          label: document.title,
          href: document.frontMatter.href,
        };
      }
    }
    return item;
  });
}

module.exports = config;
