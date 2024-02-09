import './scss/index.scss'

// GSAP Setup
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

// Demo
import { sections } from './elements'
import { staggeredSlideFade } from 'src/lib/animations'

staggeredSlideFade(sections.HERO)
