import { Typography } from '@mui/material'
import { Box, textAlign } from '@mui/system'
import React from 'react'
import Error from '../images/error.png'

const ErrorHandle = () => {
  return (
    <Box>
        <img src={Error} width="100%" height="auto"/>
        <Typography variant='h4' component='h1' sx={{textAlign:'center',fontWeight:"bolder",letterSpacing:'1px'}}>INVALID USER</Typography>
    </Box>
  )
}

export default ErrorHandle