import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetailNavBar = () => {
  return (
    <>
    <section className="Blog-Detail-Nav-Bar-sec">
        <div className="container">
            <div className="row">
                <div className="Blog-Detail-Nav-wraper">
                    <Link to="/blog-listing" className="text-link-span">
                    Blogs 
                    </Link>

                    <span className="text-arrow-span"> / </span>

                    <span className="text-nav-span"> The Art of Minimalism in Web Design </span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogDetailNavBar