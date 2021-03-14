import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import Header from './Header'
import Router from '../Router'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>
  )
}

export default App
