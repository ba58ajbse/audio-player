import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ececeb',
      contrastText: '#212121',
    },
    secondary: {
      main: '#f9a828',
      contrastText: '#757575',
    },
    divider: '#bdbdbd',
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
