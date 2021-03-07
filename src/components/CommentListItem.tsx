import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core'

type PropType = {
  name: string
  comment: string
}

const CommentListItem: React.FC<PropType> = ({ name, comment }) => {
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            // className={classes.inline}
            color="textPrimary"
          >
            {comment}
          </Typography>
        }
      />
    </ListItem>
  )
}

export default CommentListItem
