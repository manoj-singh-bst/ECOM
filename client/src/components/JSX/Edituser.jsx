// import {
//   FormControl,
//   FormGroup,
//   Input,
//   InputLabel,
//   Button,
//   makeStyles,
//   Typography,
// } from "@material-ui/core";

// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { getUsers } from "../services/api";
// import { useParams } from "react-router-dom";
// import { edituser } from "../services/api";

// const useStyle = makeStyles({
//   container: {
//     width: "50%",
//     margin: "5% 0 0 25%",
//     "&>*": {
//       marginTop: 20,
//     },
//   },
// });

// const initialvalues = {
//   name: "",
//   email: "",
//   phone: "",
// };

// //main function
// const Edituser = () => {
//   const classes = useStyle();
//   const [user, setuser] = useState(initialvalues);
//   const { name, email, phone } = user;
//   const history = useHistory();
//   const { id } = useParams();

//   useEffect(() => {
//     loadUserData();
//   });

//   const loadUserData = async () => {
//     const res = await getUsers(id);
//     setuser(res.data);
//   };

//   const onValueChange = (e) => {
//     setuser({ ...user, [e.target.name]: e.target.value });
//   };

//   const editUserDetails = async () => {
//     await edituser(id, user);
//     history.push("./all");
//   };

//   return (
//     <>
//       <FormGroup className={classes.container}>
//         <Typography variant="h4">EDIT USERS</Typography>
//         <FormControl>
//           <InputLabel>Name</InputLabel>
//           <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
//         </FormControl>
//         <FormControl>
//           <InputLabel>Email</InputLabel>
//           <Input
//             onChange={(e) => onValueChange(e)}
//             name="email"
//             value={email}
//           />
//         </FormControl>
//         <FormControl>
//           <InputLabel>Phone</InputLabel>
//           <Input
//             onChange={(e) => onValueChange(e)}
//             name="phone"
//             value={phone}
//           />
//         </FormControl>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => editUserDetails()}
//         >
//           EDIT USER
//         </Button>
//       </FormGroup>
//     </>
//   );
// };
// export default Edituser;
import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../services/api.js";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  });

  const loadUserDetails = async () => {
    const res = await getUsers(id);
    setUser(res.data);
  };

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
