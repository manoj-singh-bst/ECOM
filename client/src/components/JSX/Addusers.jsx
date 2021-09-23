import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { addUser } from "../../services/api";
import { useHistory } from "react-router-dom";

//all the css
const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&>*": {
      marginTop: 20,
    },
  },
});

const initialvalues = {
  name: "",
  email: "",
  phone: "",
};

//main function
const Adduser = () => {
  const classes = useStyle();
  const history = useHistory();
  const [user, setuser] = useState(initialvalues);
  const { name, email, phone } = user;

  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    history.push("./all");
  };

  return (
    <>
      <FormGroup className={classes.container}>
        <Typography variant="h4">ADD USERS</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={() => addUserDetails()}
        >
          ADD USER
        </Button>
      </FormGroup>
    </>
  );
};
export default Adduser;
