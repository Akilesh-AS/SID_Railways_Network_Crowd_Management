import { Box } from '@mui/material'
import React from 'react'
import HeaderBar from '../Global/Header/main'

const LiveCrowdDensityMap = () => {
  return (
    <Box>
      <HeaderBar 
        title="Live Crowd Density Map"
        time={true}
        date={true}
        />
        Live Crowd Density Map
    </Box>
  )
}

export default LiveCrowdDensityMap
