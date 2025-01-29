import React from "react";
import OurCultureEmpoweringExcellenceMainImg from "../../assets/AboutusPage/Our-Culture-Empowering-Excellence.png";

import { OurCultureEmpoweringExcellenceData } from "../../content/data";

import profile2user from "../../assets/common/MiniTitIcons/star.svg";

const OurCultureEmpoweringExcellence = () => {
  return (
    <>
      <section className="Our-Culture-Empowering-Excellence-sec">
        <div className="Our-Culture-Empowering-Excellence-tit-wrap">
          <span className="common-mini-tit">
            <img src={profile2user} alt="" />
            Our Culture
          </span>
          <h2 className="Our-Culture-Empowering-Excellence-main-tit">
            Our Culture, Empowering Excellence
          </h2>

          <p>
            Experience a culture that values innovation, collaboration, and
            diversity. We empower our team to excel, fostering a dynamic
            environment where creativity thrives.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-12">
              <div className="Our-Culture-Empowering-Excellence-main-img">
                <img src={OurCultureEmpoweringExcellenceMainImg} alt="" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-12">
              <div className="Our-Culture-Empowering-Excellence-cont-wrap">
                <div className="row">
                  {OurCultureEmpoweringExcellenceData.map((items, index) => (
                    <div key={index} className="col-md-6">
                      <div className="Our-Culture-Empowering-Excellence-cont-card">
                        <div className="Our-Culture-Empowering-Excellence-icon">
                          <img src={items.icon} alt="" />
                        </div>

                        <h4 className="Our-Culture-Empowering-Excellence-card-tit">
                          {items.tit}
                        </h4>

                        <p className="Our-Culture-Empowering-Excellence-para">
                          {items.para}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCultureEmpoweringExcellence;
