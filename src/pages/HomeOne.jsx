import React from 'react'
import Header from '../components/HomePage-1/Header'
import Footer from '../components/HomePage-1/Footer'
import HomeOneaboutUs from '../components/HomePage-1/HomeOneaboutUs'
import BrandLogosSec from '../components/HomePage-1/BrandLogosSec'
import WhoWeAre from '../components/HomePage-1/WhoWeAre'
import WhatSetsUsApart from '../components/HomePage-1/WhatSetsUsApart'
import OurExpertise from '../components/HomePage-1/OurExpertise'
import NexoraBlogHub from '../components/HomePage-1/NexoraBlogHub'
import FaqSec from '../components/HomePage-1/FaqSec'
import TestimonialsSec from '../components/HomePage-1/TestimonialsSec'

export const HomeOne = () => {
  return (
    <>
    <Header />
    <HomeOneaboutUs />
    <BrandLogosSec />
    <WhoWeAre />
    <WhatSetsUsApart />
    <OurExpertise />
    <NexoraBlogHub />
    <TestimonialsSec /> 
    <FaqSec />
    <Footer />
    </>
  )
}
