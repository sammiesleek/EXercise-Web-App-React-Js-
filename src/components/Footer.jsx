import React from 'react'
import {Box, Stack,Typography} from '@mui/material'
import Logo from '../assets/assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt={8} background="red">
        <Stack gap="40px" alignItems='center' px="40px" pt="24px">
          <img src={Logo} alt="" />
        </Stack>
    </Box>
  )
}

export default Footer