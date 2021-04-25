import {USER_LOGIN,FETCH_DATA,USER_LOGOUT,ERROR_USER} from './loginAction';

const intialState={
    isLoggedin:false,
    users:[],
    error:null
}

export default (state=intialState,action)=>{
    switch (action.type) {
        case USER_LOGIN:
                return {...state,isLoggedin:true,error:null} 
        case FETCH_DATA:
            return {...state,users:action.payload}
        case USER_LOGOUT:
            return {...state,isLoggedin:false,error:null}
        case ERROR_USER:
            return {...state,error:'user name or password is incorrect'}
        default:
           return state
    }
}