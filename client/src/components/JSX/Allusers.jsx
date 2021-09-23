// import {
//   TableCell,
//   Table,
//   TableBody,
//   TableRow,
//   TableHead,
//   makeStyles,
//   Button,
// } from "@material-ui/core";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getUsers } from "../services/api";
// import { deleteuser } from "../services/api";

// const useStyle = makeStyles({
//   table: {
//     width: "90%",
//     margin: "50px 0 0 50px",
//   },
// });

// const Allusers = () => {
//   const [users, setusers] = useState([]);
//   const classes = useStyle();

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const getAllUsers = async () => {
//     const res = await getUsers();
//     console.log(res.data);
//     setusers(res.data);
//   };

//   const deleteUserData = async (id) => {
//     await deleteuser(id);
//     getAllUsers();
//   };

//   return (
//     <Table className={classes.table}>
//       <TableHead>
//         <TableRow>
//           <TableCell>id</TableCell>
//           <TableCell>name</TableCell>
//           <TableCell>email</TableCell>
//           <TableCell>phone</TableCell>
//           <TableCell></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {users.map((User) => {
//           return (
//             <TableRow className={classes.row} key={User._id}>
//               <TableCell> {User._id}</TableCell>
//               <TableCell> {User.name}</TableCell>
//               <TableCell> {User.email}</TableCell>
//               <TableCell> {User.phone}</TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{ marginRight: 10 }}
//                   component={Link}
//                   to={`/edit/${User._id}`}
//                 >
//                   edit
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="seccondary"
//                   onClick={() => deleteUserData(User.id)}
//                 >
//                   delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </Table>
//   );
// };
// export default Allusers;
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../services/api/js";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row} key={user.id}>
            <TableCell>{user._id}</TableCell>{" "}
            {/* change it to user.id to use JSON Server */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>{" "}
              {/* change it to user.id to use JSON Server */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
