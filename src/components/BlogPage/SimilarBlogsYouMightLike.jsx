import React from 'react'
import { SimilarBlogsYouMightLikeData } from '../../content/data'

import { Link } from 'react-router-dom'

// import arrow from ""

import Arrow from "../../assets/HomeOne/NexoraBlogHub/arrow-up.svg"

const SimilarBlogsYouMightLike = () => {
  return (
    <>
     <section className="Similar-Blogs-might-like-sec">
        
        <div className="container">
        <div className="Similar-Blogs-might-like-tit-wraper">
            <h3>Similar Blogs you might like</h3>
        </div>
            <div className="row">
                {
                    SimilarBlogsYouMightLikeData.map((items , index) => (
                        <div key={index} className="col-md-6">
                            <div className="Similar-Blogs-might-like-card">
                    <span className="Similar-Blogs-might-like-mini-tit">
                    Marketing
                    </span>

                   <Link to="#">
                    <h4 className="Similar-Blogs-might-like-main-tit">
                     {items.tit}
                    </h4>
                    </Link>

                    <p>
                        {items.para}
                    </p>

                    <div className="Similar-Blogs-might-like-inner-card">
                        <div className="Similar-Blogs-might-like-profile">
                            <Link to="#">
                            <img src={items.Imgurl} alt="" />
                            </Link>
                        </div>
                        <div className="Similar-Blogs-might-like-inner-cont-wrap">
                            <h5 className="Similar-Blogs-might-like-inner-cont-tit">
                                <Link to="#">
                                {items.name}
                                </Link>
                            </h5>

                            <p>{items.job}</p>
                        </div>

                        <div className="Similar-Blogs-might-like-inner-arrow">
                            <Link to="#">
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
     </section>
    </>
  )
}

export default SimilarBlogsYouMightLike