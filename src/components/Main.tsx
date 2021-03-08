import React from 'react'
import styled from 'styled-components'

const Main: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Main

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 64px 100px 20px 32px 1fr auto;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  @media (min-width: 600px) {
    grid-template-rows: 64px 160px 20px 32px 1fr auto;
  }
`
