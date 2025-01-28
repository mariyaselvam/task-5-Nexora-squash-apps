import AboutUsMainImg from "../../assets/HomeOne/AboutUs/about-us-main-img.png";
import { Link } from "react-router-dom";

const HomeOneaboutUs = () => {
  return (
    <>
      <section className="Home-one-about-us-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="home-one-about-us-main-img">
                <img src={AboutUsMainImg} alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="home-one-about-cot-wrap">
                <h1 className="home-one-about-main-tit">
                  Transforming Ideas into <span> </span> Digital Excellence
                </h1>

                <p>
                  Unlock your brand's true potential with tailored digital
                  strategies that captivate, engage, and deliver tangible
                  results.
                </p>

                <Link className="home-one-about-btn primary-btn" to="/about">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeOneaboutUs;
