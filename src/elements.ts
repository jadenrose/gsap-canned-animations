const HERO = 'hero'
const FIRST_DEMO = 'first-demo'

const get = (id: string) => document.getElementById(id)

export const sections = {
  HERO: get(HERO),
  FIRST_DEMO: get(FIRST_DEMO),
}
