import React from 'react'
import { Drawer } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import styled from 'styled-components'
import { DefButton } from './utils/styled'
import SideMenuList from './SideMenuList'

type PropType = {
  openMenu: boolean
  toggleOpenMenu: () => void
}
const SideMenu: React.FC<PropType> = ({ openMenu, toggleOpenMenu }) => {
  return (
    <StyledDrawer variant="persistent" anchor="right" open={openMenu}>
      <StyledMenuTop>
        <StyledButton type="button" onClick={toggleOpenMenu}>
          <ArrowForwardIos style={{ fontSize: 30 }} />
        </StyledButton>
      </StyledMenuTop>
      <SideMenuList />
    </StyledDrawer>
  )
}

export default SideMenu

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.fourth};
  }
`
const StyledMenuTop = styled.div`
  height: 64px;
`
const StyledButton = styled(DefButton)`
  height: 64px;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.primary};
`
