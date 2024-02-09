import { CannedAnimationTarget } from '@types-internal/animations'

const getAnimatableChildren = (
  target: CannedAnimationTarget,
  properties: (keyof gsap.TweenVars)[],
) => {
  const selector = `[data-animate]:not(${properties.map((p) => `[data-no-animate-${p}]`).join(', ')})`

  const children = target.querySelectorAll(selector)

  return children
}

export default getAnimatableChildren
