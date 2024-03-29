import gsap from 'gsap'
import { gentleOvershoot } from '@easing'
import { CannedAnimation } from '@types-internal/animations'
import { getAnimatableChildren } from '@utils'

const defaultVars: gsap.TweenVars = {
  xPercent: -20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: gentleOvershoot,
}

const staggeredSlideFade: CannedAnimation = (target, vars = defaultVars) => {
  const tweenVars: gsap.TweenVars = { ...defaultVars, ...vars }

  const animation = gsap.from(
    getAnimatableChildren(target, ['xPercent', 'opacity']),
    tweenVars,
  )

  return animation
}

export default staggeredSlideFade
