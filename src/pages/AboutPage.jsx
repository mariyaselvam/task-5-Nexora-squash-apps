import React from 'react'
import Header from '../components/HomePage-1/Header'
import Footer from '../components/HomePage-1/Footer'
import AboutUsPageBanner from '../components/common/AboutUsPageBanner'
import AboutOurStory from '../components/AboutUsPage/AboutOurStory'
import AboutUsOurMissionValues from '../components/AboutUsPage/AboutUsOurMissionValues'
import AwesomeTeamMembers from '../components/AboutUsPage/AwesomeTeamMembers'
import OurCultureEmpoweringExcellence from '../components/AboutUsPage/OurCultureEmpoweringExcellence'

const AboutPage = () => {
  return (
    <>
    <Header />
    <AboutUsPageBanner />
    <AboutOurStory />
    <AboutUsOurMissionValues />
    <AwesomeTeamMembers />
    <OurCultureEmpoweringExcellence />
    <Footer />
    </>
  )
}

export default AboutPage