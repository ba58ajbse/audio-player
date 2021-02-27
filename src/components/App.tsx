import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import Main from './Main'
import Player from './Player'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Player />
      </Main>
    </ThemeProvider>
  )
}

export default App
