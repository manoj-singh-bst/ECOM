// import React, { Component } from "react";
// import emailjs from "./Email";
// export default class Forget extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault(); // Prevents default refresh by the browser
//     emailjs
//       .sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
//       .then(
//         (result) => {
//           alert("Message Sent, We will get back to you shortly", result.text);
//         },
//         (error) => {
//           alert("An error occurred, Please try again", error.text);
//         }
//       );
//   };
//   render() {
//     return (
//       <div className="container mr-3px">
//         <form onSubmit={this.handleSubmit}>
//           <h3>Forget password</h3>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="email"
//               onChange={(e) => (this.email = e.target.value)}
//             />
//             <button className="btn btn-primary btn-block">submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
