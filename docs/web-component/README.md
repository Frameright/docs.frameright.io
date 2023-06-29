---
sidebar_position: 30
tags:
  - explanation
pagination_prev: null
---

# Web Component

<!--
WARNINGS:
* Bits of information here are duplicated in several places:
    * https://docs.frameright.io/web-component
    * https://github.com/Frameright/image-display-control-web-component
  Make sure to keep them in sync.
* Make sure all URLs in this document are absolute, and not relative within
  GitHub, as we are publishing this file to npm and want URLs to remain valid
  there.
-->

#### `<img is="image-display-control">`

An easy way to do [Image Display Control](https://frameright.io) in your HTML
page.

&emsp; :sparkles: [Live mobile demo](https://webc.frameright.io)

&emsp; 💻 [CodeSandbox](https://codesandbox.io/s/image-display-control-web-component-6hzmq5)

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/image-display-control-web-component/discussions)

> **NOTE**: if you are using React, you may want to have a look at the
> [Image Display Control React component]..(/react/README.md) instead.

## Overview

### Without this web component

When an image is too big for its `<img>` HTML element, the best option browsers
offer nowadays is to use the
[`object-fit: cover;`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
CSS property in order to scale and middle-crop it:

<img src="/img/web-component/middlecrop.png" align="right" />

```html
<img
  src="https://images.pexels.com/photos/3625715/pexels-photo-3625715.jpeg"
  width="200"
  height="200"
  style="object-fit: cover;"
/>
```

This is less than optimal, as there might be, in the example above, a better
square-ish region in the image that could be displayed instead of the
middle-crop.

### Basic usage

This web component extends the `<img>` tag with the ability to accept a list of
image regions, and to zoom in on the best one for the current element size:

<img src="/img/web-component/oneanimal.png" align="right" />

```html
<img
  is="image-display-control"
  src="https://images.pexels.com/photos/3625715/pexels-photo-3625715.jpeg"
  width="200"
  height="200"
  data-image-regions='[{
    "id": "oneanimal",
    "names": ["One animal"],
    "shape": "rectangle",
    "unit": "relative",
    "x": "0.217",
    "y": "0.708",
    "width": "0.239",
    "height": "0.1467"
  }, {
    "id": "threeanimals",
    "names": ["Three animals"],
    "shape": "rectangle",
    "unit": "relative",
    "x": "0.245",
    "y": "0.725",
    "width": "0.419",
    "height": "0.121"
  }]'
/>
```

The resulting HTML element is
[responsive](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
and will automatically reassess the best region to zoom in on when it gets
resized, e.g. when the user turns their phone from portrait to landscape.

&emsp; :sparkles: [Live mobile demo](https://webc.frameright.io)

&emsp; 💻 [CodeSandbox](https://codesandbox.io/s/image-display-control-web-component-6hzmq5)

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/image-display-control-web-component/discussions)

### Why a custom `img` element?

In order to have existing CSS rules in a project able to target indifferently
classic `<img>` elements and our web component, two options exist:

1. Invent a custom `<img is="image-display-control" src="...">` element implementing
   [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement),
   or
2. Invent a custom
   `<image-display-control><img src="..."></image-display-control>` element
   based on an
   [HTML template with a `<slot>` element](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components/Using_templates_and_slots).

The problem with the second option is that it puts the `<img>` tag inside a new
parent element `<image-display-control>` and CSS rules such as

```css
img {
  /* fill the parent element */
  width: 100%;
  height: 100%;
}
```

won't have the intended results, because the parent element hasn't been
instructed to fill its own parent. This would force developers to adapt their
CSS rules to also target the new parent, which is not ideal.

This is why we went with the first option, which doesn't require any CSS changes
in existing projects.

## Image Display Control metadata

Nowadays an image file (e.g. JPEG, PNG) can contain this type of image regions
in their metadata according to
[the IPTC standard](https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region).
The back-end would typically be responsible for extracting them from the image
file and placing them in the front-end's `<img data-image-regions="` attribute.
This is for example what
[this WordPress plugin](../wordpress/README.md)
does, with the help of [a PHP library](../php/README.md) for extracting image metadata.
This can also be achieved on a Node.js back-end with the help of
[this TypeScript library](../javascript/README.md). In fact we have created
[this React component](../react/README.md)
that does all this for you by serving the web component and running the
TypeScript library either on your Node.js back-end or in the browser.

Photographers, or anyone else, can use the
[Frameright app](https://frameright.app/) to define and store image regions in
the metadata of their pictures.

## Installation

Provided that you are using a bundler (e.g. [Webpack](https://webpack.js.org/)
or [Rollup](https://rollupjs.org/)), you can add the web component to your
project with:

```bash
npm install @frameright/image-display-control-web-component
```

or get it from a
[CDN](https://cdn.jsdelivr.net/npm/@frameright/image-display-control-web-component/):

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@frameright/image-display-control-web-component@1.1.3/dist/image-display-control.min.js"
></script>
```

&emsp; :floppy_disk: [Importing in your project](importing.md)

## Usage

```html
<html>
  <head></head>
  <body>
    <img
      is="image-display-control"
      src="https://images.pexels.com/photos/3625715/pexels-photo-3625715.jpeg"
      width="200"
      height="200"
      data-image-regions='[{
        "id": "oneanimal",
        "names": ["One animal"],
        "shape": "rectangle",
        "unit": "relative",
        "x": "0.217",
        "y": "0.708",
        "width": "0.239",
        "height": "0.1467"
      }, {
        "id": "threeanimals",
        "names": ["Three animals"],
        "shape": "rectangle",
        "unit": "relative",
        "x": "0.245",
        "y": "0.725",
        "width": "0.419",
        "height": "0.121"
      }]'
    />
    <!-- Built with Webpack or Rollup. Contains the web component: -->
    <script src="mybundle.js"></script>
  </body>
</html>
```

![Demo](../../static/img/web-component/demo.gif)

&emsp; :bulb: [GitHub Discussions](https://github.com/Frameright/image-display-control-web-component/discussions)

&emsp; :sparkles: [Live mobile demo](https://webc.frameright.io)

## Dependency tree / credits

- [ungap/custom-elements](https://github.com/ungap/custom-elements), a polyfill
  for web components on Safari. Many thanks to
  [WebReflection](https://github.com/WebReflection)!

## Browser support

From scratch the web component should work on:

- Chrome 64+ (2018)
- Firefox 69+ (2019)
- Safari 15.4+ (2022)

More support can be achieved with a few tweaks:

&emsp; :mag: [Browser support](browsers.md)
