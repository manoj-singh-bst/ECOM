import React from 'react';
import { useState, useEffect } from "react";
import { updateUser } from '../actions/userAction';
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

export default function Profilescreen() {
    const loginreducer= useSelector(state => state.loginReducer)
    const currentUser=loginreducer.currentUser
      const [name, setname] = useState(currentUser.name)
      const [email, setemail] = useState(currentUser.email)
      const [userid, setuserid] = useState(currentUser._id)
      const [password, setpassword] = useState('')
      const [cpassword, setcpassword] = useState('')
      const dispatch = useDispatch();

      //const updateuserreducer= useSelector(state => state.updateReducer);
 // const {loading , error, success}=updateuserreducer;
 
    function update(e){
        e.preventDefault() ;
        const updateduser={
            name:name,
            email:email,
            password:password
            
        }
        if(password==cpassword){
            

            dispatch(updateUser(currentUser._id,updateduser));
            //  alert("update success")
            // window.location.href="/login";

        }
        else{
            alert("password and confirm password not match")
        }

    }
  return (
    <>
     <center>
        <div classNameName="row" style={{ width: "50%" }}>
          <div classNameName="col-md-5">
            <div>
              <h1>update user</h1>
              <h2>{userid}</h2>
              {/* {loading &&(<Loader/>)} */}
              {/* {error && (<Error error="email already exit"/>)}
              {success && (<Success success=" reagistratin done"/>)} */}
              
              <form onSubmit={update}>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter name"
                  required
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  id="email"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  id="password"
                />
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Enter conform password"
                  value={cpassword}
                  onChange={(e) => {
                    setcpassword(e.target.value);
                  }}
                  id="cpassword"
                />
                <button type="submit" class="btn btn-dark mt-3 me-auto">
                  update
                </button>
              </form>
            
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
