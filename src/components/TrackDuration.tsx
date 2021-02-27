import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import setTimeDisp from './utils/util'

type PropType = {
  duration: number
}

const TrackDuration: React.FC<PropType> = ({ duration }) => {
  return (
    <>
      <StyledDuration item xs={1}>
        <p>{setTimeDisp(duration)}</p>
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
    font-variant-numeric: tabular-nums;
  }
`
