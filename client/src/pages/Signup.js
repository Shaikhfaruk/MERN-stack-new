import React, { useState } from "react";
import SignupPic from "../images/SignupPic.svg";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="signup-form">
          <h2 className="form-title">Sign Up</h2>
          <form className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name"></i>
              </label>
              <input
                className="effect"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                className="effect"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
              </label>
              <input
                className="effect"
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Your Phone"
                min="7000000000"
                max="9999999999"
              />
            </div>

            <div className="form-group">
              <label htmlFor="work">
                <i className="zmdi zmdi-slideshow material-icons-name"></i>
              </label>
              <input
                className="effect"
                type="text"
                name="work"
                id="work"
                autoComplete="off"
                value={user.work}
                onChange={handleInputs}
                placeholder="Your Profession"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                className="effect"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                placeholder="Your Password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                className="effect"
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password"
              />
            </div>
            <div className=" form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-submit"
                value="register"
              />
            </div>
            <Link to="/login" className="signup-mobile-link">
              Already have an account ?
            </Link>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src={SignupPic} alt="signupImage" />
          </figure>
          <Link to="/login" className="signup-image-link">
            Already have an account ?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
