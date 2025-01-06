import React from 'react'
import { WhatSetsUsApartData } from "../../content/data"
import icon1 from "../../assets/HomeOne/WhatSetsUsApart/icon1.svg"
// import icon2 from "../../assets/HomeOne/WhatSetsUsApart/icon2.svg"
// import icon3 from "../../assets/HomeOne/WhatSetsUsApart/icon3.svg"
// import icon4 from "../../assets/HomeOne/WhatSetsUsApart/icon4.svg"
// import icon5 from "../../assets/HomeOne/WhatSetsUsApart/icon5.svg"
// import icon6 from "../../assets/HomeOne/WhatSetsUsApart/icon6.svg"

const WhatSetsUsApart = () => {
  return (
    <>
      <section className="What-Sets-Us-Apart-sec">
      <div className="What-Sets-Us-Apart-main-tit-wrap">
        <h3 className="What-Sets-Us-Apart-main-tit">
        What Sets Us Apart
        </h3>
        <p>Maximize your online potential with our customized and cutting-edgeweb development services.</p>
        </div>
        <div className="container">
            <div className="row">
                { WhatSetsUsApartData.map((item, index) => (
                    <div className="col-md-4">
                <div key={index} className="What-Sets-Us-Apart-card">
                    <div className="What-Sets-Us-Apart-card-img">
                       <img src={item.imgURL} alt="" className="feature-icon" />
                    </div>
                  <h3 className="What-Sets-Us-Apart-title">{item.tit}</h3>
                  <p className="What-Sets-Us-Apart-para">{item.para}</p>
                </div>
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default WhatSetsUsApart