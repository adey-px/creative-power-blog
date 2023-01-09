import React, { Component } from "react";
import Form from "../components/features/Form";
import { withFormik } from "formik";
import * as Yup from "yup";

import "../assets/css/LoginPage.css";

// Define fields for login form
const fields = [
  {
    id: "email",
    type: "email",
    elementName: "input",
    placeholder: "Email *",
  },
  {
    id: "password",
    type: "password",
    elementName: "input",
    placeholder: "Password *",
  },
];

//
class LoginPage extends Component {
  //
  render() {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form">
            <div className="row">
              <h1>Login</h1>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={this.props.handleSubmit}>
                  {fields.map((items, i) => {
                    return (
                      <div className="field">
                        <Form
                          key={i}
                          {...items}
                          value={this.props.values[items.name]}
                          name={items.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[items.name]}
                          err={this.props.errors[items.name]}
                        />
                      </div>
                    );
                  })}

                  <div className="col-md-12 btn-submit">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Refer to withFormik in export
export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is invalid")
      .required("Try login with valid email"),
    password: Yup.string().required("Please enter a valid password"),
  }),
  handleSubmit: (values, { setsubmitting }) => {
    console.log("Login attempt", values);
  },
})(LoginPage);
