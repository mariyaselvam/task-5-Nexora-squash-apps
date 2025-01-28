import React from "react";
import { OurServicesOverviewData } from "../../content/data";
import { Link } from "react-router-dom";

import Book from "../../assets/common/MiniTitIcons/profile-2user.svg";

const OurServicesOverview = () => {
  return (
    <>
      <section className="Our-Services-Overview-sec">
        <div className="Our-Services-Overview-tit-wraper">
          <span className="common-mini-tit">
            <img src={Book} alt="" />
            Service Overview
          </span>
          <h2 className="Our-Services-Overview-main-tit">
            Our Services Overview
          </h2>
          <p>
            Explore our comprehensive services in digital marketing, web design
            and development, and branding & identity, tailored to elevate your
            online presence and brand identity.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {OurServicesOverviewData.map((items, index) => (
              <div key={index} className="col-lg-12">
                <div className="Our-Services-Overview-main-card">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="Our-Range-of-Expertise-card">
                        <div className="Our-Range-of-Expertise-tit-nd-icon">
                          <img src={items.CardIcon} alt="" />
                          <h4>{items.tit}</h4>
                        </div>

                        <p> {items.para} </p>

                        <Link className="primary-btn" to={items.LinkURl}>
                          Get in Touch
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div
                            className={`Our-Services-Overview-mini-card ${items.styleOne}`}
                          >
                            <img src={items.OurServicesOverviewIcon1} alt="" />

                            <p>{items.OurServicesOverviewPara1}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className={`Our-Services-Overview-mini-card ${items.styleOne}`}
                          >
                            <img src={items.OurServicesOverviewIcon2} alt="" />

                            <p>{items.OurServicesOverviewPara2}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className={`Our-Services-Overview-mini-card ${items.styleTwo}`}
                          >
                            <img src={items.OurServicesOverviewIcon3} alt="" />

                            <p>{items.OurServicesOverviewPara3}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className={`Our-Services-Overview-mini-card ${items.styleThree}`}
                          >
                            <img src={items.OurServicesOverviewIcon4} alt="" />

                            <p>{items.OurServicesOverviewPara4}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div
                            className={`Our-Services-Overview-mini-card ${items.styleThree}`}
                          >
                            <img src={items.OurServicesOverviewIcon5} alt="" />

                            <p>{items.OurServicesOverviewPara5}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className={`Our-Services-Overview-mini-card`}>
                            <img src={items.OurServicesOverviewIcon6} alt="" />

                            <p>{items.OurServicesOverviewPara6}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesOverview;
