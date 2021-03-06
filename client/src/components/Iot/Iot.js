import React, { Component, createRef } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import "./Iot.scss";
import { withRouter } from "react-router-dom";
import Logo from "../common/Logo";

class IotForm extends Component {
  constructor() {
    super();
    this.state = {
      signupEmail: "",
      showPassword: false,
      password: ""
    };
    this.emailLabel = createRef(null);
    this.passwordLabel = createRef(null);
    this.signupEmail = createRef(null);
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignup = () => {
    this.props.updateEmail(this.state.signupEmail);
    this.props.history.push("/signup");
  };

  handleEmailFocus = e =>
    (this.emailLabel.current.innerText = "Enter your Email address");

  handleEmailBlur = e => (this.emailLabel.current.innerText = "");

  handlePasswordFocus = e =>
    (this.passwordLabel.current.innerText = "Enter your Password");

  handleShowPassword = e => {
    console.log(e.target);
  };

  handlePasswordBlur = e => (this.passwordLabel.current.innerText = "");

  render() {
    console.log(this.state);
    return (
      <>
        <div className="container-second">
          <div className="formcontainer-second">
            <Logo />
            <Grid
              textAlign="center"
              style={{ marginTop: "6rem" }}
              verticalAlign="middle"
              className="padit"
            >
              <Grid.Column style={{ maxWidth: 350 }}>
                <Header as="h3" color="grey" textAlign="left">
                  REGISTER IOT SOIL SENSOR
                </Header>
                <div className="iot-image-holder"></div>
                <Form size="large">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    variant="outlined"
                    onFocus={this.handleEmailFocus}
                    onBlur={this.handleEmailBlur}
                    fullWidth
                    placeholder="farmer@gmail.com"
                  />

                  <p ref={this.emailLabel} className="label"></p>

                  <div className="submit-div flex end">
                    <Button
                      fluid
                      size="large"
                      className="white"
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      fluid
                      size="large"
                      className="white"
                      onClick={this.handleBack}
                    >
                      Skip
                    </Button>
                    <Button color="green" fluid size="large">
                      NEXT
                    </Button>
                  </div>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
          <div className="imagesection">{/* <p></p> */}</div>
        </div>
      </>
    );
  }
}

export default withRouter(IotForm);
