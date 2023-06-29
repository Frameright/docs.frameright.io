---
sidebar_position: 70
tags:
  - howto
---

# Contributing

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/react-image-display-control/discussions)

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

Pull and run [Jest](https://jestjs.io/) with:

```bash
npm install
npm run test
```

### Running the local demo

Build the React component, pull [Parcel](https://parceljs.org/) and run
[`example/`](example.md) with:

```bash
cd example/
./clean-build-and-run.sh  # interactive watch mode
```

&emsp; :sparkles: [Live mobile demo](https://react.frameright.io)

&emsp; 💻 [CodeSandbox](https://codesandbox.io/s/image-display-control-react-component-m6qj9r)

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

### Changelog

Describe the changes made compared to the last released version in the
[changelog](changelog.md). Browse the git history to make sure nothing has been
left out.

### Update the `package-lock.json` files

```bash
cd example/
./clean-build-and-run.sh
```

### Last tweaks and checks

Format and validate the source one last time:

```bash
npm run format
npm run gentoc
npm run lint
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
`frameright-react-image-display-control-1.2.3.tgz` looks well-formed.
Finally clean up by running:

```bash
rm frameright-react-image-display-control-1.2.3.tgz
```

### Publish the package to npm

```bash
npm login --scope=@frameright
npm publish
```

> **NOTE**: on the first publication do `npm publish --access public` instead.

And check that the package looks well-formed at
`https://www.npmjs.com/package/@frameright/react-image-display-control/v/1.2.3`.
