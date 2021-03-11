import React, { useState, useEffect, ChangeEvent, WheelEvent } from 'react'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import styled from 'styled-components'
import DefButton from './utils/styled'

type PropType = {
  muteToggle: () => void
  changeVolume: (val: number) => void
}
type StyledProp = {
  isDispSlider: boolean
}

const VolumeBar: React.FC<PropType> = ({ muteToggle, changeVolume }) => {
  const [isMute, setIsMute] = useState(false)
  const [volumeVal, setVolumeVal] = useState(50)
  const [isDispSlider, setIsDispSlider] = useState(false)

  useEffect(() => {
    changeVolume(volumeVal / 100)
  }, [])

  useEffect(() => {
    if (volumeVal === 0) {
      setIsMute(true)
    } else {
      setIsMute(false)
    }
  }, [volumeVal])

  const handleMute = () => {
    if (volumeVal !== 0) {
      muteToggle()
      setIsMute(!isMute)
    }
  }
  const handleChangeVolume = (value: string | number) => {
    const val = Number(value)
    changeVolume(val / 100)
    setVolumeVal(val)
  }
  const handleOnWheel = (deltaY: number) => {
    let val = deltaY > 0 ? volumeVal - 5 : volumeVal + 5
    if (val <= 0) {
      val = 0
    }
    if (val >= 100) {
      val = 100
    }

    handleChangeVolume(val)
  }
  return (
    <>
      <StyledVolumeArea
        isDispSlider={isDispSlider}
        onMouseEnter={() => setIsDispSlider(true)}
        onFocus={() => setIsDispSlider(true)}
        onMouseLeave={() => setIsDispSlider(false)}
        onBlur={() => setIsDispSlider(false)}
      >
        <StyledButton type="button" onClick={handleMute}>
          {isMute ? <VolumeOff /> : <VolumeUp />}
        </StyledButton>
        <StyledVolumeBar
          type="range"
          min="0"
          max="100"
          step="0.01"
          value={volumeVal}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeVolume(e.target.value)
          }
          onWheel={(e: WheelEvent<HTMLInputElement>) => {
            handleOnWheel(e.deltaY)
          }}
          isDispSlider={isDispSlider}
        />
      </StyledVolumeArea>
    </>
  )
}

export default VolumeBar

const StyledVolumeArea = styled.div<StyledProp>`
  position: absolute;
  width: ${(props) => (props.isDispSlider ? 160 : 30)}px;
  top: -2px;
  left: 72px;
`
const StyledButton = styled(DefButton)`
  position: absolute;
  top: 6px;
  padding: 0;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    opacity: 0.8;
  }
`
const StyledVolumeBar = styled.input<StyledProp>`
  position: absolute;
  top: 8px;
  left: 24px;
  transition: opacity 0.2s, visibility 0.2s;
  opacity: ${(props) => (props.isDispSlider ? 1 : 0)};
  visibility: ${(props) => (props.isDispSlider ? 'visible' : 'hidden')};
`
