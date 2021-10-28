# Boo Ghost

Fun little halloween gimmick Web Component, works anywhere, based on [Lit](https://lit.dev).

[See the demo](https://webcomponents.dev/edit/YnTmdvNX77ccZIphMD0p/stories/index.stories.js)

## Usage

```sh
npm i @divriots/boo-ghost
```

```html
<script type="module">
import '@divriots/boo-ghost';
</script>
<boo-ghost></boo-ghost>
```

Or if you want to extend the component

```js
import { BooGhost } from '@divriots/boo-ghost';
```

Or from a CDN without needing NPM

```html
<script type="module" src="https://unpkg.com/@divriots/boo-ghost?module"></script>
<boo-ghost></boo-ghost>
```

## Features

- Configure the interval speed at which the ghost changes direction with the `change-speed` attribute (default 5000, which is milliseconds)
- Configure speed amplifier to change how fast the ghost travels with the `speed` attribute (default 1)
- Change the distance at which the ghost gets scared with the `scare-distance` attribute (default 100, which is in pixels)

## SPA accumulating ghosts

Note that this ghost can be put anywhere on the page, and then it will insert itself into `<html>` element and fly all over your page.
If you use SPA pattern and have the boo-ghost on multiple pages, the ghosts will accumulate.

Therefore, you probably want to clean up the ghosts on route switching, there's a util for that:

```js
import { cleanup } from '@divriots/boo-ghost';

// whenever you switch routes call this before the new page renders
// if you're using a different tag-name for your ghost, pass it as an argument
cleanup();
```