import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, OutlinedButton, Card } from './components'

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61',
  }
}

const themeTwo = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8',
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <GlobalStyle />
          <main>
            <ThemeProvider theme={themeTwo}>
              <Card>
                <h2>Card Heading</h2>
                <Card.Button modifiers='small'>Say Hello</Card.Button>
              </Card>
            </ThemeProvider>
            <Button modifiers='small'>Say Hello</Button>
            <OutlinedButton modifiers='small'>Don't Say Hello</OutlinedButton>
          </main>
        </div>
      </ThemeProvider>
      
    )
  }
}

export default App
