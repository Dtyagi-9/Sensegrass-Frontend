import React, { Component, createRef } from "react";
import { Button, Form, Grid, Header, Checkbox } from "semantic-ui-react";
import "./signup.scss";
import { Link, withRouter } from "react-router-dom";

class SelectField extends Component {
  constructor() {
    super();
    this.emailLabel = createRef(null);
    this.passwordLabel = createRef(null);
    this.setPasswordLabel = createRef(null);
    this.state = { signUpEmail: "" };
  }

  componentDidMount() {
    this.setState({ signUpEmail: this.props.email });
  }

  handleChange = e => {
    this.setState({ signUpEmail: e.target.value });
  };

  handleBack = () => {
    this.props.history.goBack();
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

  handleSetPasswordFocus = e =>
    (this.setPasswordLabel.current.innerText = "Confirm your Password");

  handleSetPasswordBlur = e => (this.setPasswordLabel.current.innerText = "");

  render() {
    return (
      <>
        <Grid
          textAlign="center"
          style={{ marginTop: "6rem" }}
          verticalAlign="middle"
          className="padit"
        >
          <Grid.Column style={{ maxWidth: 350 }}>
            <Header as="h3" color="grey" textAlign="left">
              ENTER YOUR DETAILS
            </Header>
            <Form size="large">
              <Form.Input
                fluid
                placeholder="Username"
                type="email"
                onFocus={this.handleEmailFocus}
                onBlur={this.handleEmailBlur}
                value={this.state.signUpEmail}
                onChange={this.handleChange}
              />
              <p ref={this.emailLabel} className="label"></p>
              <div className="password">
                <Form.Input
                  fluid
                  placeholder="Set Password"
                  type="password"
                  onFocus={this.handlePasswordFocus}
                  onBlur={this.handlePasswordBlur}
                  icon="eye"
                  onClick={this.handleShowPassword}
                />
                <p ref={this.passwordLabel} className="label"></p>
                <Form.Input
                  fluid
                  placeholder="Confirm Password"
                  type="password"
                  onFocus={this.handleSetPasswordFocus}
                  onBlur={this.handleSetPasswordBlur}
                  icon="eye"
                  onClick={this.handleShowPassword}
                />
                {/* <Icon name="eye" className="icon" color="black" /> */}
              </div>
              <p ref={this.setPasswordLabel} className="label"></p>
              <Form.Input fluid placeholder="Phone number" />
              <div className="submit-div flex end">
                <Button
                  fluid
                  size="large"
                  className="white"
                  onClick={this.handleBack}
                >
                  Back
                </Button>
                <Button color="green" fluid size="large">
                  NEXT
                </Button>
              </div>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default withRouter(SelectField);
