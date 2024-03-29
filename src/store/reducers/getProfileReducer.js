import ActionTypes from "../constants";

const initial_State = {
    userData:{},
    userDataLoading:false,
    userDataError:""
}

const getProfileReducer = (state=initial_State,action) => {
    console.log(action)
switch (action.type) {

    case ActionTypes.GET_GITHUB_PROFILE_LOADING:
        return {
            ...state,
            userDataLoading:true
        }
    case ActionTypes.GET_GITHUB_PROFILE:
        return {
            ...state,
            userData:action.payload,
            userDataLoading:false,
            userDataError:""
        }
    case ActionTypes.GET_GITHUB_PROFILE_ERROR:
        return {
            ...state,
            userDataLoading:false,
            userDataError:action.payload,
            userData:{}

        }
        

    default:
        return state
}
}
export  {getProfileReducer}