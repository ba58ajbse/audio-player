const zeroPad = (str: string): string => {
  if (str.length === 1) {
    return `0${str}`
  }
  return str
}

const setTimeDisp = (time: number): { numSec: number; minSec: string } => {
  const numSec = Math.floor(time)
  const min = Math.floor(time / 60)
  const sec = Math.floor(time - min * 60)
  const minSec = `${zeroPad(String(min))}:${zeroPad(String(sec))}`

  return { numSec, minSec }
}

export default setTimeDisp
