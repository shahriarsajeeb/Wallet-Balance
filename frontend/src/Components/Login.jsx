import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
    const [LoginEmail, setLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [succes, setSuccess] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        await axios.post("/api/v2/login", {
            LoginEmail,
            LoginPassword,
          }).then((res) => {
            setSuccess(true);
          });
    }

  return (
    <div className="container-md LoginBody">
      <h1 className="text-center mt-5">
        <b>
          <u>Login</u>
        </b>
      </h1>
      <form
      onSubmit={login}
      >
        <div className="mb-2">
          <label for="LoginEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            required
            id="LoginEmail"
            name="LoginEmail"
            value={LoginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            autocomplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="LoginPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            id="LoginPassword"
            value={LoginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            name="LoginPassword"
            autocomplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
      {
          succes ? <Redirect to={`/`} /> : null
      }
    </div>
  );
};

export default Login;
