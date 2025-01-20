import React from 'react'

import { Link  } from 'react-router-dom'

import {GetinTouchwithUsData} from "../../content/data"

import Arrow from "../../assets/HomeOne/NexoraBlogHub/arrow-up.svg" 

const ContactUs = () => {
  return (
    <>
     <section className="contact-us-Get-in-Touch-with-Us-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-us-Get-in-Touch-with-Us-cont-wrap">
                        <h3 className="contact-us-Get-in-Touch-with-Us-main-tit">
                        Get in Touch with Us
                        </h3>

                        <p>Have a question or need more information about our services? Fill out the form, and our team will get back to you as soon as possible.</p>

                        {
                            GetinTouchwithUsData.map((items , index) => (
                         <div className="contact-us-Get-in-Touch-with-Us-card">
                            <div className="contact-us-Get-in-Touch-with-Us-card-iocn">
                                <img src={items.icon} alt="" />
                            </div>

                          <div>
                            <p> {items.para} </p>
                            <h4> {items.tit} </h4>
                        </div>

                            <Link className="arrow-icon">
                            <img src={Arrow} alt="" />
                            </Link>
                         </div>
                            ))
                        }

                        
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default ContactUs