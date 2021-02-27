import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import setTimeDisp from './utils/util'

type PropType = {
  currentTime: number
}

const TrackCurrentTime: React.FC<PropType> = ({ currentTime }) => {
  return (
    <>
      <StyledCurrentTime item xs={1}>
        <p>{setTimeDisp(currentTime)}</p>
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
    font-variant-numeric: tabular-nums;
  }
`
