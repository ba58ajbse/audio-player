import React, { useState } from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { Edit, Delete, GetApp, MoreVert } from '@material-ui/icons'
import styled from 'styled-components'
import { DefButton } from './utils/styled'

type PropType = {
  matches: boolean
}
const ProjectListMenu: React.FC<PropType> = ({ matches }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const pcMenu = (
    <>
      <StyledButton>
        <Edit />
      </StyledButton>
      <StyledButton>
        <Delete />
      </StyledButton>
      <StyledButton>
        <GetApp />
      </StyledButton>
    </>
  )

  const mobileMenu = (
    <>
      <StyledButton onClick={handleClick}>
        <MoreVert />
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <StyledButton>
            <Edit />
          </StyledButton>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledButton>
            <Delete />
          </StyledButton>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledButton>
            <GetApp />
          </StyledButton>
        </StyledMenuItem>
      </Menu>
    </>
  )

  return <>{matches ? pcMenu : mobileMenu}</>
}

export default ProjectListMenu

const StyledButton = styled(DefButton)`
  margin-right: 1.6rem;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    color: ${(props) => props.theme.colors.third};
  }
`
const StyledMenuItem = styled(MenuItem)`
  text-align: center;
  button {
    margin: 0;
  }
`
