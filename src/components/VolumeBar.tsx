import React, { useState, ChangeEvent, useEffect } from 'react'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

type PropType = {
  muteToggle: () => void
  changeVolume: (val: number) => void
}
type StyledProp = {
  isDispSlider: boolean
}
type StyledVolumeProp = {
  state: string
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
    let val = deltaY > 0 ? volumeVal + 5 : volumeVal - 5
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
        <button type="button" onClick={handleMute}>
          {isMute ? <VolumeOff /> : <VolumeUp />}
        </button>
        <Transition in={isDispSlider} timeout={200}>
          {(state) => (
            <StyledVolumeBar
              type="range"
              min="0"
              max="100"
              step="0.01"
              value={volumeVal}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeVolume(e.target.value)
              }
              onWheel={(e: any) => {
                handleOnWheel(e.deltaY)
              }}
              state={state}
            />
          )}
        </Transition>
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
  button {
    position: absolute;
    top: 6px;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primaryText};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`
const StyledVolumeBar = styled.input<StyledVolumeProp>`
  position: absolute;
  top: 8px;
  left: 24px;
  transition: 0.1s;
  opacity: ${(props) => (props.state === 'entered' ? '1' : '0')};
  display: ${(props) => (props.state === 'exited' ? 'none' : 'block')};
`
