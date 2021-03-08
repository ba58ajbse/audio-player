import React from 'react'
import styled from 'styled-components'
import setTimeDisp from './utils/util'

type PropType = {
  duration: number
}

const TrackDuration: React.FC<PropType> = ({ duration }) => {
  return (
    <>
      <StyledDuration>
        <p>{setTimeDisp(duration)}</p>
      </StyledDuration>
    </>
  )
}

export default TrackDuration

const StyledDuration = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
  p {
    line-height: 32px;
    font-variant-numeric: tabular-nums;
  }
`
