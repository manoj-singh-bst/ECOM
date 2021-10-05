import React from "react";
import { useState } from "react";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../login.css";
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
        <div
          classNameName="row"
          style={{
            width: "50%",
            marginTop: "100px",
            border: " 1px solid, grey",
          }}
        >
          <div classNameName="col-md-5 login"></div>
        </div>
      </center>
      <div class="container my-5 z-depth-1 man">
        <br />
        <h1 style={{ textAlign: "center" }}>WELCOME TO SUPER MART</h1>
        <section class="dark-grey-text p-5 ">
          <div class="row">
            <div class="col-md-5 mb-4 mb-md-0">
              <div class="view">
                <img
                  src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg"
                  class="img-fluid"
                  alt="smaple image"
                />
              </div>
            </div>

            <div class="col-md-7 mb-lg-0 mb-4 ">
              <div>
                <h2 class="font-weight-bold deep-orange-lighter-hover mb-3 ">
                  Login
                </h2>
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
                <a href="/registration" id="signup">
                  Don't have account yet?
                </a>
                <br />
                <a href="" id="signup">
                  forget password
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
