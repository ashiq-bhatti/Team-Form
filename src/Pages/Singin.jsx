import React, { useState } from "react";
import "./Signin.css";
const Singin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (e) => {
    //preventDefault(); will  send data and page will not refresh
    e.preventDefault();
    //remove data from form after submitted data
    setLogin({ email: "", password: "" });
  };

  return (
    <>
      <div className="card-container">
        <div className="sign-card">
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Log In</h2>
            </div>
            <div className="lable-input">
              <input
                type="email"
                name="email"
                placeholder="Enter the valid email"
                value={login.email}
                onChange={handlechange}
              />
            </div>
            <div className="lable-input">
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter the valid password"
                value={login.password}
                onChange={handlechange}
              />
            </div>
            <button type="submit" id="submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Singin;
