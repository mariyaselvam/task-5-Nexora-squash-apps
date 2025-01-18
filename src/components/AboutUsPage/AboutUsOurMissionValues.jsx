import React from 'react'
import { AboutUsOurMissionValuesData } from '../../content/data'

const AboutUsOurMissionValues = () => {
      const firstFiveItems = AboutUsOurMissionValuesData.slice(0, 2);  // First 5 items
      const remainingItems = AboutUsOurMissionValuesData.slice(2);
  return (
    <>
    <section className="About-Us-Our-Mission-Values-sec">
         <div className="About-Us-Our-Mission-Values-tit-wrap">
            <h3 className="About-Us-Our-Mission-Values-min-tit">
            Our Mission & Values
            </h3>
            <p>We are committed to building strong relationships with our customers, partners, and employees, rooted in trust and mutual</p>
         </div>
        <div className="container">
            <div className="row">
             {
              firstFiveItems.map((items , index) => (
                <div className="col-xl-6 col-lg-6">
                  <div className="About-Us-Our-Mission-Values-card">
                    <div className="About-Us-Our-Mission-Values-card-img">
                      <img src={items.iocnURL} alt="" />
 
                     <h4 className="About-Us-Our-Mission-Values-tit">
                      {items.tit}
                     </h4>
                    </div>

                    <p> {items.para} </p>
                  </div>
                </div>
              ))
             }
            </div>
            <div className="row">
             {
              remainingItems.map((items , index) => (
                <div className="col-xl-3 col-lg-6">
                  <div style={{margin:0}} className="About-Us-Our-Mission-Values-card">
                    <div className="About-Us-Our-Mission-Values-card-img">
                      <img src={items.iocnURL} alt="" />
 
                     <h4 className="About-Us-Our-Mission-Values-tit">
                      {items.tit}
                     </h4>
                    </div>

                    <p> {items.para} </p>
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

export default AboutUsOurMissionValues