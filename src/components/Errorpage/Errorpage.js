import React, { Component, createRef } from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";
import "./Errorpage.scss";
import { withRouter } from "react-router-dom";

class Onboard extends Component {
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

  render() {
    return (
        <>
            <div className="container">
                <Header className="error-page-header" as="h3" >
                    OOPS !Looks like the page you requested does not exist 
                </Header>
                <Button class="revert-button" color="green" size="large">
                    GO BACK TO DASHBOARD 
                </Button>
            </div>
      </>
    );
  }
}

export default withRouter(Onboard);
