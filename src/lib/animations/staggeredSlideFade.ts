import { gentleOvershoot } from '@easing'
import { CannedAnimation } from '@types-internal/animations'
import { getAnimatableChildren } from '@utils'
import gsap from 'gsap'

const staggeredSlideFade: CannedAnimation = (target, options) => {
  gsap.from(getAnimatableChildren(target), {
    xPercent: -20,
    opacity: 0,
    stagger: 0.1,
    ease: gentleOvershoot,
  })

  return {
    // stuff like reverse(), reset(), pause(), play()
  }
}

export default staggeredSlideFade
