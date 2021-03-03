import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import styled from 'styled-components'

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={0}>
      <StyledToolBar>
        <Typography variant="h5" noWrap>
          Logo
        </Typography>
        <StyledIconWrap>
          <IconButton edge="end" disableRipple>
            <Menu style={{ fontSize: 40 }} />
          </IconButton>
        </StyledIconWrap>
      </StyledToolBar>
    </AppBar>
  )
}

export default Header

const StyledToolBar = styled(Toolbar)`
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.primary};
`
const StyledIconWrap = styled.div`
  margin-left: auto;
`
