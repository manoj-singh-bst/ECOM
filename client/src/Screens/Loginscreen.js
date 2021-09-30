import React from "react";
import { useState } from "react";
import { loginUser } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import loginf from "../Images/login.jpg";

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
      <div
        className="card mt-5 w-75 m-auto"
        style={{ backgroundColor: "red", borderRadius: "3rem" }}
      >
        <center>
          <div
            classNameName="row "
            style={{
              width: "100%",
              padding: "100px",
              border: " 1px solid, grey",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <div classNameName="col-md-5 login ">
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
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

// import React from "react";

// import { useState } from "react";
// import { loginUser } from "../actions/userAction";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { Container, Form, Button, Row, Col } from "react-bootstrap";

// import loginf from "../Images/undraw_male_avatar_323b.svg";
// import wave from "../Images/wave.png";

// export default function Loginscreen() {
//   const [email, setemail] = useState();
//   const [password, setpassword] = useState();
//   const dispatch = useDispatch();

//   function Login(e) {
//     e.preventDefault();
//     const user = {
//       email: email,
//       password: password,
//     };
//     dispatch(loginUser(user));
//   }
//   useEffect(() => {
//     if (localStorage.getItem("currentUser")) {
//       window.location.href = "/";
//     }
//   }, []);

//   return (
//     <>
//       <div
//       className="vh-100"
//       style={{
//         backgroundImage:
//           "url(" +
//           "https://cdn.pixabay.com/photo/2020/12/10/12/33/laptop-5820171_1280.png" +
//           ")",
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div
//         className=""
//         style={{
//           // marginLeft: "60%",
//           float: "right",
//           width: "30%",
//           height: "40%",
//           marginTop: "59px",
//         }}

//        <div classNameName="row " style={{ width: "70%" }}>
//           <div classNameName="col-md-5  login">
//             <div>
//               <h1>Login</h1>
//               <form onSubmit={Login}>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => {
//                     setemail(e.target.value);
//                   }}
//                   id="email"
//                 />
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Enter Password"
//                   value={password}
//                   onChange={(e) => {
//                     setpassword(e.target.value);
//                   }}
//                   id="password"
//                 />

//                 <button type="submit" className="btn btn-dark mt-3 me-auto">
//                   Login
//                 </button>
//                 <br />
//                 <a href="/registration" id="signup">
//                   Don't have account yet?
//                 </a>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>

//     );
// }
//       {/* {/*

//     // <div>
//     //   <img className="wave" src={wave} alt="" />
//     //   <div className="container">
//     //     <div className="img">
//     //       <img className="avatar" src={loginf} />
//     //       <h2>welcome</h2>
//     //       <div className="input-div">
//     //         <div className="i">
//     //           <i className="fas fa-user"></i>
//     //         </div>
//     //       </div>
//     //       <h5>Username</h5>
//     //       <input type="text" name="" id="" />
//     //     </div>
//     //     <div className="input-div">
//     //       <div className="i">
//     //         <i className="fas fa-lock"></i>
//     //       </div>
//     //     </div>
//     //     <h5>Password</h5>
//     //     <input type="text" name="" id="" />
//     //   </div>
//     //   <a href="">Don't have an account</a>
//     //   <br />
//     //   <input type="submit" name="" id="" />
//     // </div> */}

//       {/* <section className="vh-100 my-5 ">
//         <div className="container h-80 ">
//           <div className="row d-flex justify-content-center align-items-center h-80 ">
//             <div className="col-lg-12 col-xl-11 ">
//               <div
//                 className="card text-black pr "
//                 style={{ borderRadius: "25px;" }}
//               >
//                 <div className="card-body p-md-2 man">
//                   <div className="row justify-content-center">
//                     <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                       <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">
//                         LOGIN
//                       </p>

//                       <Form className="p-5">
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter your Email "
//                             required
//                             name="name"
//                           />
//                         </Form.Group>
//                         <Form.Control
//                           type="text"
//                           placeholder="Enter your password"
//                           required
//                           name="name"
//                         />
//                         <Form.Group
//                           className="mb-3"
//                           controlId="formBasicPassword"
//                         ></Form.Group>
//                         <button type="submit" className="button">
//                           Log in
//                         </button>
//                       </Form>
//                     </div>
//                     <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                       {/* <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image" /> */}
//                       {/* {/* <img
//                         src="https://mdbootstrap.com/img/illustrations/graphics(4).png"
//                         className="img-fluid"
//                         alt="smaple image"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </> */ */}
