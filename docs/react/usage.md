---
sidebar_position: 10
tags:
  - explanation
---

# Usage

import { GitHubCornerIcon } from '@site/src/components/githubCornerIcon';

<GitHubCornerIcon href="https://github.com/Frameright/react-image-display-control" />

A simple demo is available in [`example/`](example.md). A more comprehensive
example could look like this:

```tsx title=/src/MyApp.tsx
// npm install @frameright/react-image-display-control
import { ImageDisplayControl } from '@frameright/react-image-display-control';

// npm install react-bootstrap
import Image from 'react-bootstrap/Image';

import skaterUrl from './assets/skater.jpg';

const isServer = typeof window === 'undefined';
const skaterPathOnServer = isServer
  ? process.cwd() + '/src/assets/skater.jpg'
  : null;

export function MyApp() {
  return (
    <div style={{ contain: 'paint' }} data-idc-parent>
      <ImageDisplayControl data-debug>
        <img
          id="external-img-without-ssr"
          src="https://webc.frameright.io/assets/pics/skater2.jpg"
          alt="Skater"
          className="first-image"
          width="200"
          height="200"
        />
        <Image
          id="local-bootstrap-image-without-ssr"
          src={skaterUrl}
          data-avoid-no-region="off"
          alt="Skater"
          style={{
            width: '300px',
            height: '200px',
          }}
        />
        <img
          id="local-img-with-ssr"
          src={skaterUrl}
          data-path-on-server={skaterPathOnServer}
          alt="Skater"
          width="200"
          height="200"
        />
      </ImageDisplayControl>
    </div>
  );
}
```

This example turns three `<img>`-like elements/components into
[Image Display Control web components](../web-component/README.md)
which are going to automatically/responsively zoom in on the most suitable
region from each image's metadata.

It touches on the following aspects.

## `<img>`-like direct children

The `<ImageDisplayControl>` component adds
[Image Display Control](https://frameright.io) functionality to any of its
`<img>`-like direct children. We have validated:

- `<img>` elements,
- [Next.js `<Image>`](https://nextjs.org/docs/api-reference/next/image)
  components,
- [React-Bootstrap `<Image>`](https://react-bootstrap.github.io/components/images/)
  components.

## HTML attributes and React properties

- All the attributes/properties of the original `<img>`-like child are
  supported, e.g. `src=`, `alt=`, `width=`, etc.
- All `data-*=` attributes specific to the underlying web component are
  supported, e.g. `data-avoid-no-region=`. See the web component's attribute
  [reference](../web-component/attribute-ref)
  for more details.
- Additional `data-*=` attributes/properties exist:
  - on the children (e.g. `data-path-on-server=` for
    [server-side rendering](ssr.md)),
  - on the `<ImageDisplayControl>` component (e.g. `data-debug` for debugging),
  - on its DOM parent (e.g. `data-idc-parent` for guiding developers).

See [attributes and properties](attributes.md) for more details.

## CSS styling

The usual ways of styling the `<img>`-like children are supported, e.g.
`width:`, `border:`, `padding:`, etc. However some CSS properties have
limitations due to the underlying web component's implementation. See the web
component's CSS styling
[documentation](../web-component/styling.md) for more details.

## HTML and CSS sizing

- The usual ways of sizing the `<img>`-like children are supported, e.g.
  HTML `width=`, CSS `height:`, etc.
- The rendered child is responsive and will automatically reassess the best
  region to zoom in on when it gets resized, e.g. when the user turns their
  phone from portrait to landscape.
- A rendered child takes exactly the same space as it would if it didn't have an
  `<ImageDisplayControl>` parent under the same circumstances and styling.

## Server-side rendering

The React component can be imported anywhere in your code with a static
`import` statement, no matter if this portion of the code is to be executed on
the server, on the client, or at build time for static site generation.

See [importing in your project](importing.md) for more details.

In order to make server-side rendering (or static site generation) possible:

- import the image file statically,
- pass the path to the image file on disk to the corresponding child.

See [server-side rendering](ssr.md) for more details.
