import React from "react";
import { Link } from "react-router-dom";
import error404 from "../images/error4041.gif";
import "../styles/Error404.css";

const Error404 = () => {
  return (
    <>
      <section className="page_404" id="notfound">
        <h1 className="errorText">404</h1>
        <div className="imageDiv">
          <img className="errorImg" src={error404} alt="404Error" />
        </div>
        <div class="contant_box_404">
          <h1>Look like you're lost</h1>

          <p>the page you are looking for not avaible!</p>

          <Link to="/">Go Back to Home</Link>
        </div>
      </section>
    </>
  );
};

export default Error404;
