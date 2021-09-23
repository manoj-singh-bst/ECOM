import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
    width: "100%",
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: 20,
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact>
          HOME 🏠
        </NavLink>

        <NavLink className={classes.tabs} to="all" exact>
          ALL USERS
        </NavLink>

        <NavLink className={classes.tabs} to="add" exact>
          ADDUSERS
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
