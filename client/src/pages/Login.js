import React from "react";
import { Link } from "react-router-dom";
import login from "../images/Login1.svg";

const Login = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-image">
            <figure>
              <img src={login} alt="loginPic" />
            </figure>
            <Link to="/signup" className="signup-image-link">
              Create An Account?
            </Link>
          </div>
          <div className="signup-form">
            <h2 className="form-title">Login</h2>
            <form className="register-form" id="register-form">
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
                  placeholder="Your Email"
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
                  placeholder="Your Password"
                />
              </div>

              <div className=" form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="log in"
                />
              </div>
              <Link to="/login" className="signup-mobile-link">
                Already have an account ?
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
