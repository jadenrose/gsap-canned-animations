import { CannedAnimationTarget } from '@types-internal/animations'

const getAnimatableChildren = (target: CannedAnimationTarget) =>
  target.querySelectorAll('[data-animate]')

export default getAnimatableChildren
