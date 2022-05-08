// import '../App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { GetProfile } from '../store/actions/GetProfile';
// import { Box } from '@mui/system';
// import Typography from '@mui/material/Typography';
// import Dummy from '../images/dummy.png'

// function App({ inputValue }) {
//   console.log(inputValue)
//   const {userData,userDataLoading,userDataError} = useSelector(state => state.getProfileReducer)
//   const {name,following,followers,public_repos,avatar_url} =  userData

//   console.log("check loading Status" ,userDataLoading)
//   console.log("userData",userData)
// console.log("userDataError",userDataError)

//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(GetProfile(inputValue))
//   },[inputValue])
//   return (
//     <div className="App">
//     <h1>Git User Finder</h1>
//     {
//       userDataLoading ? 
//       ( <h1>loading...</h1>)
      
//       :userDataError ?
//        (<h1>404 not found</h1>):
//       (<div>
//         <div><img src={avatar_url} alt="image"/></div>
//         <h1>name{name}</h1>
//         <h3>followers:{followers}</h3>
//         <h3>following:{following}</h3>  
//         <h3>public_repos:{public_repos}</h3>  
//         <Box>
//         <Box>
//             <img src={Dummy} alt='img' width='100%'/>
//         </Box>
//         <Box>
//             <Typography>helo</Typography>
//             <Typography>helo</Typography>
//             <Typography>helo</Typography>
//             <Typography>helo</Typography>
//         </Box>
//     </Box>
//       </div>
      
      
//       )
//     }
      
//     </div>
//   );
// }

// export default App;
