---
sidebar_position: 240
href: https://www.youtube.com/watch?v=vlyoAPku_NU
title: Tutorial
slug: _tutorial
sidebar_class_name: sidebar-external-link
pagination_prev: null
pagination_next: null
---

<!--
NOTES:
* This is a dummy document that will be replaced by an external link in the
  sidebar. See `/docusaurus.config.js`.
* We prevent the previous real document from providing a `Next` link to this
  dummy page by setting `pagination_next: null` in its front matter.
-->

import Link from '@docusaurus/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';

<!-- See https://docusaurus.io/docs/markdown-features/react#available-exports -->
<Link href={ frontMatter.href }>{ frontMatter.href }<IconExternalLink /></Link>
