import { CustomEase } from 'gsap/CustomEase'

const bezier = (p0: number, p1: number, p2: number, p3: number) => {
  const name = `cubic-bezier(${p0}, ${p1}, ${p2}, ${p3})`

  try {
    const existingBezier = CustomEase.get(name)

    if (existingBezier) return existingBezier
  } catch {
    return CustomEase.create(name, `${p0}, ${p1}, ${p2}, ${p3}`)
  }
}

export default bezier
