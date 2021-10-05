import React from "react";
import { useState, useEffect } from "react";
import { registerNewUser } from "../actions/userAction";
import { useDispatch } from "react-redux";
import "../registration.css";

export default function Registration() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch = useDispatch();
  // alert(name)
  function register(e) {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    if (password == cpassword) {
      dispatch(registerNewUser(user));
      alert("registration success and use can login....");
      window.location.href = "/login";
    } else {
      alert("password and confirm password not match");
    }
  }

  //**** */
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
          <div classNameName="col-md-7 login"></div>
        </div>
      </center>
      <div class="container my-5 z-depth-1 man">
        <section class="dark-grey-text p-5 ">
          <div class="row">
            <div class="col-md-5 mb-4 mb-md-0">
              <div class="view">
                <img
                  src="https://image.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg"
                  class="img-fluids  "
                  alt="smaple image"
                />
              </div>
            </div>

            <div class="col-md-7 mb-lg-0 mb-4 ">
              <div>
                <h2 class="font-weight-bold deep-orange-lighter-hover mb-2">
                  Registration
                </h2>
                <form onSubmit={register}>
                  <input
                    type="text"
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
                    placeholder="Enter confirm password"
                    value={cpassword}
                    onChange={(e) => {
                      setcpassword(e.target.value);
                    }}
                    id="cpassword"
                  />
                  <button type="submit" class="btn btn-dark mt-3 mb-2 me-auto">
                    submit
                  </button>

                  <a className="ml-4 mt-5" href="/login" id="signup">
                    If the user already registered
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
