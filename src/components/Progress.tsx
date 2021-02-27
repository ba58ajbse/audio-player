import React from 'react'
import styled from 'styled-components'

type PropType = {
  duration: number
  currentTime: number
}

const Progress: React.FC<PropType> = ({ duration, currentTime }) => {
  return (
    <StyledProgressArea>
      <div className="progress-bar">
        <StyledProgressCurrent duration={duration} currentTime={currentTime} />
      </div>
    </StyledProgressArea>
  )
}

export default Progress

const StyledProgressArea = styled.div`
  padding: 0 1.2em;
  .progress-bar {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.thirdLight};
    display: inline-block;
    border-radius: 10px;
  }
`
const StyledProgressCurrent = styled.div<PropType>`
  width: ${(props) => (props.currentTime / props.duration) * 100}%;
  height: 6px;
  background-color: ${(props) => props.theme.colors.third};
  border-radius: 10px;
`
