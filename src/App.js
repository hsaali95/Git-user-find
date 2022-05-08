import './App.css';
import { useRef, useState } from 'react';
import CenterCard from './MuiComponents/CenterCard';
import { createTheme } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import { useStyles } from './CssPart/Styles';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const theme = createTheme()

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function App() {
  const classes = useStyles()
  const [inputValue , setInputValue] = useState("")
  //useref used to get search value but react do not recommend it , 
  const inpuTag = useRef()
  
  const inputHandler = (e) => {
    e.preventDefault()
    //it works when we enter,getting value here
    const searchValue = inpuTag.current.value
    console.log("chal rahah ha",inpuTag.current.value)

    setInputValue(searchValue)
  }
  return (
   <>
     <ThemeProvider theme={theme}>
     <div className="App">
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
           <form onSubmit={inputHandler}>
           <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              inputRef={inpuTag}
            />
           </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    {/* <form onSubmit={inputHandler} className={classes.formHandle}>
      <input type="search"
        ref={inpuTag}
        placeholder="Search Value"
        className={classes.inputField}
      ></input>
    </form> */}
      
          
    </div>
    <CenterCard inputValue={inputValue} />
    {/* <ErrorHandle/> */}
     </ThemeProvider>
   </>
  );
}

export default App;
