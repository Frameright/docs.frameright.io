---
sidebar_position: 30
tags:
  - reference
pagination_next: null
---

# Changelog

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/php-image-metadata-parser" />

### 1.1.1 (2024-02-01)

- Support parsing images opened and re-saved with Photoshop.
  ([8ac64a7ef7](https://github.com/Frameright/php-image-metadata-parser/commit/8ac64a7ef7))

### 1.1.0 (2023-10-09)

- Extended `$image->getXmp()->getImageRegions()` and `$image->getIDCMetadata()` to return
  Frameright-specific properties `regionDefinitionId` and `regionName`.

### 1.0.1 (2023-06-28)

- Moved documentation to https://docs.frameright.io/php

### 1.0.0 (2023-04-10)

- Initial version.
