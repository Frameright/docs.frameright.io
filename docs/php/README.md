---
sidebar_position: 50
tags:
  - explanation
pagination_prev: null
---

# PHP Library

<!--
WARNING: Bits of information here are duplicated in several places:
  * https://docs.frameright.io/php
  * https://github.com/Frameright/php-image-metadata-parser
Make sure to keep them in sync.
-->

import IconExternalLink from '@theme/Icon/ExternalLink';
import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/php-image-metadata-parser" />

**Image metadata parsing library (PHP 5.5+)**

:::note

This is based on
[dchesterton/image](https://github.com/dchesterton/image). Many thanks to
[dchesterton](https://github.com/dchesterton)!

:::

Supported image types:

- JPEG
- PNG
- ~~WEBP~~

Supported image meta types:

- XMP
- IPTC
- ~~EXIF~~

:::info

A TypeScript equivalent of this library is available
[here](../javascript/README.md).

:::

## Installation

Pull the library in your project via [Composer](https://getcomposer.org/)
with:

```json title="composer.json"
{
  "minimum-stability": "dev",
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/Frameright/php-image-metadata-parser.git"
    }
  ],
  "require": {
    "frameright/image-metadata-parser": "dev-master"
  }
}
```

**Dependencies**: [`php-xml`](https://www.php.net/manual/en/book.dom.php)

## Usage

&emsp; :memo: [Tutorial<IconExternalLink />](https://www.frameright.io/post/metadata-in-php)

### Get metadata

```php
$image = Image::fromFile($filename);

$headline = $image->getXmp()->getHeadline();
$camera = $image->getExif()->getCamera();
...
```

### Loading specific image type

When file type is known, you can load the file type directly using the file types' `fromFile` method.

```php
$jpeg = JPEG::fromFile('image.jpg');
$png = PNG::fromFile('image.png');
```

### Instantiate from bytes

If you don't have a file to work with but you do have the image stored in a string (from database, ImageMagick etc.) you can easily instantiate an object from the string.

```php
$data = ...

$jpeg = JPEG::fromString($data);
```

### Instantiate from GD or a stream

You can also create an object from a GD resource or a stream.

```php
$gd = imagecreate(100, 100);
$jpeg = JPEG::fromResource($gd);
```

```php
$stream = fopen('...', 'r+');
$jpeg = JPEG::fromStream($stream);
```

### Aggregate metadata

When just want a piece of metadata and don't care whether it's from XMP, IPTC or EXIF, you can use the aggregate meta object.

```php
$image = Image::fromFile($filename);
$headline = $image->getAggregate()->getHeadline();
```

By default it checks XMP first, then IPTC, then EXIF but you can change the priority:

```php
$aggregate = $image->getAggregate();
$aggregate->setPriority(['exif', 'iptc', 'xmp']);

$aggregate->getHeadline(); // will now check EXIF first, then IPTC, then XMP
```

You can also exclude a metadata type if you do not want to use it:

```php
$aggregate->setPriority(['iptc', 'xmp']);
$aggregate->getHeadline(); // will only check IPTC and XMP
```

#### Get GPS data

```php
$image = ...
$gps = $image->getAggregateMeta()->getGPS(); // checks EXIF and XMP
// or $gps = $image->getExif()->getGPS();

$lat = $gps->getLatitude();
```
