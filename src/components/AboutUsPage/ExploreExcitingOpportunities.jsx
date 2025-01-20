import React from 'react'
import { ExploreExcitingOpportunitiesData } from '../../content/data'

import arrow from "../../assets/HomeOne/NexoraBlogHub/arrow-up.svg"
import { Link } from 'react-router-dom'

const ExploreExcitingOpportunities = () => {
  return (
    <>
    <section className="Explore-Exciting-Opportunities-sec">
        <div className="Explore-Exciting-Opportunities-tit-wrap">
            <h3 className="Explore-Exciting-Opportunities-main-tit">
            Explore Exciting Opportunities
            </h3>

            <p>Join our team of digital experts and be part of a dynamic agency dedicated to innovation and excellence.</p>
        </div>
        <div className="container">
            <div className="Explore-Exciting-Opportunities-inner-sec-wrap">
            <div className="row">
                {
                    ExploreExcitingOpportunitiesData.map((items , index) => (
                        <div className="col-lg-6">
                            <div className="Explore-Exciting-Opportunities-card">
                                <h4 className="Explore-Exciting-Opportunities-card-tit">
                                    <Link to="#">
                                    {items.role}
                                    </Link>
                                </h4>

                                <p>{items.type}</p>

                              <div className="Explore-Exciting-Opportunities-card-icon">
                               <Link to="#">
                                <img src={arrow } alt="" />
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className="careers-email-link">Couldn’t find the desired role, Send your resume to <Link to="">careers@nexora.co</Link></p>

            </div>
        </div>
    </section>
    </>
  )
}

export default ExploreExcitingOpportunities