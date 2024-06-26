---
sidebar_position: 20
tags:
  - reference
pagination_next: null
---

# Changelog

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/image-display-control-metadata-parser" />

### 2.0.0 (2024-04-23)

- Reduced library size by 33% by not shipping node polyfills anymore, thanks to
  `image-size@2`. This also simplifies the way the library is consumed.
  ([#3](https://github.com/Frameright/image-display-control-metadata-parser/issues/3),
  [d75aaf6194](https://github.com/Frameright/image-display-control-metadata-parser/commit/d75aaf6194))

### 1.2.0 (2023-12-07)

- Added two more fields to
  [`ImageRegion`](https://github.com/Frameright/image-display-control-metadata-parser/blob/main/generated-docs/classes/ImageRegion.md):
  `idcRegionDefinitionId` and `idcRegionDefinitionName`. See
  [#25](https://github.com/Frameright/image-display-control-metadata-parser/pull/25)

### 1.1.1 (2023-06-28)

- Moved documentation to https://docs.frameright.io/javascript

### 1.1.0 (2023-05-18)

- Added one more export path inside `package.json` in order to support
  dynamic `import()`.

### 1.0.4 (2023-05-12)

- Fixed parsing bug for image regions having only one role.

### 1.0.3 (2023-04-22)

- Document how to use the browser build.

### 1.0.2 (2023-04-21)

- Add missing `Buffer` class to the browser build.

### 1.0.1 (2023-04-21)

- Remove dangling imports to Node.js built-in modules (e.g. `fs`) from the
  browser build.

### 1.0.0 (2023-04-21)

- Build `image-display-control-metadata-parser-standalone.min.js` to be served
  by a CDN and used in the browser.

### 0.1.0 (2023-04-19)

- Initial version.
