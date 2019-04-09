import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import GlobalStyle from './Global'
import logo from './logo.svg'

// breakpoints
const sizes = {
  sm: 400,
  md: 960,
  lg: 1140
}

// media templates
// returning object with breakpoint functions which takes CSS code as 'args'
const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// CSS Helper
// Needed for props in mixins
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`

// Use template string if props aren't needed
// const fixedTop = `
//   position: fixed;
//   top: 0;
//   left: 0;
// `

const Heading = styled.h1`
  font-size: 2rem;
  ${below.md`
    color: blue;
  `}
`

const color = 'white'

// Passing props and using variables
const Button = styled.button`
  background-color: ${({ type }) => type === 'cancel' ? 'tomato' : 'indigo'};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 2rem;
  border: none;
  color: ${color};
`

// Extending styles, using CSS helper
const OutlinedButton = styled(Button)`
  background-color: transparent;
  border: white;
  ${fixedTop}
`

// Nesting, referencing styled component
const AppWrapper = styled.div`
  header {
    background-color: teal;

    // &:hover {
    //   background-color: red;
    // }
  }
  ${Button} {
    margin-bottom: 1rem;
  }
`

// styling existing component
const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
)

const StyledFake = styled(Fake)`
  color: red;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <Heading>Hello styled-components!</Heading>
          <StyledFake />
          <Button>Save</Button>
          <Button type='cancel'>Cancel</Button>
          <OutlinedButton top={100}>Outlined</OutlinedButton>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GlobalStyle />
      </AppWrapper>
    )
  }
}

export default App
