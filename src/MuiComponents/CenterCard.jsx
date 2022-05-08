import React from 'react'
import UserCard from './UserCard'
import Grid from '@mui/material/Grid'

const CenterCard = ({inputValue}) => {
  console.log("ab ki maslah ha yarr",inputValue)
  return (
    <Grid container spacing={2} sx={{display:'flex',justifyContent:'center'}}>
  <Grid item lg={4} md={2} sm={2} xs={12} >
    {/* <UserCard/> */}
  </Grid>
  <Grid item lg={4} md={6} sm={6} xs={12} >
    <UserCard inputValue={inputValue}/>
  </Grid>
  <Grid item lg={4} md={2} sm={2} xs={12}>
    {/* <UserCard/> */}
  </Grid>
 
</Grid>
  )
}

export default CenterCard