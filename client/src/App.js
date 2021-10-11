import "./App.css";
// import email from "./Views/login";  
import React, { Component } from "react";
import LogRocket from "logrocket";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./Screens/Homescreen";
import ProductdesScreen from "./Screens/ProductdesScreen";
import Adminscreen from "./Screens/Adminscreen";
// import userslist from "./Screens/Userslist";
import Registration from "./Screens/Registration";
import Loginscreen from "./Screens/Loginscreen";
import Cartscreen from "./Screens/Cartscreen";
import Ordersscreen from "./Screens/Ordersscreen";
import Orderinfo from "./Screens/Orderinfo";
import Profilescreen from "./Screens/Profilescreen";
import Forget from "./components/Forget";

const LOG_ROCKET_PROJECT_ID = "tw4dds/demo-project";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      recordUI: false,
    };
  }
  componentWillMount() {
    LogRocket.init("tw4dds/demo-project");
    const user = {
      email: "demo@keithweaver.ca",
      recordFrontendLogging: false,
      recordFrontendNetworkCalls: false,
      recordFrontendUI: false,
      associateFrontendLogsWithUser: false,
    };
    if (!user || !user.recordFrontendUI) {
      // Record nothing
      this.setState({
        recordUI: false,
      });
    } else {
      this.setState({
        recordUI: true,
      });
    }

    if (user && user.recordFrontendNetworkCalls) {
      LogRocket.init(LOG_ROCKET_PROJECT_ID, {
        network: {
          isEnabled: true,
        },
      });
    } else {
      LogRocket.init(LOG_ROCKET_PROJECT_ID, {
        network: {
          isEnabled: false,
        },
      });
    }

    if (user && user.associateFrontendLogsWithUser) {
      LogRocket.identify(user.email, {
        // Any additional fields
      });
    }
  }

  render() {
    // const { children } = this.props;
    const { user, recordUI } = this.state;

    const content = (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Route path="/" exact component={Homescreen} />
          <Route path="/product/:id" exact component={ProductdesScreen} />
          <Route path="/cart" component={Cartscreen} />
          <Route path="/registration" component={Registration} />
          <Route path="/admin" component={Adminscreen} />
          <Route path="/login" component={Loginscreen} />
          <Route path="/orders" component={Ordersscreen} />
          <Route path="/orderinfo/:orderid" component={Orderinfo} />
          <Route path="/profile" component={Profilescreen} />
          <Route exact path="/forget" component={Forget} />
        </BrowserRouter>
      </div>
    );

    if (!recordUI) {
      return <div data-private>{content}</div>;
    }
    return <div>{content}</div>;

    // return (
    //   <div className="App">
    //     <Navbar />
    //     <BrowserRouter>
    //       <Route path="/" exact component={Homescreen} />
    //       <Route path="/product/:id" exact component={ProductdesScreen} />
    //       <Route path="/cart" component={Cartscreen} />
    //       <Route path="/registration" component={Registration} />
    //       <Route path="/admin" component={Adminscreen} />
    //       <Route path="/login" component={Loginscreen} />
    //       <Route path="/orders" component={Ordersscreen} />
    //       <Route path="/orderinfo/:orderid" component={Orderinfo} />
    //       <Route path="/profile" component={Profilescreen} />
    //       <Route exact path="/forget" component={Forget} />
    //     </BrowserRouter>
    //   </div>
    // );
  }
}

export default App;
