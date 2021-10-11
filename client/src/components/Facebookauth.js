import React, { Component } from "react";
import "./fb.css";
import FacebookLogin from "react-facebook-login";
export default class Facebookauth extends Component {
  responseFacebook = (response) => {
    console.log(response);
    
  };
  render() {
    return (
      <div className="fbl">
        <FacebookLogin
          appId="298753331714351"
          autoLoad={true}
          fields="name,email,picture"
          //   onClick={componentClicked}
          callback={this.responseFacebook}
        />
      </div>
    );
  }
}
