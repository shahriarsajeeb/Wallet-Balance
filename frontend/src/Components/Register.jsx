import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const register = async (e) => {
    e.preventDefault();
     await axios.post("/api/v2/register", {
        name,
        email,
        password,
        ConfirmPassword,
        PhoneNumber,
      }).then((res) => {
        setLogin(true);
      });
  };

  return (
    <div className="container-md RegisterBody">
      <h1 className="text-center mt-5">
        <b>
          <u>Register</u>
        </b>
      </h1>
      <form onSubmit={register}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            id="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autocomplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            required
            id="EmailAddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            autocomplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="PhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            required
            id="PhoneNumber"
            name="PhoneNumber"
            autocomplete="off"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* <input
            type="text"
            className="form-control"
            pattern="[1-9]{1}[0-9]{9}"
            required
            id="PhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            name="PhoneNumber"
            autocomplete="off"
          /> */}
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            minlength="8"
            autocomplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="ConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            id="ConfirmPassword"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="ConfirmPassword"
            autocomplete="off"
          />
        </div>
        {/* <!-- <div className="mb-3">
            <label for="UserProfile" className="form-label">User Profile</label>
            <input type="file" name="UserProfile" id="UserProfile" className="form-control" required autocomplete="off">
        </div> --> */}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        {
          login ? <Redirect to="/login" /> : null
        }
      </form>
    </div>
  );
};

export default Register;
