import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import styled from 'styled-components'

type StyledProp = {
  isDispSlider: boolean
}

const VolumeBar: React.FC = () => {
  const [mute, setMute] = useState(true)
  const [isDispSlider, setIsDispSlider] = useState(false)

  const dispVolSlider = () => {
    setIsDispSlider(true)
  }
  const noDispVolSlider = () => {
    setIsDispSlider(false)
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
        <button type="button">
          <VolumeUp />
        </button>
        {isDispSlider && <input type="range" />}
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
