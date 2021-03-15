import React from 'react'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'
import ProjectListItem from '../components/ProjectListItem'
import { DefButton } from '../components/utils/styled'

const data = [
  { id: 0, title: 'demo_01', artist: 'mumure' },
  { id: 1, title: 'demo_02', artist: 'mumure' },
]
const ProjectLists: React.FC = () => {
  return (
    <StyledProjectsWrap>
      <StyledTypography variant="h5">プロジェクト一覧</StyledTypography>
      <StyledButton>
        <Link to="/project-create">新規作成</Link>
      </StyledButton>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>title</StyledTableCell>
              <StyledTableCell>artist</StyledTableCell>
              <StyledTableCell>update</StyledTableCell>
              <StyledTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledProjectsWrap>
  )
}

export default ProjectLists

const StyledProjectsWrap = styled.div`
  max-width: 800px;
  padding: 12px;
  margin: 0 auto;
`
const StyledTypography = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
`
const StyledTableCell = styled(TableCell)`
  text-align: center;
  font-size: 1.1rem;
`
const StyledButton = styled(DefButton)`
  padding: 12px;
  margin: 0 auto;
  margin-bottom: 1.1rem;
  border-radius: 4px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.third};
`
