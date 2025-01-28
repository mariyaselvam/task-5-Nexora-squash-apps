import React from 'react'
import Header from '../components/HomePage-1/Header'
import Footer from '../components/HomePage-1/Footer'
import BlogDetailNavBar from '../components/BlogPage/BlogDetailNavBar'
import BlogDetailContentSec from '../components/BlogPage/BlogDetailContentSec'
import SimilarBlogsYouMightLike from '../components/BlogPage/SimilarBlogsYouMightLike'

const BlogDetailPage = () => {
  return (
    <>
    <Header />
    <BlogDetailNavBar />
    <BlogDetailContentSec />
    <SimilarBlogsYouMightLike />
    <Footer />
    </>
  )
}

export default BlogDetailPage