// import React, { useStyle } from "react";
// import {
//   Avatar,
//   Button,
//   Paper,
//   Grid,
//   Typrography,
//   Container,
//   TextField,
// } from "@material-ui/core";
// import LockOutlinedIcon from '@material-ui/core'
// import Icon from "./icon"

// const Auth = () => {
//   const classes = useStyle();
//   const isSignup = false;
//   return (
//     <div>
//       <Container component="main">
//         <paper>
//           <Avatar>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typrography variant="h5">
//             {isSignup ? "Sign up" : "Sign In"}
//           </Typrography>
//           <form className={""} onsubmit={handleSubmit} >
//           <Grid containerspacing={2}>
//             {isSignup && (
//               <>
//                 <TextField name="firstName" lable="frist Name" handleChange={handleChange} autoFocus>
//                 <TextField name="lastName" lable="last Name" handleChange={handleChange} autoFocus>

//                 </TextField>
//               </>
//             )
//             }
//           </Grid>
//           </form>
//         </paper>
//       </Container>
//     </div>
//   );
// };

// export default Auth;
