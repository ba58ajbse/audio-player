import React from 'react'
import styled from 'styled-components'

const TrackTimeWrap: React.FC = ({ children }) => {
  return <StyledTrackTimeWrap>{children}</StyledTrackTimeWrap>
}

export default TrackTimeWrap

const StyledTrackTimeWrap = styled.div`
  height: 32px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
`
