import React from 'react'
import { NexoraBlogHubData } from "../../content/data"

import Arrow from "../../assets/HomeOne/NexoraBlogHub/arrow-up.svg"
import ArrowUP from "../../assets/HomeOne/NexoraBlogHub/arrow--up.svg"
import { Link } from 'react-router-dom'

import Book from "../../assets/common/MiniTitIcons/book.svg"


const NexoraBlogHub = () => {
  return (
    <>
    <section className="Home-One-Nexora-Blog-Hub-sec">
        <div className="Home-One-Nexora-Blog-Hub-tit-wrap">
            <span className="common-mini-tit">
                <img src={Book} alt="" />
                Blogs
            </span>
        <h2 className="Home-One-Nexora-Blog-Hub-main-tit">
        Nexora Blog Hub
        </h2>
        <p>At Nexora, we're passionate about sharing insights, tips, and trends to help you navigate the ever-evolving world of digital marketing and web development.</p>
        </div>
        <div className="container">
            <div className="row">
                   {
                    NexoraBlogHubData.map((item , index) => (
                        <div key={index} className="col-xl-4 col-md-6 col-sm-12">
                        <div className="Home-One-Nexora-Blog-listing-card">
                            <div className="Nexora-Blog-listing-card-main-img">
                               <Link to="/blog-detail">
                                <img src={item.CardMainImg} alt="" />
                                </Link>
                            </div>
                            <div className="Nexora-Blog-listing-card-cont-wrap">
                                <p className="Blog-listing-card-date">
                                    {item.data}
                                </p>
                                <h4 className="Blog-listing-card-tit">
                                    <Link to="/blog-detail">
                                    {item.tit}
                                    </Link>
                                </h4>

                                <p className="Blog-listing-card-para">{item.para}</p>

                                <div className="blog-author-details">
                                    <div className="blog-author-img">
                                         <Link to="#">
                                         <img src={item.authorImg} alt="" />
                                         </Link>
                                    </div>
                                    <div className="blog-author-content">
                                    <h6 className="blog-author-name">
                                        <Link to="#">
                                        {item.authorName}
                                        </Link>
                                    </h6>
                                    <p > 
                                        {item.authorOpsition}
                                    </p>
                                    </div>
                                    <Link to="/blog-detail" className="blog-detail-page-link">
                                        <img src={Arrow} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                   }
            </div>
        </div>
        <Link className="Nexora-Blog-listing-btn secondary-btn" to="/blog-listing">
        View All Blogs
        <img src={ArrowUP} alt="" />
        </Link>
    </section>
    </>
  )
}

export default NexoraBlogHub