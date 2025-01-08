import WhoWeAreMainImg from "../../assets/HomeOne/WhoWeAreSec/image.png"

const WhoWeAre = () => {
  return (
    <>
    <section className="home-one-who-we-are-sec">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6">
                   <div className="home-one-who-we-are-cont-wrap">
                     <h3 className="home-one-who-we-are-main-tit">
                     Driven By Creativity and Passion
                     </h3>

                     <p className="home-one-who-we-are-para">At Nexora, we combine creativity and technology to deliver outstanding digital solutions. Our team of experts specializes in web design, branding, digital marketing, and more to help your business thrive.</p>

                     <div className="team-members-client-projets">
                        <div className="team-mem">
                            <span className="who-we-are-num">6K+</span>
                            <span>Team Member</span>
                        </div>
                        <div className="client-review">
                            <span className="who-we-are-num">50+</span>
                            <span>Client Review</span>
                        </div>
                        <div className="Complete-Project">
                            <span className="who-we-are-num">10+</span>
                            <span>Complete Project</span>
                        </div>
                     </div>
                   </div>
                </div>
                <div className="col-xxl-6">
                         <div className="who-we-are-main-img">
                            <span className="who-we-are-main-img-box-1"></span>
                            <span className="who-we-are-main-img-box-2"></span>
                            <img src={WhoWeAreMainImg} alt="" />
                         </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default WhoWeAre