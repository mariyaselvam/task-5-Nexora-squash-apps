import React from "react";
import { ExploreExcitingOpportunitiesData } from "../../content/data";

import arrow from "../../assets/HomeOne/NexoraBlogHub/arrow-up.svg";
import { Link } from "react-router-dom";

import profile2user from "../../assets/common/MiniTitIcons/star.svg";

const ExploreExcitingOpportunities = () => {
  return (
    <>
      <section className="Explore-Exciting-Opportunities-sec">
        <div className="Explore-Exciting-Opportunities-tit-wrap">
          <span className="common-mini-tit">
            <img src={profile2user} alt="" />
            Careers
          </span>
          <h2 className="Explore-Exciting-Opportunities-main-tit">
            Explore Exciting Opportunities
          </h2>

          <p>
            Join our team of digital experts and be part of a dynamic agency
            dedicated to innovation and excellence.
          </p>
        </div>
        <div className="container">
          <div className="Explore-Exciting-Opportunities-inner-sec-wrap">
            <div className="row">
              {ExploreExcitingOpportunitiesData.map((items, index) => (
                <div key={index} className="col-lg-6">
                  <div className="Explore-Exciting-Opportunities-card">
                    <h5 className="Explore-Exciting-Opportunities-card-tit">
                      <Link to="#">{items.role}</Link>
                    </h5>

                    <p>{items.type}</p>

                    <div className="Explore-Exciting-Opportunities-card-icon">
                      <Link to="#">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="careers-email-link">
              Couldn’t find the desired role, Send your resume to
              <a href="mailto:careers@nexora.co"> careers@nexora.co </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreExcitingOpportunities;
