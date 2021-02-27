const zeroPad = (str: string): string => {
  if (str.length === 1) {
    return `0${str}`
  }
  return str
}

const setTimeDisp = (time: number): string => {
  const min = Math.floor(time / 60)
  const sec = Math.floor(time - min * 60)
  const minSec = `${zeroPad(String(min))}:${zeroPad(String(sec))}`

  return minSec
}

export default setTimeDisp
