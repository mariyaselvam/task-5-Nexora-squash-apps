import React from 'react'
import { Link } from 'react-router-dom'

import Img1 from "../../assets/ServicesPage/Banner/profileOne-1.png";
import Img2 from "../../assets/ServicesPage/Banner/profileOne-2.png";
import Img3 from "../../assets/ServicesPage/Banner/profileOne-3.png";

const HomeTwoBannerSec = () => {
  return (
    <>
    <section className="home-two-banner-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="home-two-banner-cont-wrap">
                    <span className="Services-Page-Banner-mini-tit">
                  <div className="Services-Page-Banner-mini-tit-imgs">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                  </div>
                  Join 500+ Happy Clients
                </span>


                        <h1 className="home-two-banner-hero-tit">
                        Transform Your Business with Nexora's Digital Solutions
                        </h1>

                        <p className="home-two-banner-para">We create innovative websites that are visually stunning and functionally seamless. Our team builds strong, memorable brands that resonate with your audience.</p>

                        <Link className="secondary-btn home-two-banner-btn" to="/">
                        View Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeTwoBannerSec