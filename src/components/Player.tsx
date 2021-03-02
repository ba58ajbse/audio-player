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
    track.volume = 0.5
    track.onloadedmetadata = () => {
      setDuration(track.duration)
    }
    track.ontimeupdate = () => {
      setCrrentTime(track.currentTime)
    }
    document.addEventListener('keydown', spaceKeyPress, false)

    return () => {
      document.removeEventListener('keydown', spaceKeyPress, false)
    }
  }, [])

  const spaceKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      handlePlayPause()
    }
  }

  const handlePlayPause = () => {
    if (track.paused) {
      track.play()
      setPlayState(true)
    } else {
      track.pause()
      setPlayState(false)
    }
  }

  const muteToggle = () => {
    track.muted = !track.muted
  }
  const changeVolume = (value: number) => {
    track.volume = value
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
      <Progress duration={duration} currentTime={currentTime} />
      <TrackTimeWrap>
        <TrackCurrentTime currentTime={currentTime} />
        <VolumeBar muteToggle={muteToggle} changeVolume={changeVolume} />
        <TrackDuration duration={duration} />
      </TrackTimeWrap>
    </>
  )
}

export default Player

const StyledInfo = styled.div`
  width: 100%;
  padding: 20px 10px 0 10px;
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
  padding-left: 10px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 0.2em;
`
const StyledArtistName = styled.div`
  padding-left: 10px;
  margin-bottom: 12px;
  color: ${(props) => props.theme.colors.primaryText};
  font-size: 1.2em;
  letter-spacing: 0.1em;
`
