import React from 'react'
import { useState ,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, getallusers } from '../actions/userAction'
import { getAllusersReducer } from '../reducer/userRegister'
export default function Userslist() {
    const getalluserreducer = useSelector(state => state.getAllusersReducer)
    const{users ,loading,error}=getalluserreducer;
     const dispatch = useDispatch()
     useEffect(() => {
         dispatch(getallusers()) 
     }, [])
    return (
        <div>
            <h1>Userlist</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user=>{
                        return(
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><i class="far fa-trash-alt" onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
