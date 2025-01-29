import React from 'react'
import { OverTheYearsCont } from '../../content/data' 
import profile2user from "../../assets/common/MiniTitIcons/profile-2user.svg"

const AboutOurStory = () => {
  return (
    <>
     <section className="About-Our-Story-sec">
        <div className="About-Our-Story-tit-wrap">
        <span className="common-mini-tit">
                        <img src={profile2user} alt="" />
                        Our Story
                    </span>
            <h2 className="About-Our-Story-main-tit">
            Over The Years
            </h2>

            <p>Nexora has evolved from a small, ambitious team to a globally recognized agency redefining digital experiences.</p>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                 {
                    OverTheYearsCont.map((items , index) => (
                        <div key={index} className="col-xxl-4 col-xl-6">
                          <div className="About-Our-Story-card">

                            <span className="About-Our-Story-year">{items.year}</span>

                            <h4 className="About-Our-Story-card-tit">{items.tit}</h4>

                            <p>{items.para}</p>

                            </div>
                        </div>
                    ))
                 }
            </div>
        </div>
     </section>
    </>
  )
}

export default AboutOurStory