import React from 'react'
import styled from 'styled-components'
import setTimeDisp from './utils/util'

type PropType = {
  currentTime: number
}

const TrackCurrentTime: React.FC<PropType> = ({ currentTime }) => {
  return (
    <>
      <StyledCurrentTime>
        <p>{setTimeDisp(currentTime)}</p>
      </StyledCurrentTime>
    </>
  )
}

export default TrackCurrentTime

const StyledCurrentTime = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
  p {
    line-height: 32px;
    font-variant-numeric: tabular-nums;
  }
`
