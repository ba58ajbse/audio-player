import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputLabel, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import styled from 'styled-components'
import { DefTextField, DefButton } from '../components/utils/styled'

const ProjectCreate: React.FC = () => {
  const [uploadFile, setUploadFile] = useState<File>()
  const [filename, setFilename] = useState('')
  const [trackTitle, setTrackTitle] = useState('')

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadFileName = e.target.files[0].name
      setFilename(uploadFileName)
      const title = uploadFileName.substring(0, uploadFileName.lastIndexOf('.'))
      setTrackTitle(title)
    }
  }
  return (
    <StyledFormWrap>
      <StyledTypography variant="h5">プロジェクトを作成する</StyledTypography>
      <StyledForm>
        <StyledInputLabel htmlFor="track">
          ファイルを選択
          <input id="track" type="file" onChange={(e) => handleUploadFile(e)} />
        </StyledInputLabel>
        <StyledSpan>{filename || '選択されていません'}</StyledSpan>
        <br />
        <StyledTextField
          label="track title"
          fullWidth
          value={trackTitle}
          onChange={(e) => setTrackTitle(e.target.value)}
        />
        <br />
        <StyledTextField label="artist" fullWidth />
        <StyledSubmitButton type="submit">作成</StyledSubmitButton>
      </StyledForm>
      <StyledBackButton>
        <Link to="/">
          <ArrowBack style={{ fontSize: 32 }} />
        </Link>
      </StyledBackButton>
    </StyledFormWrap>
  )
}

export default ProjectCreate

const StyledFormWrap = styled.div`
  max-width: 640px;
  padding: 12px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.primaryText};
`
const StyledForm = styled.form`
  margin-bottom: 32px;
`
const StyledInputLabel = styled(InputLabel)`
  display: inline-block;
  width: fit-content;
  padding: 12px 20px 8px;
  margin-bottom: 20px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.third};
  input {
    display: none;
  }
`
const StyledSpan = styled.span`
  margin-left: 20px;
`
const StyledTypography = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
`
const StyledTextField = styled(DefTextField)`
  margin-bottom: 24px;
  text-align: center;
`
const StyledSubmitButton = styled(DefButton)`
  display: block;
  min-width: 480px;
  padding: 12px;
  margin: 0 auto;
  border-radius: 4px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primaryText};
  background-color: ${(props) => props.theme.colors.secondary};
`
const StyledBackButton = styled(DefButton)`
  color: ${(props) => props.theme.colors.primaryText};
`
