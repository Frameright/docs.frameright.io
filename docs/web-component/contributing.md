---
sidebar_position: 90
tags:
  - howto
---

# Contributing

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/image-display-control-web-component/discussions)

## Code formatting

Pull and run [ESLint](https://eslint.org/) and
[prettier](https://github.com/prettier/prettier) with:

```bash
npm install
npm run lint    # check for errors
npm run format  # fix errors
```

## Validating

### Running the unit tests

Pull and run
[Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) with:

```bash
npm install
npm run test        # run once
npm run test:watch  # interactive watch mode
```

### Running the local demo

Pull and run [Web Dev Server](https://modern-web.dev/docs/dev-server/overview/)
in order to serve and run [the demo](demo.md) with:

```bash
npm install
npm start  # interactive watch mode
```

&emsp; :sparkles: [Live mobile demo](https://webc.frameright.io)

&emsp; 💻 [CodeSandbox](https://codesandbox.io/s/image-display-control-web-component-6hzmq5)

## Documenting

### (Re-)generating tables of contents

Pull and run [`markdown-toc`](https://github.com/jonschlinkert/markdown-toc)
with:

```bash
npm install
npm run gentoc
```

## Releasing

### Version number

Choose the next version number according to the rules of
[Semantic Versioning](https://semver.org/) and set it in `package.json`.

Also update the examples to use the new version number:

- in [the main documentation](../web-component/README.md),
- in [the import documentation](importing.md),
- on [GitHub](https://github.com/Frameright/image-display-control-web-component).

### Changelog

Describe the changes made compared to the last released version in the
[changelog](changelog.md). Browse the git history to make sure nothing
has been left out.

### Update `package-lock.json`

```bash
rm -rf node_modules/ package-lock.json
npm install
```

### Last tweaks and checks

Format and validate the source one last time:

```bash
npm run format
npm run gentoc
npm run test
```

Commit and push any local changes:

```bash
git add -A
git commit -m "<my message>"
git push
```

### Git tag

In the rest of this document we'll assume you are releasing version `1.2.3`.
Create a git tag for the version you are releasing by running:

```bash
git tag 1.2.3
git push --tags
```

### Build the package locally

Build the package locally by running:

```bash
npm pack
```

And check that the resulting
`frameright-image-display-control-web-component-1.2.3.tgz` looks well-formed.
Finally clean up by running:

```bash
rm frameright-image-display-control-web-component-1.2.3.tgz
```

### Publish the package to NPM

```bash
npm login --scope=@frameright
npm publish
```

> **NOTE**: on the first publication do `npm publish --access public` instead.

And check that the package looks well-formed at
`https://www.npmjs.com/package/@frameright/image-display-control-web-component/v/1.2.3`.

Also check that the web component is available via CDN at
`https://cdn.jsdelivr.net/npm/@frameright/image-display-control-web-component@1.2.3/dist/image-display-control.min.js`.
