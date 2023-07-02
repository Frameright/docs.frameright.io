---
sidebar_position: 10
tags:
  - explanation
---

# Introduction

import { ReactIdcDemo } from '@site/src/components/reactIdcDemo';
import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/docs.frameright.io" />

Nowadays images (e.g. JPEG, PNG) can contain regions in their metadata following
[this standard](https://iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#image-region).
_Image Regions_ are useful for describing specific areas of the image
(e.g. objects, people) or for indicating how the image should be cropped or
rotated to best fit a given container. The [Frameright
webapp](https://frameright.app/) can be used to define such Image Regions and
insert them in the metadata of a picture.

<p className="react-idc-demo"><ReactIdcDemo /></p>

By using our open-source components and libraries you can make sure that the
website your are building will automatically display the best fitting region
based on the current size of the image container. No need to manually create
various versions of the same image for different ratios anymore, to write the
boilerplate code tying everything together, or to worry about all possible
device sizes.

<p className="react-idc-demo"><ReactIdcDemo animated /></p>

If you are developing a **React** web app, see our
[React component](react/README.md). Have a look at the
[Live demo](https://react.frameright.io) or try it out directly on
[CodeSandbox](https://codesandbox.io/s/image-display-control-react-component-m6qj9r).

If you are coding a website with **any other UI frameworks** (e.g. Vue, Solid
or Angular) or **with no framework** at all, have a look at our
[web component](web-component/README.md). Try it out directly on
[CodeSandbox](https://codesandbox.io/s/image-display-control-web-component-6hzmq5).
You will need either our [JavaScript library](javascript/README.md) or our
[PHP library](php/README.md) to parse the image metadata, either in the browser
or server-side. Check out the
[Node.js tutorial](https://www.frameright.io/post/metadata-in-node-js) or the
[PHP tutorial](https://www.frameright.io/post/metadata-in-php) for that.

If you are building your website with **WordPress**, have a look at our
[WordPress plugin](wordpress/README.md).

You can read more about Image Display Control and Frameright at
[frameright.io](https://www.frameright.io). Don't hesitate to reach out to us, e.g. via
[GitHub Discussions](https://github.com/Frameright/image-display-control-web-component/discussions).
Any kinds of contributions and feedback are welcome!
