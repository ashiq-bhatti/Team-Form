import React, { useState } from "react";
import "./Signup.css";
const SingUp = () => {
  const [signup, setSignup] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignup({ ...signup, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setSignup({fname: "", lname: "", email: "", password: "", confirmpassword: ""});
  };

  return (
    <>
      <div className="card-container">
        <div className="sign-card">
          <form onClick={handleSubmit}>
            <div>
              <h2>Sign Up</h2>
            </div>
            <div className="lable-input">
              <input
                type="text"
                name="fname"
                placeholder="Enter The First Name"
                onChange={handleChange}
                value={SingUp.fname}
              />
            </div>
            <div className="lable-input">
              <br />
              <input
                type="Text"
                name="lname"
                placeholder="Enter The Last Name"
                onChange={handleChange}
                value={SingUp.lname}
              />
            </div>
            <div className="lable-input">
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter The Email"
                onChange={handleChange}
                value={SingUp.email}
              />
            </div>
            <div className="lable-input">
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter The  Password"
                onChange={handleChange}
                value={SingUp.password}
              />
            </div>
            <div className="lable-input">
              <br />
              <input
                type="password"
                name="confirmpassword"
                placeholder="Enter The Confirm Password"
                onChange={handleChange}
                value={SingUp.confirmpassword}
              />
            </div>
            <button type="submit" id="submit-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingUp;
