import React, { useEffect } from "react";
import Faruk from "../images/faruk.jpg";
import "../styles/about.css";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.error(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  });

  return (
    <>
      <div className="container emp-profile">
        <form method="GET" className="about-form">
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
                type="submit"
                className="profile-edit-button"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a
                  href="https://project-management-jet.vercel.app/"
                  target="_faruk">
                  Project Management
                </a>{" "}
                <br />
                <a href="https://faruk-portfolio.vercel.app/" target="_faruk">
                  My Portfolio
                </a>{" "}
                <br />
                <a
                  href="https://github.com/Shaikhfaruk/Materials"
                  target="_faruk">
                  Project Materials
                </a>{" "}
                <br />
                <a
                  href="https://github.com/Shaikhfaruk/MERN-stack-new"
                  target="_faruk">
                  MERN Project
                </a>{" "}
                <br />
                <a href="https://daiet-app.vercel.app/" target="_faruk">
                  Daietto App
                </a>{" "}
                <br />
                <a
                  href="https://github.com/Shaikhfaruk/react-in-onevideo"
                  target="_faruk">
                  Complate React
                </a>{" "}
                <br />
                <a href="https://instagram.com/shaikh.faruk_" target="_faruk">
                  Instagram
                </a>{" "}
                <br />
                <a href="https://figma.com/@FarukShaikh">Figma</a>{" "}
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profilr-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>UserID</label>
                    </div>
                    <div className="col-md-6">
                      <p>786786786</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Faruk Shaikh</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>sfaruk1137@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>9561611828</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer and Designer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tap-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>210</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Good</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
