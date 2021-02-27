import React from 'react'
import styled from 'styled-components'

const Progress: React.FC = () => {
  return (
    <StyledProgressArea>
      <div className="progress-bar">
        <div className="progress-current" />
      </div>
    </StyledProgressArea>
  )
}

export default Progress

const StyledProgressArea = styled.div`
  padding: 0 1.2em;
  .progress-bar {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.thirdLight};
    display: inline-block;
    border-radius: 10px;
  }
  .progress-current {
    width: 40%;
    height: 6px;
    background-color: ${(props) => props.theme.colors.third};
    border-radius: 10px;
  }
`
