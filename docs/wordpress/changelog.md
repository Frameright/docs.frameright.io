---
sidebar_position: 20
tags:
  - reference
---

# Changelog

<!--
WARNING: Bits of information here are duplicated in several places:
  * https://docs.frameright.io/wordpress/changelog
  * https://github.com/Frameright/image-display-control-wordpress/blob/master/readme.txt
Make sure to keep them in sync.
-->

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/image-display-control-wordpress" />

### 1.0.0 (2023-06-28)

- Moved documentation to https://docs.frameright.io/wordpress

### 0.1.2 (2023-04-03)

- Marked as validated with WordPress 6.2.

### 0.1.1 (2023-03-07)

- Added [tutorial video](https://www.youtube.com/watch?v=vlyoAPku_NU).

### 0.1.0 (2023-03-07)

- Fixed [web component](../web-component/README.md) sometimes not initializing properly.
- Added support for older browsers. See [here](../web-component/browsers.md) for more details.
- Improved resolution of images having an `srcset=` HTML attribute when zooming in on a region.
- Now forcing the web component to select a region and zoom in on it, instead of rendering the full original image.
- Fixed crash when uploading non-image files.
- Fixed crash when uploading damaged images.
- Fixed several bugs that were happening with some specific themes, like the plugin doing nothing or the image regions being wrong.
- Stopped generating hardcrops in the media library.

### 0.0.5 (2023-01-26)

- Switched to rendering a [web component](../web-component/README.md) on the front-end.

### 0.0.4 (2022-11-05)

- Improved documentation.

### 0.0.3 (2022-11-03)

- Renamed software components to avoid name clashes with other plugins.

### 0.0.2 (2022-10-31)

- Improved algorithm for automatically selecting the best hardcrop.

### 0.0.1 (2022-10-27)

- Initial Release.
