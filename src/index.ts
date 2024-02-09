import './scss/index.scss'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { sections } from './elements'
import { syncTimeline } from '@timelines'

gsap.registerPlugin(CustomEase)

syncTimeline({ delay: 1 })
  .staggeredSlideFade(sections.HERO)
  .toColor(sections.HERO, { delay: 0.2, color: '#ffffff' })
