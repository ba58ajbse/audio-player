import React, { useState, ChangeEvent, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import styled from 'styled-components'
import InitBtn from './utils/styled'

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
  const handleChangeVolume = (value: string | number) => {
    const val = Number(value)
    changeVolume(val / 100)
    setVolumeVal(val)
  }
  const handleOnWheel = (deltaY: number) => {
    let val
    if (deltaY > 0) {
      val = volumeVal - 5
      if (val <= 0) {
        val = 0
      }
    } else {
      val = volumeVal + 5
      if (val >= 100) {
        val = 100
      }
    }
    handleChangeVolume(val)
  }
  return (
    <Grid item xs={9}>
      <StyledVolumeArea
        isDispSlider={isDispSlider}
        onMouseEnter={dispVolSlider}
        onFocus={dispVolSlider}
        onMouseLeave={noDispVolSlider}
        onBlur={noDispVolSlider}
      >
        <StyledBtn type="button" onClick={handleMute}>
          {isMute ? <VolumeOff /> : <VolumeUp />}
        </StyledBtn>
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
            onWheel={(e: any) => {
              handleOnWheel(e.deltaY)
            }}
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
  input {
    position: absolute;
    top: 20px;
    left: 24px;
  }
`
const StyledBtn = styled(InitBtn)`
  position: absolute;
  top: 18px;
  padding: 0;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    opacity: 0.8;
  }
`
