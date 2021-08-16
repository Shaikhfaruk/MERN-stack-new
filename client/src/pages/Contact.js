import React from "react";
import "../styles/contact.css";
import phone from "../images/phone.png";
import email from "../images/email.png";
import placeholder from "../images/placeholder.png";

const Contact = () => {
  return (
    <>
      <section className="contact_info">
        <div className="container-fluid mt-5">
          <div className="row ">
            <div className="contact-div col-lg-10 offset-lg-1">
              <div className="contact_info_item">
                <img src={phone} alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 966661828</div>
                </div>
              </div>
              <div className="contact_info_item">
                <img src={email} alt="email" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">sfaruk1137@gmail.com</div>
                </div>
              </div>
              <div className="contact_info_item">
                <img src={placeholder} alt="placeholder" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">
                    Beed, Maharashtra, India{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
