import React, { Component } from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, OutlinedButton, Card } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <main>
          <Card>
            <h2>Card Heading</h2>
            <Card.Button modifiers='small'>Say Hello</Card.Button>
          </Card>
          <Button modifiers='small'>Say Hello</Button>
          <OutlinedButton modifiers='small'>Don't Say Hello</OutlinedButton>
        </main>
      </div>
    )
  }
}

export default App
