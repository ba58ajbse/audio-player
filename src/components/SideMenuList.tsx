import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'

const SideMenuList: React.FC = () => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <Link to="/projects">プロジェクト一覧</Link>
      </ListItem>
      <ListItem button>
        <Link to="/project-create">プロジェクトを作成する</Link>
      </ListItem>
    </List>
  )
}

export default SideMenuList
