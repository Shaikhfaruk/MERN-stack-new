import React from "react";
import SignupPic from "../images/SignupPic.svg";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  return (
    <>
      <section className="signup">
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
                  autocomplete="off"
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
                  autocomplete="off"
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
                  autocomplete="off"
                  placeholder="Your Phone"
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
                  autocomplete="off"
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
                  autocomplete="off"
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
                  autocomplete="off"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={SignupPic} alt="signupImage" />
            </figure>
            <Link to="/login" className="signup-image-link">
              {" "}
              Already have an account ?{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
