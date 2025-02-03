import React from 'react'
import Header from '../components/HomePage-1/Header'
import Footer from '../components/HomePage-1/Footer'
import OurExpertise from '../components/HomePage-1/OurExpertise'
import NexoraBlogHub from '../components/HomePage-1/NexoraBlogHub'
import TestimonialsSec from '../components/HomePage-1/TestimonialsSec'
import FaqSec from '../components/HomePage-1/FaqSec'
import GreenBrandLogosSec from '../components/HomePage-1/GreenBrandLogosSec'
import HomeTwoBannerSec from '../components/HomePage-2/HomeTwoBannerSec'
import HomeTwoWhatSetsUsApart from '../components/HomePage-2/HomeTwoWhatSetsUsApart'
import HomeTwoAboutNexoraDigitalagency from '../components/HomePage-2/HomeTwoAboutNexoraDigitalagency'
import Testswiper from '../components/HomePage-2/Testswiper'
import ContactUs from '../components/ContactUs/ContactUs'


const Pages = () => {
  return (
    <>
    <Header />
    <HomeTwoBannerSec />
    <HomeTwoWhatSetsUsApart />
    <HomeTwoAboutNexoraDigitalagency />
    <GreenBrandLogosSec />
    <OurExpertise />
    <NexoraBlogHub />
    <TestimonialsSec /> 
    {/* <Testswiper /> */}
    {/* <FaqSec /> */}
    <ContactUs />
    <Footer />
    </>
  )
}

export default Pages