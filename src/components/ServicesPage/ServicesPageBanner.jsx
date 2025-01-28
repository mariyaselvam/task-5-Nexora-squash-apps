import React from "react";
import Img1 from "../../assets/ServicesPage/Banner/profileOne-1.png";
import Img2 from "../../assets/ServicesPage/Banner/profileOne-2.png";
import Img3 from "../../assets/ServicesPage/Banner/profileOne-3.png";

import BannerOne from "../../assets/ServicesPage/Banner/bannerOne.png";
import BannerTwo from "../../assets/ServicesPage/Banner/bannerTwo.png";


const ServicesPageBanner = () => {
  return (
    <>
      <section className="Services-Page-Banner-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="Services-Page-Banner-cont-wraper">
                <span className="Services-Page-Banner-mini-tit">
                  <div className="Services-Page-Banner-mini-tit-imgs">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                  </div>
                  Join 500+ Happy Clients
                </span>

                <h2 className="Services-Page-Banner-main-tit">
                  Power Your Success with Our Services
                </h2>

                <p>
                  From design to development, SEO to social media, our expertise
                  drives your business forward, ensuring growth and success.
                </p>

                <button className="primary-btn">Explore Works</button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="Services-Page-Banner-imgs-wraper">
                <div className="Services-Page-Banner-imgs-1">
                  <img src={BannerOne} alt="" />
                </div>
                <div className="Services-Page-Banner-imgs-2">
                  <div className="Services-Page-Banner-imgs-inner-card">
                    <h4 className="Services-Page-Banner-imgs-inner-card-num">
                      500+
                    </h4>

                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="Services-Page-Banner-imgs-3">
                  <div className="Services-Page-Banner-imgs-inner-card">
                    <h4 className="Services-Page-Banner-imgs-inner-card-num">
                      132+
                    </h4>

                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <div className="Services-Page-Banner-imgs-4">
                  <img src={BannerTwo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default ServicesPageBanner;
