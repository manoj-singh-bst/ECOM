import React from "react";
import { useState } from "react";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Loginscreen() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const dispatch = useDispatch();

  function Login(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  }
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <center>
        {" "}
        <div classNameName="row" style={{ width: "50%" }}>
          <div classNameName="col-md-5 login">
            <div>
              <h1>Login</h1>
              <form onSubmit={Login}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  id="email"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  id="password"
                />

                <button type="submit" class="btn btn-dark mt-3 me-auto">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
