import styled from 'styled-components'
import { below } from '../utils'

export const Heading = styled.h1`
  font-size: 2rem;
  ${below.md`
    color: blue;
  `}
`