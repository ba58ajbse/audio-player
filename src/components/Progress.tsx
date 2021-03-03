import React, { useRef } from 'react'
import styled from 'styled-components'

type PropType = {
  duration: number
  currentTime: number
  jumpPlayPosition: (arg: number) => void
}
type StyledType = Pick<PropType, 'duration' | 'currentTime'>

const Progress: React.FC<PropType> = ({
  duration,
  currentTime,
  jumpPlayPosition,
}) => {
  const bar = useRef<HTMLDivElement>(null)

  const jump = (pagex: number) => {
    if (bar !== null && bar.current !== null) {
      const clientRect = bar.current.getBoundingClientRect()
      const positionX = clientRect.left + window.pageXOffset
      const elmWidth = bar.current.getBoundingClientRect().width
      const position = (pagex - positionX) / elmWidth
      jumpPlayPosition(position)
    }
  }
  return (
    <StyledProgressArea>
      <div
        className="progress-bar"
        aria-hidden
        onClick={(e) => jump(e.pageX)}
        ref={bar}
      >
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
const StyledProgressCurrent = styled.div<StyledType>`
  width: ${(props) => (props.currentTime / props.duration) * 100}%;
  height: 6px;
  background-color: ${(props) => props.theme.colors.third};
  border-radius: 10px;
`
