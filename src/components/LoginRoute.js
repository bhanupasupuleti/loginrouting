import React from 'react';
import {Route,Redirect } from 'react-router-dom';
const isLogin=()=>{
    return !!localStorage.getItem('username')
}

const LoginRoute=({component: Component,login,isLoggedin,error, ...rest})=>{
    return(
        <Route {...rest} render={() => (
            isLogin() && isLoggedin?
                <Redirect to="/dashboard" />
            : (
                <Component login={login} error={error}/>
            )
        )} />
       

            
    )
}

export default LoginRoute