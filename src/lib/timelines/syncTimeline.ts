import * as animations from '@animations'
import { CannedAnimationTarget } from '@types-internal/animations'
import {
  ChainAnimations,
  TimelineAppendFunction,
  TimelineReturn,
} from '@types-internal/timelines'
import gsap from 'gsap'

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
