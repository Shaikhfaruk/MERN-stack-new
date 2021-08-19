import React from "react";
import Faruk from "../images/faruk.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="" className="about-form">
          <div className="row about-row">
            <div className="col-md-4">
              <img src={Faruk} alt="faruk" className="about-img" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Faruk Shaikh</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rankings: <span>1/10</span>
                </p>

                <ul className="nav" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#home">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#profile">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="profile-edit-button"
                value="Edit Profile"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
