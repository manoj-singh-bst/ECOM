import React from 'react';
import { useState } from 'react';

export default function Registration() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    // alert(name)
    function register(e){
        e.preventDefault() ;
        if(password==cpassword){
            // const user={
            //     name:name,
            //     email:email,
            //     password:password,
            //     cpassword:cpassword
                
            // }
            alert();

        }
        else{
            alert("password and confirm password not match")
        }

    }
    return (
        <>
           <center><div classNameName="row" style={{ width:"50%"}}>
                <div classNameName="col-md-5">
                    <div>
                        <h1>Registration</h1>
                        <form onSubmit={register}>
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Enter ur name"
                            required
                            id="name"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter  ur email"
                            value={email}
                            required
                            onChange={(e) => { setemail(e.target.value) }}
                            id="email" />
                        <input
                            type="password" 
                            placeholder="Enter password"
                            className="form-control"
                            required
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                            id="password" />
                        <input
                            type="password"
                            className="form-control"
                            required
                            placeholder="Enter conform pasword"
                            value={cpassword}
                            onChange={(e) => { setcpassword(e.target.value) }}
                            id="cpassword" />
                        <button type="submit" class="btn btn-dark mt-3 me-auto">Register</button>
                        </form>

                    </div>
                </div>
            </div>
            </center> 
        </>
    );
}
