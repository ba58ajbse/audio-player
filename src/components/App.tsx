import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { ThemeProvider as StcThemeProvider } from 'styled-components'
import theme from './utils/theme'
import Audio from './Audio'
import '../assets/css/App.css'

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StcThemeProvider theme={theme}>
          <div className="App">
            <Audio />
          </div>
        </StcThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
