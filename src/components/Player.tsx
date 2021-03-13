import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { PlayCircleOutline, PauseCircleOutline } from '@material-ui/icons'
import styled from 'styled-components'
import Progress from './Progress'
import TrackDuration from './TrackDuration'
import TrackCurrentTime from './TrackCurrentTime'
import TrackTimeWrap from './TrackTimeWrap'
import VolumeBar from './VolumeBar'
import { DefButton } from './utils/styled'
// import { storage } from '../firebase'

const Player: React.FC = () => {
  const [track, setTrack] = useState<HTMLAudioElement>(new Audio())
  const [playState, setPlayState] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCrrentTime] = useState(0)
  const matches = useMediaQuery('(min-width:600px)')

  useEffect(() => {
    // storage
    //   .child('track/wander.mp3')
    //   .getDownloadURL()
    //   .then((url) => {
    //     track.src = url
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    track.volume = 0.5
    track.onloadedmetadata = () => {
      setDuration(track.duration)
    }
    track.ontimeupdate = () => {
      setCrrentTime(track.currentTime)
      setIsLoaded(true)
    }
    track.onended = () => {
      setCrrentTime(0)
      setPlayState(false)
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

  const jumpPlayPosition = (position: number) => {
    const targetTime = duration * position
    track.currentTime = targetTime
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
    <StyledPlayerWrap>
      <StyledInfo>
        <div>
          <StyledTrackTitle>title</StyledTrackTitle>
          <StyledArtistName>artist</StyledArtistName>
        </div>
        <StyledPlyaButton
          type="button"
          disabled={isLoaded}
          onClick={() => handlePlayPause()}
        >
          {playState ? (
            <PauseCircleOutline style={{ fontSize: 65 }} />
          ) : (
            <PlayCircleOutline style={{ fontSize: 65 }} />
          )}
        </StyledPlyaButton>
      </StyledInfo>
      <Progress
        duration={duration}
        currentTime={currentTime}
        jumpPlayPosition={jumpPlayPosition}
      />
      <TrackTimeWrap>
        <TrackCurrentTime currentTime={currentTime} />
        {matches && (
          <VolumeBar muteToggle={muteToggle} changeVolume={changeVolume} />
        )}
        <TrackDuration duration={duration} />
      </TrackTimeWrap>
    </StyledPlayerWrap>
  )
}

export default Player

const StyledPlayerWrap = styled.div`
  max-width: 1200px;
`
const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px 10px 0 10px;
  @media (min-width: 600px) {
    display: block;
  }
`
const StyledPlyaButton = styled(DefButton)`
  margin-left: 16px;
  color: ${(props) => props.theme.colors.primaryText};
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
