import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import {fetchData,logout} from '../reducers/users/loginAction'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DashBoard=(props)=> {
  const classes = useStyles();
    useEffect(()=>{
        props.fetchData()
    },[])

  return (
      <>
        <div>
            <span style={{float:'right'}}>
            <Button variant="contained" color="secondary" onClick={()=>props.logout()}>
                 Log Out
            </Button>
            </span>
        </div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align='left'>Name </TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left"> Gender</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.users.map(user => (
                <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                    {user.name}
                </TableCell>
                <TableCell align="left">{user.age}</TableCell>
                <TableCell align="left">{user.gender}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.phoneNo}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </>
  );
}
const mapStateToProps=state=>{
    return {
        users:state.loginReducer.users,
    }
}

export default connect(mapStateToProps,{fetchData,logout})(DashBoard)