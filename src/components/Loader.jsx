import React from 'react'
import { Box } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
   <Box justifyContent='center' alignItems='center' width="100%" direction="row" >
       <InfinitySpin color='grey' />
   </Box>
  )
}

export default Loader