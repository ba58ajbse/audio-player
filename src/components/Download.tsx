import React from 'react'
import { Grid } from '@material-ui/core'
import { GetApp } from '@material-ui/icons'
import styled from 'styled-components'
import InitBtn from './utils/styled'

const Download: React.FC = () => {
  const trackDownload = () => {
    console.log('call track download')
  }
  return (
    <Grid item xs={1}>
      <StyledBtn onClick={trackDownload}>
        <GetApp />
      </StyledBtn>
    </Grid>
  )
}

export default Download

const StyledBtn = styled(InitBtn)`
  height: 60px;
  margin: 0 0 0 auto;
  display: block;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    opacity: 0.8;
  }
`
