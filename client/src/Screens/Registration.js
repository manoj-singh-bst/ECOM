import React from 'react';
import { useState } from 'react';

export default function Registration() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [cpassword, setcpassword] = useState()
    return (
        <>
           <center><div classNameName="row" style={{ width:"50%"}}>
                <div classNameName="col-md-5">
                    <div>
                        <h1>Registration</h1>
                        <input
                            type="name"
                            className="form-control"
                            placeholder="Enter email"
                            id="name"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                            id="email" />
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                            id="password" />
                        <input
                            type="password"
                            className="form-control"
                            value={cpassword}
                            onChange={(e) => { setcpassword(e.target.value) }}
                            id="cpassword" />
                        <button  class="btn btn-dark mt-3 me-auto">Register</button>

                    </div>
                </div>
            </div>
            </center> 
        </>
    );
}
