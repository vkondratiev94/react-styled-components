import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
import { purple, social, elevation } from '../utils'

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className='logo' />
  </header>
)

export default styled(Header)`
  background-color: ${social.facebook};
  padding: 10px 5%;
  ${elevation[2]};

  .logo {
    width: 60px;
  }
`
