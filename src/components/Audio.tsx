import React, { useState, useEffect } from 'react'
import mp3URL from '../assets/audio/lilla.mp3'
import setTimeDisp from './utils/util'

const AudioComponent: React.FC = () => {
  const [track, setTrack] = useState<HTMLAudioElement>(new Audio())
  const [duration, setDuration] = useState({ sec: 0, minSec: '' })
  const [currentTime, setCrrentTime] = useState({ sec: 0, minSec: '00:00' })

  useEffect(() => {
    track.src = mp3URL
    track.onloadedmetadata = () => {
      const durTime = setTimeDisp(track.duration)
      setDuration({ ...duration, sec: durTime.numSec, minSec: durTime.minSec })
    }
    track.ontimeupdate = () => {
      timeupdate(track.currentTime)
    }
  }, [])

  const timeupdate = (updateSec: number) => {
    const curTime = setTimeDisp(updateSec)
    setCrrentTime({
      ...currentTime,
      sec: curTime.numSec,
      minSec: curTime.minSec,
    })
  }

  const volumeUp = () => {
    if (track.volume > 0.85) {
      track.volume = 1
    } else {
      track.volume += 0.15
    }
  }
  const volumeDown = () => {
    if (track.volume < 0.15) {
      track.volume = 0
    } else {
      track.volume -= 0.15
    }
  }
  const mute = () => {
    track.muted = !track.muted
  }

  return (
    <div>
      <h1>Hello, World!</h1>
      <span>
        {currentTime.minSec}/{duration.minSec}
      </span>
      <div>
        <button type="button" onClick={() => track.play()}>
          play
        </button>
        <button type="button" onClick={() => track.pause()}>
          pause
        </button>
        <button type="button" onClick={() => volumeUp()}>
          vol up
        </button>
        <button type="button" onClick={() => volumeDown()}>
          vol down
        </button>
        <button type="button" onClick={() => mute()}>
          mute
        </button>
      </div>
    </div>
  )
}

export default AudioComponent
