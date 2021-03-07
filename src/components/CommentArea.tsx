import React from 'react'
import { List } from '@material-ui/core'
import styled from 'styled-components'
import CommentListItem from './CommentListItem'

const data = [
  { id: 0, name: 'Paul', comment: 'Hello, World!' },
  { id: 1, name: 'John', comment: 'Music!' },
  { id: 2, name: 'George', comment: 'Comment!' },
  { id: 3, name: 'Ringo', comment: 'Text!' },
]
const CommentArea: React.FC = () => {
  return (
    <StyledCommentArea>
      <StyledList>
        {data.map((item) => {
          return (
            <CommentListItem
              key={item.id}
              name={item.name}
              comment={item.comment}
            />
          )
        })}
      </StyledList>
    </StyledCommentArea>
  )
}

export default CommentArea

const StyledCommentArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`
const StyledList = styled(List)`
  grid-row: 1;
  overflow: auto;
`
