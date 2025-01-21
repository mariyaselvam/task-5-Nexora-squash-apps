import React from 'react'
import Header from '../components/HomePage-1/Header'
import Footer from '../components/HomePage-1/Footer'
import NexoraBlogHub from '../components/HomePage-1/NexoraBlogHub'
import BlogPageBanner from '../components/BlogPage/BlogPageBanner'
import BlogReviewCarousel from '../components/BlogPage/BlogReviewCarousel'

const BlogPage = () => {
  return (
    <>
    <div className="blog-listing-page-wraper">
    <Header />
    <BlogPageBanner />
    <BlogReviewCarousel />
    <NexoraBlogHub />
    <Footer />
    </div>
    </>
  )
}

export default BlogPage