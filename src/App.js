import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {login,onPageLoad} from './reducers/users/loginAction'
import LoginRoute from './components/LoginRoute';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import DashBoardRoute from './components/DashBoardRoute'

const App=(props)=>{
  useEffect(()=>{
    if(localStorage.getItem('username')){
      props.onPageLoad()
    }
  },[])
  return(
    <div>
      <BrowserRouter>
        <div>
            <Switch>
              <LoginRoute path='/login' component={Login} login={props.login} isLoggedin={props.isLoggedin} error={props.error} />
              <DashBoardRoute path='/dashboard' component={DashBoard} isLoggedin={props.isLoggedin}/>
          </Switch>
          
        </div>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps=state=>{
  return {
    isLoggedin:state.loginReducer.isLoggedin,
    error:state.loginReducer.error
  }
}
export default connect(mapStateToProps,{login,onPageLoad})(App);
