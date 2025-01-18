
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselImg from "../../assets/AboutusPage/about-page-carosal.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const AboutUsPageBanner = () => {
  return (
    <>
     <section className="about-us-page-banner-sec">
        <div className="container">
            <div className="row">
                <div className="about-us-page-banner-cont-wrap">
                <h1 className="about-us-page-banner-main-tit">Trusted Partner for Your Digital Growth</h1>

                <p>At Nexora, we are more than just a digital agency - we are your partners in success, dedicated to empowering businesses to thrive in the digital age.</p>
                </div>

                <div className="about-us-page-banner-img-carosal-wrap">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className="about-carosal-img">
                            <img src={CarouselImg} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="about-carosal-img">
                            <img src={CarouselImg} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="about-carosal-img">
                            <img src={CarouselImg} alt="" />
                        </div>
                    </SwiperSlide>
                 </Swiper>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default AboutUsPageBanner