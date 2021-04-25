import React from 'react';
import {Route,Redirect } from 'react-router-dom';

const DashBoardRoute=({component: Component,isLoggedin, ...rest})=>{
    return(
        <Route {...rest} render={() => (
            isLoggedin?
                <Component />
            : (
                <Redirect to="/login" />
            )
        )} />         
    )
}

export default DashBoardRoute