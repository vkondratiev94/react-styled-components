import styled from 'styled-components'
import { fixedTop } from '../utils'

const color = 'white'

// Passing props and using variables
export const Button = styled.button`
  background-color: ${({ type }) => type === 'cancel' ? 'tomato' : 'indigo'};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 2rem;
  border: none;
  color: ${color};
`

// Extending styles, using CSS helper
export const OutlinedButton = styled(Button)`
  background-color: transparent;
  border: white;
  ${fixedTop}
`