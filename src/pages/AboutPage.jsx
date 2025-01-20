import React from 'react'
import Header from '../components/HomePage-1/Header'
import Footer from '../components/HomePage-1/Footer'
import AboutUsPageBanner from '../components/common/AboutUsPageBanner'
import AboutOurStory from '../components/AboutUsPage/AboutOurStory'
import AboutUsOurMissionValues from '../components/AboutUsPage/AboutUsOurMissionValues'
import AwesomeTeamMembers from '../components/AboutUsPage/AwesomeTeamMembers'
import OurCultureEmpoweringExcellence from '../components/AboutUsPage/OurCultureEmpoweringExcellence'
import ExploreExcitingOpportunities from '../components/AboutUsPage/ExploreExcitingOpportunities'
import LetsMakeItHappen from '../components/AboutUsPage/LetsMakeItHappen'

const AboutPage = () => {
  return (
    <>
    <Header />
    <AboutUsPageBanner />
    <AboutOurStory />
    <AboutUsOurMissionValues />
    <AwesomeTeamMembers />
    <OurCultureEmpoweringExcellence />
    <ExploreExcitingOpportunities />
    <LetsMakeItHappen />
    <Footer />
    </>
  )
}

export default AboutPage