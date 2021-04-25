import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export default (props)=>{
    const [userName,setUserName]=React.useState('');
    const [password,setPassword]=React.useState('');
    return (
        <div  >
            <div style={{marginLeft:'45%'}}>
            <div >
                <TextField
                required
                id="filled-required"
                label="User Name"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />   
            </div>
            <div>
            <TextField
                required
                id="filled-disabled"
                label="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div>
                <Typography style={{color:'red'}}>

                    {props.error?props.error:null} 
                </Typography>
            </div>
            <div style={{marginTop:"5px"}}>
                <Button size='small' variant="contained" color="primary" onClick={()=>props.login(userName,password)}>
                    Log In
                </Button>
            </div>            
            </div>
        </div>
    )
}