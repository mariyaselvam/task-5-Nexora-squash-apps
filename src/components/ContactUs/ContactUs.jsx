import React from "react";

import { Link } from "react-router-dom";

import { GetinTouchwithUsData } from "../../content/data";

import Arrow from "../../assets/HomeOne/NexoraBlogHub/arrow-up.svg";

import Book from "../../assets/common/MiniTitIcons/profile-2user.svg";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us-Get-in-Touch-with-Us-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="contact-us-Get-in-Touch-with-Us-cont-wrap">
                <span className="common-mini-tit">
                  <img src={Book} alt="" />
                  Contact Us
                </span>
                <h2 className="contact-us-Get-in-Touch-with-Us-main-tit">
                  Get in Touch with Us
                </h2>

                <p>
                  Have a question or need more information about our services?
                  Fill out the form, and our team will get back to you as soon
                  as possible.
                </p>

                {GetinTouchwithUsData.map((items, index) => (
                  <div
                    key={index}
                    className="contact-us-Get-in-Touch-with-Us-card"
                  >
                    <div className="contact-us-Get-in-Touch-with-Us-card-iocn">
                      <img src={items.icon} alt="" />
                    </div>

                    <div>
                      <p> {items.para} </p>
                      <h4> {items.tit} </h4>
                    </div>

                    <Link to={items.Link} className="arrow-icon">
                      <img src={Arrow} alt="" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-us-Get-in-Touch-with-Us-from-wrap">
                <h4 className="Get-in-Touch-with-Us-from-main-tit">
                  Send Us a Message
                </h4>
                <p>
                  Use our convenient contact form to reach out with questions,
                  feedback, or collaboration inquiries.
                </p>

                <input
                  className="Get-in-Touch-with-Us-Name"
                  type="text"
                  placeholder="Name"
                />

                <input
                  className="Get-in-Touch-with-Us-email"
                  type="email"
                  placeholder="E-mail"
                />

                <textarea
                  className="Get-in-Touch-with-Us-textarea"
                  placeholder="Message"
                  name=""
                  id=""
                ></textarea>

                <button className="Get-in-Touch-with-Us-from-btn">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
