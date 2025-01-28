import React from 'react'
import Img1 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img1.png"
import Img2 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img2.png"
import Img3 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img3.png"
import Img4 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img4.png"
import Img5 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img5.png"
import Img6 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img6.png"
import Img7 from "../../assets/AboutusPage/LetsMakeItHappenImgs/career-img7.png"

import Logo from "../../assets/AboutusPage/LetsMakeItHappenImgs/big-logo.svg"

const LetsMakeItHappen = () => {
  return (
    <>
    <section className="Lets-Make-It-Happen-sec">
        <div className="Lets-Make-It-Happen-tit-wrap">
            <h2 className="Lets-Make-It-Happen-main-tit">
            Let’s Make It Happen
            </h2>
            <p>
            Explore exciting career opportunities and become part of our innovative and dynamic team.
            </p>
        </div>
        <div className="container">
            <div className="row">
                     <div className="col-lg-12">
                        <div className="Lets-Make-It-Happen-custom-grid">
                            <div className="Lets-Make-It-Happen-custom-grid-col">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="Lets-Make-It-Happen-custom-grid-col">
                            <img src={Img2} alt="" />
                            <img src={Img3} alt="" />
                            </div>
                            <div className="Lets-Make-It-Happen-custom-grid-col">
                            <img src={Img4} alt="" />

                            <div className="Lets-Make-It-Happen-logo">
                                <img src={Logo} alt="" />
                            </div>
                            </div>
                            <div className="Lets-Make-It-Happen-custom-grid-col">
                            <img src={Img5} alt="" />
                            <img src={Img6} alt="" />
                            </div>
                            <div className="Lets-Make-It-Happen-custom-grid-col">
                            <img src={Img7} alt="" />
                            </div>
                        </div>
                     </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LetsMakeItHappen