import React from 'react'
import { AwesomeTeamMembersData } from '../../content/data'
import X from "../../assets/AboutusPage/team-x.svg"
import { Link } from 'react-router-dom'

const AwesomeTeamMembers = () => {
  return (
    <>
    <section className="Awesome-Team-Members-sec">
        <div className="Awesome-Team-Members-tit-wrap">
            <h2 className="Awesome-Team-Members-main-tit">
            Awesome Team Members
            </h2>

            <p>We are a dedicated group of individuals driven by our shared vision of making a real difference in the world.</p>
        </div>
        <div className="container">
            <div className="row">
                  {
                   AwesomeTeamMembersData.map((items , index) => (
                    <div key={index} className="col-lg-3">
                        <div className="Awesome-Team-Members-card">
                            <div className="Awesome-Team-Members-img">
                            <Link to="#">
                                <img src={items.ImgURL} alt="" />
                                </Link>
                            </div>

                            <div className="Awesome-Team-Members-card-cont-wrap">
                             
                              <Link to="#">
                            <h5 className="Awesome-Team-Members-name">
                                {items.Name}
                            </h5>
                            </Link>

                            <span> {items.Job} </span>

                            <Link to="#">
                            <img src={X} alt="#" />
                            </Link>
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

export default AwesomeTeamMembers