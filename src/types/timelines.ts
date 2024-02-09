import * as animations from '@animations'
import { CannedAnimationTarget } from './animations'

export type TimelineAppendFunction = (
  timeline: gsap.core.Timeline,
  animation: gsap.core.Tween,
) => TimelineReturn

export type ChainAnimations = {
  [chainAnimation in keyof typeof animations]: (
    target: CannedAnimationTarget,
    vars?: gsap.TweenVars,
  ) => TimelineReturn
}

export type TimelineReturn = ChainAnimations & {}
