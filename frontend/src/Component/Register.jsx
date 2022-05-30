import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const register = async (e) => {
    e.preventDefault();
    await axios.post("/api/v2/register", {
        name,
        email,
        password,
        PhoneNumber,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="container-md RegisterBody">
      <h1 className="text-center mt-5">
        <b>
          <u>Register</u>
        </b>
      </h1>
      <form required onSubmit={register}>
        <div className="mb-3">
          <label for="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            id="Name"
            name="Name"
            autocomplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="EmailAddress" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            required
            id="EmailAddress"
            name="EmailAddress"
            autocomplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="PhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            name="PhoneNumber"
            autocomplete="off"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            id="Password"
            name="Password"
            minlength="8"
            autocomplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="mb-3">
          <label for="ConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            id="ConfirmPassword"
            name="ConfirmPassword"
            autocomplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        {/* <div className="mb-3">
            <label for="UserProfile" className="form-label">User Profile</label>
            <input type="file" name="UserProfile" id="UserProfile" className="form-control" required autocomplete="off">
        </div>  */}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
