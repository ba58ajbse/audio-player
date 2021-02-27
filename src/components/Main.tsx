import React from 'react'
import styled from 'styled-components'

const Main: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Main

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
`
