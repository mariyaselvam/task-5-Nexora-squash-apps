import React from "react";
import { HomeTwoWhatSetsUsApartData } from "../../content/data";
import Start from "../../assets/common/MiniTitIcons/star.svg"

const HomeTwoWhatSetsUsApart = () => {
  return (
    <>
      <section className="Home-two-What-Sets-Us-Apart-sec">
        <div className="Home-two-What-Sets-Us-Apart-tit-wrap">
          <span className="Home-two-What-Sets-Us-Apart-mini-tit common-mini-tit">
            <img src={Start} alt="" />
          Benefits
          </span>
          <h2 className="Home-two-What-Sets-Us-Apart-main-tit">
            What Sets Us Apart
          </h2>

          <p>
            Maximize your online potential with our customized and
            cutting-edge web development services.
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {HomeTwoWhatSetsUsApartData.map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className={`${item.style} Home-two-What-Sets-Us-Apart-card`}
                >
                  <div className="Home-two-What-Sets-Us-Apart-card-img">
                    <img src={item.icon} alt="" />
                  </div>
                  <h5> {item.tit} </h5>
                  <p> {item.para} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTwoWhatSetsUsApart;
