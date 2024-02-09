import gsap from 'gsap'
import { gentleOvershoot } from '@easing'
import { CannedAnimation } from '@types-internal/animations'
import { getAnimatableChildren } from '@utils'

const defaultVars: gsap.TweenVars = {
  color: '#ff0000',
  stagger: 0.1,
  duration: 0.5,
  ease: 'none',
}

const staggeredSlideFade: CannedAnimation = (target, vars = defaultVars) => {
  const tweenVars: gsap.TweenVars = { ...defaultVars, ...vars }

  const animation = gsap.to(getAnimatableChildren(target, ['color']), tweenVars)

  return animation
}

export default staggeredSlideFade
