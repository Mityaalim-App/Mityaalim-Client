import React from "react";
import { Form, Field } from "react-final-form";
import { userService } from "../../services/userService";

const Register: React.FC = () => {
  const onSubmit = async (values: Object) => {
    await userService.signup(values);
  };

  return (
    <div className="register">
      <h1>הרשמה</h1>
      <div className="logo"></div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              className="input"
              name="firstName"
              component="input"
              type="text"
              placeholder="שם פרטי"
            />
            <Field
              className="input"
              name="lastName"
              component="input"
              type="text"
              placeholder="שם משפחה"
            />
            <Field
              className="input"
              name="email"
              component="input"
              type="email"
              placeholder="דואר אלקטרוני"
            />
            <Field
              className="input"
              name="phone"
              component="input"
              type="tel"
              placeholder="טלפון נייד"
            />
            <button type="submit" className="reg-button" disabled={submitting}>
              הרשמה
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default Register;
