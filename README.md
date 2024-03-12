# GSAP Canned Animations

Platform-agnostic utility functions for pre-made animations with vanilla JS and gsap.

## Demo

```shell
npm run dev
```

## Usage

```js
import { syncTimeline } from '@timelines'

syncTimeline({ delay: 1 })
  .staggeredSlideFade('.animate-me')
  .toColor('.animate-me', { delay: 0.2, color: '#ffffff' })
```
