import React from "react";
import { useState } from "react";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";

export default function Loginscreen() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { error, loading } = loginreducer;

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
        <div
          classNameName="row"
          style={{
            width: "50%",
            marginTop: "100px",
            border: " 1px solid, grey",
          }}
        >
          <div classNameName="col-md-5 login">
            <div>
              <h1>Login</h1>
              {error && <Error error="invalid credentials" />}
              {loading && <Loader />}
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
                  placeholder="Enter password"
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
              <a href="/Registration">Click here for new user!!</a>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
