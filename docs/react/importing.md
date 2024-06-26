---
sidebar_position: 30
tags:
  - explanation
---

# Importing in your project

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/react-image-display-control" />

## Inside a Node.js-based project

You can add the React component to your Node.js-based project (e.g. using
[Next.js](https://nextjs.org/) or [Vite](https://vitejs.dev/)) with:

```bash
npm install @frameright/react-image-display-control
```

> **Less than 5kB in your final client-side bundle.**

No matter whether your code is intended to run in the browser, during
[server-side rendering](ssr.md) or at build time for building static pages, you
can import the React component anywhere with:

```js
import '@frameright/react-image-display-control';
```

### Inside a Next.js project

As a workaround for
["Module not found: Can't resolve 'fs' in Next.js application"](https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application),
you need to set `config.resolve.fallback = { fs: false };` in your
`next.config.js` in order to be able to import the React component. Your file
should look like this:

```js title=next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
```

Create it if it doesn't exist yet in your project.
