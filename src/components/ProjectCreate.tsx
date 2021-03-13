import React from 'react'
import { Input, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { DefTextField } from './utils/styled'

const ProjectCreate: React.FC = () => {
  return (
    <StyledFormWrap>
      <Typography variant="h5">プロジェクトを作成する</Typography>
      <form>
        <StyledTextField label="track title" fullWidth />
        <br />
        <StyledTextField label="artist" fullWidth />
        <br />
        <Input type="file" />
      </form>
    </StyledFormWrap>
  )
}

export default ProjectCreate

const StyledFormWrap = styled.div`
  max-width: 800px;
  padding: 12px;
  margin: 0 auto;
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
`
const StyledTextField = styled(DefTextField)`
  margin-bottom: 24px;
`
