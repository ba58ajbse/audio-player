import React from 'react'
import { Link } from 'react-router-dom'
import { TableCell, TableRow, useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import ProjectListMenu from './ProjectListMenu'

type ProjectsType = {
  project: {
    id: number
    title: string
    artist: string
  }
}

const ProjectListItem: React.FC<ProjectsType> = ({ project }) => {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <TableRow>
      <StyledTableCell>
        <Link to="/">{project.title}</Link>
      </StyledTableCell>
      <StyledTableCell>
        <Link to="/">{project.artist}</Link>
      </StyledTableCell>
      <StyledTableCell>2021/03/05</StyledTableCell>
      <TableCell align="center">
        <ProjectListMenu matches={matches} />
      </TableCell>
    </TableRow>
  )
}

export default ProjectListItem

const StyledTableCell = styled(TableCell)`
  text-align: center;
  font-size: 1.1rem;
`
