import React from 'react'
import { Link } from 'react-router-dom'

import Icon404 from "../../assets/404/404.svg"

const Page404Sec = () => {
  return (
    <>
    <section className="Page-404-body-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="Page-404-body-cont-warper">
                        <span className="common-mini-tit">
                            <img src={Icon404} alt="" />
                            Page Not Found
                        </span>

                        <h1 className="Page-404-body-main-tit">
                        404
                        </h1>

                        <p>We can’t seem to find the page you are looking for !</p>

                        <Link className="primary-btn" to="/">
                        Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Page404Sec