import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./Screens/Homescreen";
import ProductdesScreen from "./Screens/ProductdesScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/product/:id" exact component={ProductdesScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
