---
sidebar_position: 20
tags:
  - explanation
---

# React Component

[![npm version](https://img.shields.io/npm/v/@frameright/react-image-display-control)](https://www.npmjs.com/package/@frameright/react-image-display-control)

<!--
WARNINGS:
* Bits of information here are duplicated in several places:
    * https://docs.frameright.io/react
    * https://github.com/Frameright/react-image-display-control
  Make sure to keep them in sync.
* Make sure all URLs in this document are absolute, and not relative within
  GitHub, as we are publishing this file to NPM and want URLs to remain valid
  there.
-->

# Image Display Control React Component

An easy way to do [Image Display Control](https://frameright.io) in your React
web app. Made with :heart: by [Frameright](https://frameright.io). Power
to the pictures!

&emsp; :sparkles: [Live mobile demo](https://react.frameright.io)

&emsp; 💻 [CodeSandbox](https://codesandbox.io/s/image-display-control-react-component-m6qj9r)

## Table of Contents

<!-- toc -->

- [Overview](#overview)
  - [Without this component](#without-this-component)
  - [Basic usage](#basic-usage)
- [Image Display Control metadata](#image-display-control-metadata)
- [Installation](#installation)
- [Usage](#usage)

<!-- tocstop -->

## Overview

This [React](https://react.dev) component extends any `<img>`-like
element/component with the ability to retrieve
[Image Display Control](https://frameright.io) metadata from its image file in
order to automatically and responsively zoom in on the most interesting part of
the image.

It integrates nicely with other advanced features you may be using in your
existing project, e.g.:

- [image candidates (srcset)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset),
  whether you define them yourself or whether they are generated on your behalf
  by another component like
  [Next.js `<Image>`](https://nextjs.org/docs/api-reference/next/image),
- [server-side rendering](https://github.com/Frameright/react-image-display-control/blob/main/docs/explanation/ssr.md)
  and static site generation, e.g. in a Next.js or in a Vite-based project.

It doesn't change the structure of your DOM: your existing CSS rules still
apply.

&emsp; :sparkles: [Live mobile demo](https://react.frameright.io)

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/react-image-display-control/discussions)

> **NOTE**: if you are not using React, you may want to have a look at the
> [Image Display Control Web component](https://github.com/Frameright/image-display-control-web-component)
> instead.

### Without this component

When an image is too big for its `<img>` HTML element, the best option browsers
offer nowadays is to use the
[`object-fit: cover;`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
CSS property in order to scale and middle-crop it:

<img src="https://raw.githubusercontent.com/Frameright/react-image-display-control/main/docs/assets/skater_middlecrop.png" align="right" />

```html
<img
  src="https://react.frameright.io/assets/pics/skater.jpg"
  width="200"
  height="200"
  style="object-fit: cover;"
/>
```

This is less than optimal, as there might be, in the example above, a better
square-ish region in the image that could be displayed instead of the
middle-crop.

### Basic usage

This React component extends its `<img>`-like children with the ability to
retrieve image regions from their image metadata, and to zoom in on the best one
for the current element size:

<img src="https://raw.githubusercontent.com/Frameright/react-image-display-control/main/docs/assets/skater_withidc.png" align="right" />

```html
<ImageDisplayControl>
  <img
    src="https://react.frameright.io/assets/pics/skater.jpg"
    width="200"
    height="200"
  />
</ImageDisplayControl>
```

The resulting HTML element is
[responsive](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
and will automatically reassess the best region to zoom in on when it gets
resized, e.g. when the user turns their phone from portrait to landscape.

&emsp; :sparkles: [Live mobile demo](https://react.frameright.io)

&emsp; 💻 [CodeSandbox](https://codesandbox.io/s/image-display-control-react-component-m6qj9r)

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/react-image-display-control/discussions)

## Image Display Control metadata

Nowadays an image file (e.g. JPEG, PNG) can contain this type of image regions
in their metadata according to
[the IPTC standard](https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region).
This React component uses
[a library](https://github.com/Frameright/image-display-control-metadata-parser)
to let the back-end or front-end extract the regions from the image file. It
then passes them to the `<img>` tag and turns it into
[a web component](https://github.com/Frameright/image-display-control-web-component),
which automatically and responsively zooms in on the best region.

Photographers, or anyone else, can use the
[Frameright app](https://frameright.app/) to define and store image regions in
the metadata of their pictures.

## Installation

In your [Node.js](https://nodejs.org/en)-based project (e.g. using
[Next.js](https://nextjs.org/) or [Vite](https://vitejs.dev/)) run:

```bash
npm install @frameright/react-image-display-control
```

&emsp; :floppy_disk:
[Importing in your project](https://github.com/Frameright/react-image-display-control/blob/main/docs/explanation/importing.md)

## Usage

```tsx
// src/MyComponent.tsx

import { ImageDisplayControl } from '@frameright/react-image-display-control';

export default function MyComponent() {
  return (
    <ImageDisplayControl>
      <img
        src="https://react.frameright.io/assets/pics/skater.jpg"
        width="200"
        height="200"
      />
    </ImageDisplayControl>
  );
}
```

This doesn't change the structure of the resulting DOM, i.e.:

- the `<img>` tag remains an `<img>` tag, and
- no new parent elements are added around it, so
- the CSS rules that used to target the `<img>` tag directly will still apply,
  and
- the `<img>` tag will still naturally take the same space and position in the
  layout.

Other `<img>`-like elements/components are supported as well, e.g.
[Next.js `<Image>`s](https://nextjs.org/docs/api-reference/next/image) or
[React-Bootstrap `<Image>`s](https://react-bootstrap.github.io/components/images/).

&emsp; :airplane:
[Advanced usage](https://github.com/Frameright/react-image-display-control/blob/main/docs/usage.md)

&emsp; 🌍
[Supported environments](https://github.com/Frameright/react-image-display-control/blob/main/docs/environments.md)

&emsp; :wrench: [Contributing](https://github.com/Frameright/react-create-display-control/blob/main/docs/contributing.md)

&emsp; 📝 [Changelog](https://github.com/Frameright/react-create-display-control/blob/main/docs/changelog.md)

&emsp; :sparkles: [Local demo](https://github.com/Frameright/react-image-display-control/blob/main/example/)

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/react-image-display-control/discussions)

&emsp; :sparkles: [Live mobile demo](https://react.frameright.io)

&emsp; 🙏 [Dependency tree / credits](https://github.com/Frameright/react-image-display-control/blob/main/docs/credits.md)
