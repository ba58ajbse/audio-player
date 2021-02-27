import React from 'react'
import { Grid } from '@material-ui/core'

const TrackTimeWrap: React.FC = ({ children }) => {
  return (
    <Grid container style={{ height: 60 }}>
      {children}
    </Grid>
  )
}

export default TrackTimeWrap