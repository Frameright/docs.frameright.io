---
sidebar_position: 80
tags:
  - reference
---

# Changelog

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/react-image-display-control" />

### 1.0.7 (2024-04-29)

- Fixed missing dependency to `tslib`.
  ([cdd2217268](https://github.com/Frameright/react-image-display-control/commit/cdd2217268))

### 1.0.6 (2024-04-23)

- Slightly reduced library size by pinning [v2 of the metadata parser](../javascript/changelog).
  ([parser#3](https://github.com/Frameright/image-display-control-metadata-parser/issues/3),
  [8131ae84ba](https://github.com/Frameright/react-image-display-control/commit/8131ae84ba))

### 1.0.5 (2023-07-02)

- Fixed crash when using
  [`data-debug-draw-regions="on"`](../web-component/attribute-ref.md) in
  single page applications.

### 1.0.4 (2023-06-28)

- Moved documentation to https://docs.frameright.io/react

### 1.0.2 and 1.0.3 (2023-06-11)

- Fixed `import()`-related race condition leading to image regions not being
  found.

### 1.0.1 (2023-06-09)

- Fixed link on npm.

### 1.0.0 (2023-06-09)

- Implemented the `data-path-on-server="none"` attribute to disable warnings
  when the image is not found while performing
  [server-side rendering](ssr.md) or static site generation.

### 0.0.1 (2023-05-31)

- Initial version.
