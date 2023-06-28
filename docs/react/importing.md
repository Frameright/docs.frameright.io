---
sidebar_position: 30
tags:
  - explanation
---

# Importing in your project

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/react-image-display-control/discussions)

## Inside a Node.js-based project

You can add the React component to your [Node.js](https://nodejs.org/en)-based
project (e.g. using [Next.js](https://nextjs.org/) or
[Vite](https://vitejs.dev/)) with:

```bash
npm install @frameright/react-image-display-control
```

No matter whether your code is intended to run in the browser, during
[server-side rendering](ssr) or at build time for building static pages, you
can import the React component anywhere with:

```js
import '@frameright/react-image-display-control';
```

### Inside a Next.js project

As a workaround for
[this issue](https://github.com/Frameright/image-display-control-metadata-parser/issues/3),
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

See also
https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
