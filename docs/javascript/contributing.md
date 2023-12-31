---
sidebar_position: 10
tags:
  - howto
---

# Contributing

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/image-display-control-metadata-parser" />

:::info

If you haven't already, check out the source code before proceeding:

```bash
git clone https://github.com/Frameright/image-display-control-metadata-parser
cd image-display-control-metadata-parser/
```

:::

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

## Documenting

### (Re-)generating the TypeDoc reference documentation

Pull and run [TypeDoc](https://typedoc.org/) with:

```bash
npm install
npm run gendoc
```

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

- in [this documentation](README.md),
- on [GitHub](https://github.com/Frameright/image-display-control-metadata-parser).

### Changelog

Describe the changes made compared to the last released version in the
[changelog](changelog.md). Browse the git history to make sure nothing has been
left out.

### Update `package-lock.json`

```bash
rm -rf node_modules/ package-lock.json
npm install
```

### Last tweaks and checks

Format and validate the source one last time:

```bash
npm run format
npm run gendoc
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
`frameright-image-display-control-metadata-parser-1.2.3.tgz` looks well-formed.
Finally clean up by running:

```bash
rm frameright-image-display-control-metadata-parser-1.2.3.tgz
```

### Publish the package to npm

```bash
npm login --scope=@frameright
npm publish
```

:::tip

On the first publication do `npm publish --access public` instead.

:::

And check that the package looks well-formed at
`https://www.npmjs.com/package/@frameright/image-display-control-metadata-parser/v/1.2.3`.
