import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'

const SideMenuList: React.FC = () => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <Link to="/project-create">プロジェクトを作成する</Link>
      </ListItem>
      <ListItem button>プロジェクト</ListItem>
    </List>
  )
}

export default SideMenuList
