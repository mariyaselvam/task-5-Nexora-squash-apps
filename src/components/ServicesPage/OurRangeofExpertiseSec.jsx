import React from "react";
import { Link } from "react-router-dom";

import { OurRangeofExpertiseSecData } from "../../content/data";

const OurRangeofExpertiseSec = () => {
  return (
    <>
      <section className="Our-Range-of-Expertise-sec">
        <div className="Our-Range-of-Expertise-tit-warper">
          <h2 className="Our-Range-of-Expertise-main-tit">
            Our Range of Expertise
          </h2>

          <p>
            Dive into our diverse range of categories to find the perfect
            solutions for your business needs. Whether you're looking for web
            design, SEO, or branding, we've got you covered.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {OurRangeofExpertiseSecData.map((items, index) => (
              <div key={index} className="col-lg-4">
                <div className="Our-Range-of-Expertise-card">
                  <div className="Our-Range-of-Expertise-tit-nd-icon">
                    <img src={items.ImgURl} alt="" />
                    <h4>{items.tit}</h4>
                  </div>

                  <p> {items.para} </p>

                  <Link className="primary-btn" to={items.url}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRangeofExpertiseSec;
