import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import styled from 'styled-components'
import SideMenu from './SideMenu'

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <AppBar position="relative" elevation={0}>
        <StyledToolBar>
          <Typography variant="h5" noWrap>
            Logo
          </Typography>
          <StyledIconWrap>
            <IconButton
              edge="end"
              disableRipple
              onClick={() => setOpenMenu(!openMenu)}
            >
              {!openMenu && <Menu style={{ fontSize: 40 }} />}
            </IconButton>
          </StyledIconWrap>
        </StyledToolBar>
        <SideMenu openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
      </AppBar>
    </>
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
