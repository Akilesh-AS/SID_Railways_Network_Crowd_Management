import { Box } from '@mui/material'
import React from 'react';
import HeaderBar from '../Global/Header/main';

const CrimeNotifyRecord = () => {
  return (
    <Box>
      <HeaderBar title={"Crime Alerts"} time={true} date={true}/>
      Crime Notification Alert Details
    </Box>
  )
}

export default CrimeNotifyRecord
