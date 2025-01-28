import MainImg from "../../assets/HomeOne/OurExpertise/Home-one-Our-Expertise-img-1.png"
import ECommerceSolutions from "../../assets/HomeOne/OurExpertise/E-commerce-Solutions.svg"
import DigitalMarketing from "../../assets/HomeOne/OurExpertise/Digital-Marketing.png"
import MobileAppDevelopment from "../../assets/HomeOne/OurExpertise/Mobile-App-Development.png"
import ContentStrategy from "../../assets/HomeOne/OurExpertise/Content-Strategy.png"
import profile2user from "../../assets/common/MiniTitIcons/profile-2user.svg"

const OurExpertise = () => {
  return (
    <>
     <section className="Home-one-Our-Expertise-sec">
        <div className="Home-one-Our-Expertise-tit-wrap">
            <span className="common-mini-tit">
                <img src={profile2user} alt="" />
                Expertise
            </span>
        <h2 className="Home-one-Our-Expertise-main-tit">
        Our Expertise
        </h2>
        <p>Explore our specialized skills and knowledge across various industries. Discover how our unique value proposition sets us apart in delivering exceptional results.</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                   <div className="Home-one-Our-Expertise-main-card">
                    <div className="Home-one-Our-Expertise-main-img">
                        <img src={MainImg} alt="" />
                    </div>
                    <div className="Home-one-Our-Expertise-card-cont-wrap">
                        <div className="Home-one-Our-Expertise-card-tit-wrap">
                            <img src={ECommerceSolutions} alt="" />
                            <h4>
                            E-commerce Solutions
                            </h4>
                        </div>

                        <p>Tailored e-commerce solutions designed to boost online sales and enhance customer experiences. Maximize your revenue potential with our expert guidance.</p>

                        <div className="Home-one-Our-Expertise-inner-card">
                            <div className="inner-card-child">
                                <h5>40%</h5>
                                <p>Sales Increased</p>
                            </div>
                            <div className="inner-card-child inner-card-child-center">
                                <h5>100%</h5>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="inner-card-child">
                                <h5>Awarded</h5>
                                <p>Best Solutions</p>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-12">
                   <div className="Home-one-Our-Expertise-main-card">
                    
                    <div className="Home-one-Our-Expertise-card-cont-wrap">
                        <div className="Home-one-Our-Expertise-card-tit-wrap">
                            <img src={ECommerceSolutions} alt="" />
                            <h4>
                            Digital Marketing
                            </h4>
                        </div>

                        <p>Strategic digital marketing campaigns that drive traffic, engagement, and conversions. Elevate your brand's online presence with our data-driven approach.</p>

                        <div className="Home-one-Our-Expertise-inner-card">
                            <div className="inner-card-child">
                                <h5>$1 Million</h5>
                                <p>Revenue Generated</p>
                            </div>
                            <div className="inner-card-child inner-card-child-center">
                                <h5>150%</h5>
                                <p>Marketing Excellence</p>
                            </div>
                            <div className="inner-card-child">
                                <h5>Awarded</h5>
                                <p>Diverse Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="Home-one-Our-Expertise-main-img">
                        <img src={DigitalMarketing} alt="" />
                    </div>
                   </div>
                </div>
                <div className="col-12">
                   <div className="Home-one-Our-Expertise-main-card">
                    <div className="Home-one-Our-Expertise-main-img">
                        <img src={MobileAppDevelopment} alt="" />
                    </div>
                    <div className="Home-one-Our-Expertise-card-cont-wrap">
                        <div className="Home-one-Our-Expertise-card-tit-wrap">
                            <img src={ECommerceSolutions} alt="" />
                            <h4>
                            Mobile App Development
                            </h4>
                        </div>

                        <p>Innovative mobile app development solutions for iOS and Android platforms. Engage your audience with feature-rich applications.</p>

                        <div className="Home-one-Our-Expertise-inner-card">
                            <div className="inner-card-child">
                                <h5>200+</h5>
                                <p>Custom Development</p>
                            </div>
                            <div className="inner-card-child inner-card-child-center">
                                <h5>100+</h5>
                                <p>Fortune Clients</p>
                            </div>
                            <div className="inner-card-child">
                                <h5>Awarded</h5>
                                <p>Best App Dev Firm</p>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-12">
                   <div className="Home-one-Our-Expertise-main-card">
                    
                    <div className="Home-one-Our-Expertise-card-cont-wrap">
                        <div className="Home-one-Our-Expertise-card-tit-wrap">
                            <img src={ECommerceSolutions} alt="" />
                            <h4>
                            Content Strategy
                            </h4>
                        </div>

                        <p>Strategic content planning and creation tailored to your target audience and business goals. Build and drive engagement.</p>

                        <div className="Home-one-Our-Expertise-inner-card">
                            <div className="inner-card-child">
                                <h5>+ 40%</h5>
                                <p>Organic Traffic</p>
                            </div>
                            <div className="inner-card-child inner-card-child-center">
                                <h5>100+</h5>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="inner-card-child">
                                <h5>Awarded</h5>
                                <p>Content Excellence</p>
                            </div>
                        </div>
                    </div>
                    <div className="Home-one-Our-Expertise-main-img">
                        <img src={ContentStrategy} alt="" />
                    </div>
                   </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default OurExpertise