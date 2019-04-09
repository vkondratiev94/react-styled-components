import { css } from 'styled-components'

// CSS Helper
// Needed for props in mixins
// Use template string if props aren't needed
export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`