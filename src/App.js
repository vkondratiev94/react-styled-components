import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

const Heading = styled.h1`
  font-size: 2rem;
`

const Button = styled.button`
  background-color: ${({ type }) => type === 'cancel' ? 'tomato' : 'indigo'};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 2rem;
  border: none;
  color: white;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading>Hello styled-components!</Heading>
          <Button>Save</Button>
          <Button type='cancel'>Cancel</Button>
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
      </div>
    )
  }
}

export default App
