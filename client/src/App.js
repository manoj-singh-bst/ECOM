import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./Screens/Homescreen";
import ProductdesScreen from "./Screens/ProductdesScreen";
import Adminscreen from "./Screens/Adminscreen";
import userslist from "./Screens/Userslist";
import Registration from "./Screens/Registration";
import Loginscreen from "./Screens/Loginscreen";
import Cartscreen from "./Screens/Cartscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/product/:id" exact component={ProductdesScreen} />
        <Route path="/cart" component={Cartscreen} />
        <Route path="/registration" component={Registration} />
        <Route path="/admin" component={Adminscreen} />
        <Route path="/login" component={Loginscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
