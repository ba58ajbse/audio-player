import React, { useState, ChangeEvent, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import styled from 'styled-components'

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

  const dispVolSlider = () => {
    setIsDispSlider(true)
  }
  const noDispVolSlider = () => {
    setIsDispSlider(false)
  }

  const handleMute = () => {
    if (volumeVal !== 0) {
      muteToggle()
      setIsMute(!isMute)
    }
  }
  const handleChangeVolume = (value: string) => {
    const val = Number(value)
    changeVolume(val / 100)
    setVolumeVal(val)
  }
  return (
    <Grid item xs={10}>
      <StyledVolumeArea
        isDispSlider={isDispSlider}
        onMouseEnter={dispVolSlider}
        onFocus={dispVolSlider}
        onMouseLeave={noDispVolSlider}
        onBlur={noDispVolSlider}
      >
        <button type="button" onClick={handleMute}>
          {isMute ? <VolumeOff /> : <VolumeUp />}
        </button>
        {isDispSlider && (
          <input
            type="range"
            min="0"
            max="100"
            step="0.01"
            value={volumeVal}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeVolume(e.target.value)
            }
          />
        )}
      </StyledVolumeArea>
    </Grid>
  )
}

export default VolumeBar

const StyledVolumeArea = styled.div<StyledProp>`
  position: relative;
  width: ${(props) => (props.isDispSlider ? 160 : 30)}px;
  height: 60px;
  button {
    position: absolute;
    top: 18px;
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
  input {
    position: absolute;
    top: 20px;
    left: 24px;
  }
`
