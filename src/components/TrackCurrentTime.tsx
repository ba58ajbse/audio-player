import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const TrackCurrentTime: React.FC = () => {
  return (
    <>
      <StyledCurrentTime item xs={1}>
        <p>00:00</p>
      </StyledCurrentTime>
    </>
  )
}

export default TrackCurrentTime

const StyledCurrentTime = styled(Grid)`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
  p {
    margin: 0;
    line-height: 60px;
  }
`
// const StyledCurrentTime = styled.div`
//   color: ${(props) => props.theme.colors.primaryText};
// `
