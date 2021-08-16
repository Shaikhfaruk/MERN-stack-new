import React from "react";
import "../styles/contact.css";
import phone from "../images/phone.png";
import email from "../images/email.png";
import placeholder from "../images/placeholder.png";

const Contact = () => {
  return (
    <>
      <section>
        <div className="contact_info">
          <div className="container-fluid mt-5">
            <div className="row">
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
                    <div className="contact_info_text">
                      sfaruk1137@gmail.com
                    </div>
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
        </div>
        <div className="contact_form">
          <div className="container_contact container mt-5 ml-4">
            <div className="row" style={{ width: "100%" }}>
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_title">Get In Touch</div>
                  <form id="contact-form">
                    <div className="sub_contact_form">
                      <input
                        type="text"
                        id="contact-form-name"
                        className="contact_form_name input_field"
                        placeholder="Your Name"
                        required="true"
                      />
                      <input
                        type="email"
                        id="contact-form-email"
                        className="contact_form_email input_field"
                        placeholder="Your Email"
                        required="true"
                      />
                      <input
                        type="number"
                        id="contact-form-phone"
                        className="contact_form_phone input_field"
                        placeholder="Your Phone"
                        required="true"
                      />
                    </div>
                    <div className="contact_form_text mt-4">
                      <textarea
                        name=""
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        className="text_field contact_form_message "></textarea>
                    </div>
                    <div className=" form-button">
                      <button className="btn contact_submit_button">
                        Send Message
                      </button>
                    </div>
                  </form>
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
