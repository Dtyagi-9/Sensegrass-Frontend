import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import logo from "./images/LOGO.svg";
import "./style/App.scss";
import LoginForm from "./components/Login/login";
import SignupForm from "./components/Signup/signup";
import Iot from "./components/Iot/Iot";
import Errorpage from "./components/Errorpage/Errorpage";
import { Route , Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#67bc46",
      dark: "#000"
    },
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      signupEmail: ""
    };
  }

  updateEmail = e => {
    this.setState({ signupEmail: e });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="formcontainer">
            <div className="logocontainer">
              <div className="logo">
                <img src={logo}></img>
              </div>
              <div>
                <p className="logo-heading">SENSEGRASS</p>
              </div>
            </div>
            <div className="formsection">
            <Switch>
              <Route path="/" exact>
                <LoginForm updateEmail={this.updateEmail} />{" "}
              </Route>
              <Route path="/signup">
                <SignupForm email={this.state.signupEmail} />
              </Route>
              <Route path="/Iot">
                <Iot email={this.state.signupEmail} />
              </Route>
              <Route path="/*">
                <Errorpage email={this.state.signupEmail} />
              </Route>
              </Switch>
            </div>
          </div>
          <div className="imagesection">{/* <p></p> */}</div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
