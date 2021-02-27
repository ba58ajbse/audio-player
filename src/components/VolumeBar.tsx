import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { VolumeUp, VolumeOff } from '@material-ui/icons'
import styled from 'styled-components'

const VolumeBar: React.FC = () => {
  const [mute, setMute] = useState(true)

  return (
    <StyledVolume item xs={10}>
      <span>{mute ? <VolumeUp /> : <VolumeOff />}</span>
    </StyledVolume>
  )
}

export default VolumeBar

const StyledVolume = styled(Grid)`
  color: ${(props) => props.theme.colors.primaryText};
  position: relative;
  span {
    position: absolute;
    top: 18px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`
