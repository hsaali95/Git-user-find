import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    formHandle:{
        display:'flex',
        justifyContent:'center'
    },
    inputField:{
        border:'none',
        borderBottom:'2px solid black',
        outline:'none',
        width:'auto',
        padding:"2px",
        fontSize:'20px'
        
    },
    settingFont:{
        padding:'7px',
        fontWeight:'bolder',
        letterSpacing:'1px !important'
    }
}))

