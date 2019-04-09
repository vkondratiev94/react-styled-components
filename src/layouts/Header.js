import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { purple, elevation, fixed, serif } from '../utils'

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className='logo' />
    Hello
  </header>
)

export default styled(Header)`
  width: 100%;
  background-color: ${purple};
  padding: 10px 5%;
  ${elevation[2]};
  ${fixed()};
  ${serif};

  .logo {
    width: 60px;
  }
`
