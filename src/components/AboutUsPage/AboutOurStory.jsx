import React from 'react'
import { OverTheYearsCont } from '../../content/data' 

const AboutOurStory = () => {
  return (
    <>
     <section className="About-Our-Story-sec">
        <div className="About-Our-Story-tit-wrap">
            <h3 className="About-Our-Story-main-tit">
            Over The Years
            </h3>

            <p>Nexora has evolved from a small, ambitious team to a globally recognized agency redefining digital experiences.</p>
        </div>
        <div className="container">
            <div className="row">
                 {
                    OverTheYearsCont.map((items , index) => (
                        <div key={index} className="col-lg-4 col-md-6">
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