import { css } from 'styled-components'

// breakpoints
const sizes = {
  sm: 400,
  md: 960,
  lg: 1140
}

// media templates
// returning object with breakpoint functions which takes CSS code as 'args'
export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})