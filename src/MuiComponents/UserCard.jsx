import * as React from 'react';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfile } from '../store/actions/GetProfile';
import Divider from '@mui/material/Divider';
import { useStyles } from '../CssPart/Styles';
import ErrorHandle from './error'
import CircularProgressWithLabel from './Loaderr'




export default function RecipeReviewCard({inputValue}) {
  const {userData,userDataLoading,userDataError} = useSelector(state => state.getProfileReducer)
  const {name,following,followers,public_repos,avatar_url} =  userData
  console.log("ab ki maslah ha yarr",inputValue)
//   console.log("check loading Status" ,userDataLoading)
//   console.log("userData",userData)
console.log("userDataError",userDataError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProfile(inputValue))
  },[inputValue])  

 const classes = useStyles()

  return (
   <Box>
      {/* <Typography>Git User Finder</Typography> */}

     { userDataLoading ? (<CircularProgressWithLabel/>):
     userDataError ?
      (<ErrorHandle/>
       
      ):

     ( <Box>
        <Box>
            <img src={avatar_url} alt='img' width='100%'/>
        </Box>
        <Box>
            <Typography className={classes.settingFont}>Name: {name}</Typography>
            <Divider/>
            <Typography className={classes.settingFont}>Followers: {followers}</Typography>
            <Divider/>
            <Typography className={classes.settingFont}>Following: {following}</Typography>
            <Divider/>
            <Typography className={classes.settingFont}>Public Repos: {public_repos}</Typography>
            <Divider/>
        </Box>
    </Box>)
  }

   </Box>
  );
}
