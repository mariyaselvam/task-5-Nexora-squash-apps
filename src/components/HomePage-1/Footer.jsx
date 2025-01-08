import React from 'react'
import Logo from "../../assets/common/light-logo.png"
import { Link } from 'react-router-dom'

import X from "../../assets/HomeOne/Footer/x.svg"
import Instagram from "../../assets/HomeOne/Footer/instagram.svg"
import linkedIn from "../../assets/HomeOne/Footer/linked-in.svg"
import SMS from "../../assets/HomeOne/Footer/sms.svg"

const Footer = () => {
  return (
    <>
    <section className="home-one-footer-sec">
      <div className="container">
        <div className="row">
           <div className="col-md-6">
             <div className="home-one-footer-logo-nd-content-wrap">
              <div className="home-one-footer-logo-wrap">
                <img src={Logo} alt="" />
              </div>
             </div>

             <p>Empowering your productivity with intuitive tools and seamless solutions.</p>

             <a className="home-one-footer-mail-link-btn" href="#">
              <img src={SMS} alt="" />
             hello@nexora.com
             </a>
           </div>
           <div className="col-md-2">
                 <div className="home-one-usefull-links-wrap">
                  <h4 className="home-one-usefull-links-tit">
                  Useful Links
                  </h4>
                  <Link to="#">Documentation</Link>
                  <Link to="#">Download Pro Update</Link>
                  <Link to="#">Blog us</Link>
                  <Link to="#">Update Logs</Link>
                  <Link to="#">License</Link>

                 </div>
           </div>
           <div className="col-md-2">
            <div className="home-one-company-links-wrap">
            <h4 className="home-one-company-links-tit">
                   Company
                  </h4>
                  <Link to="#">Privacy Policy</Link>
                  <Link to="#">Refund Policy</Link>
                  <Link to="#">Community</Link>
                  <Link to="#">Support</Link>
            </div>
           </div>
           <div className="col-md-2">
            <div className="home-one-Get-In-Touch-links-wrap">
            <h4 className="home-one-Get-In-Touch-links-tit">
                  Get In Touch
                  </h4>

                  <p>Contact with us via out socials</p>

                  <div className="home-one-Get-In-Touch-links-social-media-wrap">
                    <Link className="home-one-Get-In-Touch-links-social-media-iocn" to="#">
                     <img src={X} alt="" />
                    </Link>
                    <Link className="home-one-Get-In-Touch-links-social-media-iocn" to="#">
                     <img src={Instagram} alt="" />
                    </Link>
                    <Link className="home-one-Get-In-Touch-links-social-media-iocn" to="#">
                     <img src={linkedIn} alt="" />
                    </Link>
                  </div>
            </div>
           </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="footer-main-tit-bottom">
                Nexora Agency
            </h1>
          </div>
        </div>
      </div>
      <h5 className="home-one-footer-copy-rights">
      @All Right Reserved By <Link to="#">Nexora</Link> Agency - 2028
      </h5>
    </section>
    </>
  )
}

export default Footer