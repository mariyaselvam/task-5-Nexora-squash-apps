import { WhatourClientssayAboutUsOne } from "../../content/data"
import Profile1 from "../../assets/BlogPage/blog-page-Review-Carousel-img.png"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay } from 'swiper/modules';

const BlogReviewCarousel = () => {
  return (
    <>
    <section className="blog-page-Review-Carousel-sec">
        <div className="container">
            <div className="row">
            <div className="my-swiper carousel">
                    <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true} // Enable looping for continuous scrolling
                    speed={5000} // Control the speed of transition for smoothness
                    autoplay={{
                      delay: 0, // No delay between transitions for continuous scroll
                      disableOnInteraction: false,
                    }}
                    
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    
                    {

                            WhatourClientssayAboutUsOne.map((item, index) => (
                                <SwiperSlide>
                                <div className="blog-page-Review-Carousel-card">
                                    <p>Agency Pro's blogs are exceptionally insightful, offering deep dives into AI.</p>

                                   <div className="blog-page-Review-Carouselca-card-footer">
                                    <div className="blog-page-Review-Carouselca-card-img">
                                        <img src={Profile1} alt="" />
                                    </div>
                                    <div className="blog-page-Review-Carouselca-card-footer-cont">
                                        <h4>James Taylor</h4>
                                        <p>UI UX Designer</p>
                                    </div>
                                   </div>
                                </div>
                                </SwiperSlide>
                            ))
                        }
                  </Swiper>
                  
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogReviewCarousel