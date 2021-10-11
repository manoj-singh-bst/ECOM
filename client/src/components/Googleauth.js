import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const clientId =
  "517992084996-7ppbhmo6s70brtm8d0ard75kjnurit3q.apps.googleusercontent.com";

function Googleauth() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const history = useHistory();
  const onLoginSuccess = (res) => {
    console.log(res.profileObj.givenName);
    // console.log(res.accessToken);
    // localStorage.setItem("name", res.profileObj.givenName);
    // localStorage.setItem("email", res.profileObj.email);
    // localStorage.setItem("token", res.accessToken);
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    
    // history.push("/");
    // window.location.reload(false);
    window.location.href = "/";
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default Googleauth;
