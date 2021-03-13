import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import theme from './theme'

export const DefButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const DefTextField = styled(TextField)`
  .MuiInput-underline::after {
    border-bottom: 2px solid ${theme.colors.third};
  }
  .Mui-focused {
    color: ${theme.colors.third};
  }
`
