import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

type PropType = {
  duration: number
  currentTime: number
  jumpPlayPosition: (arg: number) => void
}

const Progress: React.FC<PropType> = ({
  duration,
  currentTime,
  jumpPlayPosition,
}) => {
  const durationBar = useRef<HTMLDivElement>(null)
  const currentBar = useRef<HTMLDivElement>(null)

  const jump = (pagex: number) => {
    if (durationBar !== null && durationBar.current !== null) {
      const clientRect = durationBar.current.getBoundingClientRect()
      const positionX = clientRect.left + window.pageXOffset
      const elmWidth = durationBar.current.getBoundingClientRect().width
      const position = (pagex - positionX) / elmWidth
      jumpPlayPosition(position)
    }
  }
  useEffect(() => {
    if (currentBar !== null && currentBar.current !== null) {
      currentBar.current.style.width = `${(currentTime / duration) * 100}%`
    }
  }, [currentTime])

  return (
    <StyledProgressArea>
      <div
        className="duration-bar"
        aria-hidden
        onClick={(e) => jump(e.pageX)}
        ref={durationBar}
      >
        <StyledProgressCurrent ref={currentBar} />
      </div>
    </StyledProgressArea>
  )
}

export default Progress

const StyledProgressArea = styled.div`
  padding: 0 1.2em;
  .duration-bar {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background-color: #8facc0; // thirdLight
    display: inline-block;
    border-radius: 10px;
  }
`
const StyledProgressCurrent = styled.div`
  width: 0;
  height: 6px;
  background-color: #07617d; // third
  border-radius: 10px;
`
