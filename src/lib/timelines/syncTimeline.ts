import * as animations from '@animations'
import { CannedAnimationTarget } from '@types-internal/animations'
import gsap from 'gsap'

type TimelineAppendFunction = (
  timeline: gsap.core.Timeline,
  animation: gsap.core.Tween,
) => TimelineReturn

type ChainAnimations = {
  [chainAnimation in keyof typeof animations]: (
    target: CannedAnimationTarget,
    vars?: gsap.TweenVars,
  ) => TimelineReturn
}

type TimelineReturn = ChainAnimations & {}

const syncTimeline = (vars?: gsap.TimelineVars): TimelineReturn => {
  const timeline = gsap.timeline(vars)

  const chainAnimations: ChainAnimations = Object.entries(animations).reduce(
    (a, [key, value]) => ({
      ...a,
      [key]: (target: CannedAnimationTarget, vars?: gsap.TweenVars) =>
        appendAnimationToTimeline(timeline, value(target, vars)),
    }),
    {} as ChainAnimations,
  )

  const timelineReturn: TimelineReturn = {
    ...chainAnimations,
  }

  const appendAnimationToTimeline: TimelineAppendFunction = (
    timeline,
    animation,
  ) => {
    timeline.add(animation)

    return timelineReturn
  }

  return timelineReturn
}

export default syncTimeline
