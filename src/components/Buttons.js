import styled from 'styled-components'
import { lighten } from 'polished'
import { teal, elevation } from '../utils'

export const Button = styled.button`
  background-color: ${teal};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 2rem;
  border: none;
  color: white;
  transition: 0.3s ease box-shadow background;
  ${elevation[1]};
  &:hover {
    background-color: ${lighten(0.27, teal)};
    ${elevation[2]};
  }
  ${({size}) => {
    if (size === 'small') {
      return `
        font-size: 1rem;
        padding: 3px 10px;
      `
    }
  }}
`

export const OutlinedButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${teal};
  color: ${teal};
`