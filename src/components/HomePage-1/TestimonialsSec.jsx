import { WhatourClientssayAboutUsOne } from "../../content/data";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";

import Book from "../../assets/common/MiniTitIcons/book.svg"

const TestimonialsSec = () => {
  return (
    <>
      <section className="home-one-testimonials-sec">
        <div className="home-one-testimonials-tit-wrap">
          <span className="common-mini-tit">
            <img src={Book} alt="" />
            Testimonials
          </span>
          <h2 className="home-one-testimonials-main-tit">
            What our Clients say About Us
          </h2>
          <p>
            Read testimonials from satisfied clients, sharing their experiences
            and successes with our services and solutions.
          </p>
        </div>

        <div className="container">
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
              {WhatourClientssayAboutUsOne.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="testimonial-card-wrap">
                      <div
                        style={{ flexDirection: "row" }}
                        className="testimonial-card-top"
                      >
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
                </SwiperSlide>
              ))}
              {WhatourClientssayAboutUsOne.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="testimonial-card-wrap">
                      <div
                        style={{ flexDirection: "row" }}
                        className="testimonial-card-top"
                      >
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="container">
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
              dir="rtl"
            >
              {WhatourClientssayAboutUsOne.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="testimonial-card-wrap">
                      <div
                        style={{ flexDirection: "row-reverse" }}
                        className="testimonial-card-top"
                      >
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
                </SwiperSlide>
              ))}
              {WhatourClientssayAboutUsOne.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card">
                    <div className="testimonial-card-wrap">
                      <div
                        style={{ flexDirection: "row-reverse" }}
                        className="testimonial-card-top"
                      >
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSec;
