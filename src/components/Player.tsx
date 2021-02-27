import React, { useState, useEffect } from 'react'
import { PlayCircleOutline, PauseCircleOutline } from '@material-ui/icons'
import styled from 'styled-components'
import Progress from './Progress'
import TrackDuration from './TrackDuration'
import TrackCurrentTime from './TrackCurrentTime'
import TrackTimeWrap from './TrackTimeWrap'
import VolumeBar from './VolumeBar'
import audioSrc from '../assets/audio/lilla.mp3'

const Player: React.FC = () => {
  const [track, setTrack] = useState<HTMLAudioElement>(new Audio())
  const [playState, setPlayState] = useState<boolean>(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCrrentTime] = useState(0)

  useEffect(() => {
    track.src = audioSrc
    track.onloadedmetadata = () => {
      setDuration(track.duration)
    }
    track.ontimeupdate = () => {
      setCrrentTime(track.currentTime)
    }
  }, [])

  const handlePlayPause = () => {
    if (track.paused) {
      track.play()
      setPlayState(true)
    } else {
      track.pause()
      setPlayState(false)
    }
  }

  return (
    <>
      <StyledInfo>
        <StyledTrackTitle>title</StyledTrackTitle>
        <StyledArtistName>artist</StyledArtistName>
        <StyledPlyaButton type="button" onClick={() => handlePlayPause()}>
          {playState ? (
            <PauseCircleOutline style={{ fontSize: 65 }} />
          ) : (
            <PlayCircleOutline style={{ fontSize: 65 }} />
          )}
        </StyledPlyaButton>
      </StyledInfo>
      <Progress />
      <TrackTimeWrap>
        <TrackCurrentTime currentTime={currentTime} />
        <VolumeBar />
        <TrackDuration duration={duration} />
      </TrackTimeWrap>
    </>
  )
}

export default Player

const StyledInfo = styled.div`
  width: 100%;
  padding: 10px 10px 0 10px;
`
const StyledPlyaButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primaryText};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
const StyledTrackTitle = styled.div`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 0.2em;
`
const StyledArtistName = styled.div`
  margin-bottom: 12px;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1.2em;
  letter-spacing: 0.1em;
`
