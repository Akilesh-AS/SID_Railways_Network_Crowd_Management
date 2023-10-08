import { Box } from '@mui/material'
import React from 'react'
import HeaderBar from '../Global/Header/main'

const LiveRecord = () => {
  return (
    <Box>
      <HeaderBar title={"Live Recordings"} time={true} date={true}/>
      Live Record
    </Box>
  )
}

export default LiveRecord
