import React from "react";
import { BlogBannerHighlightsData } from "../../content/data";

import Book from "../../assets/common/MiniTitIcons/profile-2user.svg";

const BlogPageBanner = () => {
  return (
    <>
      <section className="blog-page-banner-sec">
        <div className="container">
          <div className="row">
            <div className="blog-page-banner-cont-wrap">
              <span className="common-mini-tit">
                <img src={Book} alt="" />
                Blogs
              </span>
              <h2 className="blog-page-banner-main-tit">
                Nexora Insights Your Source for Digital Inspiration
              </h2>

              <p>
                Welcome to Nexora Insights, where we share our expertise, ideas,
                and industry trends to inspire and empower your digital journey.
              </p>
            </div>

            <div className="blog-banner-highlights">
              {BlogBannerHighlightsData.map((items, index) => (
                <div key={index} className="blog-banner-highlights-card">
                  <div className="blog-banner-highlights-count">
                    {items.count}
                  </div>

                  <p className="blog-banner-highlights-para">{items.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPageBanner;
