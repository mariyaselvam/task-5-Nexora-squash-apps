import React from 'react'
import { WhatourClientssayAboutUsOne } from "../../content/data"

const TestimonialsSec = () => {
  return (
    <>
     <section className="home-one-testimonials-sec">
        <div className="home-one-testimonials-tit-wrap">
            <h3 className="home-one-testimonials-main-tit">
            What our Clients say About Us
            </h3>
            <p>Read testimonials from satisfied clients, sharing their experiences and successes with our services and solutions.</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div class="carousel animated">
                    <div class="group animated">
                        {
                            WhatourClientssayAboutUsOne.map((item, index) => (
                                <div key={index} class="card">
                                <div className="testimonial-card-wrap">
                                        <div className="testimonial-card-top">
                                            <div className="testimonial-card-profile-img">
                                                <img src={item.testimoImg} alt="" />
                                            </div>
                                            <div className="testimonial-card-profile-detail">
                                                <h4>{item.testimoName}</h4>
                                                <img src={item.testimoRatingsImg} alt="" />
                                            </div>
                                        </div>
        
                                        <p>{item.testmoPara}</p>
                                </div>
                                </div>
                            ))
                        }
                </div>
                <div aria-hidden="true" class="group animated">
                {
                            WhatourClientssayAboutUsOne.map((item, index) => (
                                <div key={index} class="card">
                                <div className="testimonial-card-wrap">
                                        <div className="testimonial-card-top">
                                            <div className="testimonial-card-profile-img">
                                                <img src={item.testimoImg} alt="" />
                                            </div>
                                            <div className="testimonial-card-profile-detail">
                                                <h4>{item.testimoName}</h4>
                                                <img src={item.testimoRatingsImg} alt="" />
                                            </div>
                                        </div>
        
                                        <p>{item.testmoPara}</p>
                                </div>
                                </div>
                            ))
                        }
                </div>
            </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div class="carousel animated">
                    <div aria-hidden="true" class="group animatedOne">
                    {
                            WhatourClientssayAboutUsOne.map((item, index) => (
                                <div key={index} class="card">
                                <div className="testimonial-card-wrap">
                                        <div className="testimonial-card-top">
                                            <div className="testimonial-card-profile-img">
                                                <img src={item.testimoImg} alt="" />
                                            </div>
                                            <div className="testimonial-card-profile-detail">
                                                <h4>{item.testimoName}</h4>
                                                <img src={item.testimoRatingsImg} alt="" />
                                            </div>
                                        </div>
        
                                        <p>{item.testmoPara}</p>
                                </div>
                                </div>
                            ))
                        }
                   </div>
                   <div  class="group animatedOne">
                   {
                            WhatourClientssayAboutUsOne.map((item, index) => (
                                <div key={index} class="card">
                                <div className="testimonial-card-wrap">
                                        <div className="testimonial-card-top">
                                            <div className="testimonial-card-profile-img">
                                                <img src={item.testimoImg} alt="" />
                                            </div>
                                            <div className="testimonial-card-profile-detail">
                                                <h4>{item.testimoName}</h4>
                                                <img src={item.testimoRatingsImg} alt="" />
                                            </div>
                                        </div>
        
                                        <p>{item.testmoPara}</p>
                                </div>
                                </div>
                            ))
                        }
                </div>
            </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default TestimonialsSec