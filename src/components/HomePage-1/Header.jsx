import React from 'react'
import Logo from "../../assets/common/Logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <section className="headerOne">
           <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-one-nav-bar-wrap">
                  <div className="header-one-nav-logo">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                  </div>

                  <div className="nav-menu-options">
                    <Link className="nav-list nav-list-active" to="#" >Home</Link>
                    <Link className="nav-list" to="#">Pages</Link>
                    <Link className="nav-list" to="#">Services</Link>
                    <Link className="nav-list" to="#">Blog</Link>
                    <Link className="nav-list" to="#">Support</Link>
                  </div>

                  <div className="nav-btn-wrap">
                    <a href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
           </div>
    </section>
    </>
  )
}

export default Header