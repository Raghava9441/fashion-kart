import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../Form-input/form-input.component";
import "./sign-in.style.scss";


import {signInWithGoogle} from '../../firebase/firebase.utils'
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I alredy have an account</h2>
        <span>sign in woth your email and password</span>
        <form onSubmit={this.handleSubmit} action="">
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="submit form">
              sign in
            </CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={signInWithGoogle}
              value="submit form"
            >
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
