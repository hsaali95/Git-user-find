import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import ActionTypes from "../constants"

const GetProfile = (username)=>{ 
    return (dispatch) => {
        // console.log("working")
        console.log("check user recieve",username)
        dispatch({
            type:ActionTypes.GET_GITHUB_PROFILE_LOADING
        })

        const searchValue = username ? username : "example"
        axios.get(`https://api.github.com/users/${searchValue}`)
        .then((res) =>

            dispatch({
                type:ActionTypes.GET_GITHUB_PROFILE,
                payload:res.data
            })
        )
        .catch(err =>
            // console.log("err message",err)
            dispatch({
                type:ActionTypes.GET_GITHUB_PROFILE_ERROR,
                payload:err.message,
            })
            )
    }
 } 
 export { GetProfile}