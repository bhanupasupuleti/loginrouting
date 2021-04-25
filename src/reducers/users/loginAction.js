import axios from 'axios';
export const USER_LOGOUT='USER_LOGOUT';
export const USER_LOGIN='USER_LOGIN'
export const FETCH_DATA ='FETCH_DATA';
export const ERROR_USER='ERROR_USER'

export const login=(username,password)=>async dispatch=>{
    const {data}=await axios.get('http://localhost:3001/login',{
        params:{
            username:username,
            password:password
        }
    })
   const [user]=data
   if(user){
        localStorage.setItem('username',user.username);
        dispatch({
            type:USER_LOGIN
        })
   }
   else{
       dispatch({
           type:ERROR_USER
       })
   }
}

export const fetchData=()=>async dispatch=>{
    const {data}=await axios.get('http://localhost:3001/usersData');
    dispatch({
        type:FETCH_DATA,
        payload:data
    })
}

export const logout=()=>dispatch=>{
    localStorage.removeItem('username')
    dispatch({
        type:USER_LOGOUT
    })
}
export const onPageLoad=()=>dispatch=>{
    dispatch({
        type:USER_LOGIN
    })
}