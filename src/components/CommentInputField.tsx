import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import { Grid, TextField, IconButton, Divider } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const CommentInputField: React.FC = () => {
  const [comment, setComment] = useState('')
  const [isComposed, setIsComposed] = useState(false)

  const sendMessage = () => {
    setComment('')
  }

  return (
    <>
      <Divider />
      <StyledGridContainer container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <StyledTextField
            autoFocus
            fullWidth
            multiline
            placeholder="コメントを入力"
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton disabled={comment === ''} onClick={() => sendMessage()}>
            <StyledSendIcon />
          </IconButton>
        </Grid>
      </StyledGridContainer>
    </>
  )
}
export default CommentInputField

const StyledGridContainer = styled(Grid)`
  margin-bottom: 12px;
`
const StyledTextField = styled(TextField)`
  color: ${(props) => props.theme.colors.primaryText};
  textarea {
    padding: 8px 12px 0;
    font-size: 1.2rem;
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid ${(props) => props.theme.colors.thirdLight};
  }
`
const StyledSendIcon = styled(Send)`
  color: ${(props) => props.theme.colors.primaryText};
`
