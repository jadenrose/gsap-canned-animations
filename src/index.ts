import './scss/index.scss'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { sections } from './elements'
import { syncTimeline } from '@timelines'

gsap.registerPlugin(CustomEase as object)

if (sections.HERO)
  syncTimeline({ delay: 1 })
    .staggeredSlideFade(sections.HERO)
    .toColor(sections.HERO, { delay: 0.2, color: '#ffffff' })

// @TODO allow setting target once at the timeline level, then allow per-animation target overrides
// syncTimeline(sections.HERO, { delay: 1 })
//   .staggeredSlideFade()
//   .toColor({ delay: 0.2, color: '#ffffff' })
//   .rainbowLetters(sections.HERO.querySelector('.make-me-rainbow'), { // <-- per-animation target could look like this
//     delay: 0.2,
//     color: '#ffffff',
//   })
