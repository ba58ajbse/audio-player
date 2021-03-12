import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import Main from './Main'
import Player from './Player'
import Header from './Header'
import CommentArea from './CommentArea'
import CommentInputField from './CommentInputField'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Player />
        <CommentArea />
        <CommentInputField />
      </Main>
    </ThemeProvider>
  )
}

export default App
