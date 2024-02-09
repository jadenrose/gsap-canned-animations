export type CannedAnimationTarget = HTMLElement
export type CannedAnimationOptions = {}

export type CannedAnimation = (
  target: CannedAnimationTarget,
  vars?: gsap.TweenVars,
) => gsap.core.Tween
