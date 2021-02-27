import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const TrackDuration: React.FC = () => {
  return (
    <>
      <StyledDuration item xs={1}>
        <p>04:32</p>
      </StyledDuration>
    </>
  )
}

export default TrackDuration

const StyledDuration = styled(Grid)`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
  p {
    margin: 0;
    line-height: 60px;
  }
`
