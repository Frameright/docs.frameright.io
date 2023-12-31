---
sidebar_position: 100
tags:
  - reference
pagination_next: null
---

# Changelog

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/image-display-control-web-component" />

### 1.1.8 (2023-09-11)

- Bumped a few dependencies.

### 1.1.7 (2023-07-02)

- Fixed crash when using [`data-debug-draw-regions="on"`](attribute-ref.md) in
  single page applications.

### 1.1.6 (2023-06-28)

- Moved documentation to https://docs.frameright.io/web-component

### 1.1.5 (2023-06-21)

- Improved documentation.

### 1.1.4 (2023-06-11)

- Improved documentation.

### 1.1.3 (2023-05-10)

- Fixed bug where the web component would not always re-assess the new image
  size after changing the `src=` attribute.

### 1.1.2 (2023-05-09)

- Fixed bug where the web component would not re-assess the new image size
  after changing the `src=` attribute.

### 1.1.1 (2023-05-09)

- Fixed bug where the [image region overlays (for debugging purposes)](html-attrs.md)
  would not be updated when the image region list changed.

### 1.1.0 (2023-05-05)

- Added one more export path inside `package.json`.

### 1.0.0 (2023-05-05)

- Exported minified bundle inside `package.json`.

### 0.1.0 (2023-03-03)

- Added [`data-avoid-no-region=` attribute](attribute-ref.md).
- Added
  [debounce function](https://davidwalsh.name/javascript-debounce-function)
  when setting the `sizes=` attribute in order to avoid blinking on Chrome.

### 0.0.9 (2023-02-20)

- Implemented overriding responsively the `sizes=` attribute in order to fetch
  an image from the `srcset=` attribute that has a high enough resolution for
  the region we're zooming in.

### 0.0.8 (2023-02-16)

- Fixed race condition when the image takes time to load.

### 0.0.7 (2023-02-09)

- Added handling of missing browser features.
- Added [`data-css-contain-fallback=` attribute](attribute-ref.md).

### 0.0.6 (2023-02-07)

- Removed [Safari polyfill](https://github.com/ungap/custom-elements) from
  minified bundle to be served on CDNs.

### 0.0.5 (2023-02-07)

- Implemented [`data-debug-draw-regions=` attribute](attribute-ref.md).
- Added `dist/image-display-control.min.js` to npm package in order for it to
  be served on CDNs like [jsDelivr](https://www.jsdelivr.com/).
- Fixed a bug where [`data-disabled=none`](attribute-ref.md) would be ignored.

### 0.0.4 (2023-02-02)

- Improved npm documentation.

### 0.0.3 (2023-02-02)

- Improved npm documentation.

### 0.0.2 (2023-02-02)

- Improved npm documentation.

### 0.0.1 (2023-02-02)

- Initial version.
