import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import login from "../images/Login1.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json(); //"await" just added you will remove it

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      history.push("/");
    }
  };

  return (
    <>
      <section className="login">
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
            <form method="POST" className="register-form" id="register-form">
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
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
                  onClick={loginUser}
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
