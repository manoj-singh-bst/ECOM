import React from 'react';
import { useState } from 'react';

export default function Loginscreen() {
  
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    return (
        <>
           <center> <div classNameName="row" style={{ width:"50%"}} >
                <div classNameName="col-md-5 login">
                    <div>
                        <h1>Login</h1>
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
                        
                        <button  class="btn btn-dark mt-3 me-auto">Login</button>

                    </div>
                </div>
            </div>
            </center>
        </>
    );
    

}
