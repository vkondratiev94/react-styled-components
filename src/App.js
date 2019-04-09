import React, { Component } from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, OutlinedButton } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Button size='small'>Say Hello</Button>
        <OutlinedButton>Don't Say Hello</OutlinedButton>
      </div>
    )
  }
}

export default App
