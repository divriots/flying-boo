# Flying Boo

<p>
  <a href="https://divRIOTS.com">Brought to you by<br/></a>
  <a href="https://divRIOTS.com#gh-light-mode-only">
    <img width="150" height="40" src="https://divRIOTS.com/divriots.svg" alt="‹div›RIOTS" />
  </a>
  <a href="https://divRIOTS.com#gh-dark-mode-only">
    <img width="150" height="40" src="https://divRIOTS.com/divriots-dark.svg" alt="‹div›RIOTS" />
  </a>
</p>

Fun little halloween gimmick Web Component, works anywhere, based on [Lit](https://lit.dev) and [TypeScript](https://www.typescriptlang.org/).

[See landing page](https://divriots.github.io/flying-boo/)

[See the full demos & code](https://webcomponents.dev/edit/YnTmdvNX77ccZIphMD0p/stories/index.stories.js)

## Usage

```sh
npm i @divriots/flying-boo
```

```html
<script type="module">
import '@divriots/flying-boo';
</script>
<flying-boo></flying-boo>
```

Or if you want to extend the component

```js
import { FlyingBoo } from '@divriots/flying-boo';
```

Or from a CDN without needing NPM

```html
<script type="module" src="https://unpkg.com/@divriots/flying-boo/dist/index.js?module"></script>
<flying-boo></flying-boo>
```

## Features

- Configure the interval speed at which Boo changes direction with the `change-speed` attribute (default 5000, which is milliseconds)
- Configure speed amplifier to change how fast Boo travels with the `speed` attribute (default 1)
- Change the distance at which Boo gets scared with the `scare-distance` attribute (default 100, which is in pixels)

## SPA accumulating Boos

Note that Boo can be put anywhere on the page, and then it will insert itself into `<html>` element and fly all over your page.
If you use SPA pattern and have the flying-boo on multiple pages, the number of Boos will accumulate.

Therefore, you probably want to clean up the Boos on route switching, there's a util for that:

```js
import { cleanup } from '@divriots/flying-boo';

// whenever you switch routes call this before the new page renders
// if you're using a different tag-name for your Boo element, pass it as an argument
cleanup();
```
