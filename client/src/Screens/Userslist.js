import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, getallusers } from '../actions/userAction'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { getAllusersReducer } from '../reducer/userRegister'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { zoomInUp } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
// import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(zoomInUp, 'zoomInup')
    }
  }


export default function Userslist() {
    const getalluserreducer = useSelector(state => state.getAllusersReducer)
    const { users, loading, error } = getalluserreducer;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getallusers())
    }, [])
    return (

        <div style={styles.zoomInUp}>
            <StyleRoot>
            <center>  <Card className="cardContainer" style={{ marginTop: '20px', padding: '15px', width: '90%' }}  >
                <Card.Body>
                    <Card.Title>Users</Card.Title>
                    {loading && <Loader />}
                    {error && <Error error="something went worng" />}
                    <Table striped bordered hover variant="">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map(user => {
                                return (
                                    <tr>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><i class="far fa-trash-alt" style={{color:'red' ,fontSize:'25px'}} onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                                        {/* <td><Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>{dispatch(deleteUser(user._id))}} >
                                            Delete
                                        </Button></td> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            </center>
            </StyleRoot>
        </div>


    )
}
