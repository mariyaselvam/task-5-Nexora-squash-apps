import React from "react";
import Img1 from "../../assets/BlogPage/blogDetailImg-1.png";
import Img2 from "../../assets/BlogPage/blogDetailImg-2.png";
import { Link } from "react-router-dom";
import X from "../../assets/HomeOne/Footer/x.svg";
import Instagram from "../../assets/HomeOne/Footer/instagram.svg";
import linkedIn from "../../assets/HomeOne/Footer/linked-in.svg";
import BlogAuther from "../../assets/BlogPage/Blog-auther.png";

import Icon404 from "../../assets/BlogPage/magicpen.svg"

const BlogDetailContentSec = () => {
  return (
    <section className="Blog-Detail-Content-Sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="blog-detail-auther-card-wraper">
              <div className="blog-detail-auther-card">
                <div className="blog-detail-auther-card-auther-details">
                  <div className="blog-detail-auther-card-auther-details-img">
                    <img src={BlogAuther} alt="" />
                  </div>
                  <div className="blog-detail-auther-card-auther-details-cont">
                    <h4>Cody Fisher</h4>
                    <p>UI UX Designer</p>
                  </div>
                </div>

                <h3 className="auther-tit-about">About Author</h3>

                <p>
                  Cody Fisher is our data whiz, turning numbers into actionable
                  insights and making lead.
                </p>

                <div className="blog-detail-auther-card-social-links">
                  <Link to="#">
                    <img src={X} alt="" />
                  </Link>
                  <Link to="#">
                    <img src={Instagram} alt="" />
                  </Link>
                  <Link to="#">
                    <img src={linkedIn} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="Blog-Detail-Content-wraper-nd-img">
            <span className="common-mini-tit">
                            <img src={Icon404} alt="" />
                            Marketing
                        </span>

              <h2 className="Blog-Detail-Content-main-tit">
                The Art of Minimalism in Web Design
              </h2>

              <div className="Blog-Detail-Content-img">
                <img src={Img1} alt="" />
              </div>

              <div className="Blog-Detail-Content-Summary-card">
                <h4 className="">Summary</h4>

                <p>
                  Minimalism in web design prioritizes simplicity and
                  functionality, enhancing user experience through clean
                  interfaces and faster load times. Its adaptability across
                  devices and ease of maintenance make it a preferred choice for
                  modern web development.
                </p>
              </div>

              <h2 className="Blog-Detail-Content-main-tit blog-detail-border-top">
                Introduction
              </h2>

              <p>
                Minimalism in web design is a trend that emphasizes simplicity,
                clarity, and functionality. This design philosophy focuses on
                removing unnecessary elements, allowing the content to stand out
                and providing users with an intuitive and enjoyable experience.
              </p>

              <h2 className="Blog-Detail-Content-main-tit">
                The Appeal of Minimalism
              </h2>

              <div className="Blog-Detail-Content-img">
                <img src={Img2} alt="" />
              </div>

              <p>
                One of the key benefits of minimalism is its ability to create a
                clean and uncluttered interface. By stripping away superfluous
                elements, designers can draw attention to what truly matters—be
                it text, images, or calls to action. This not only enhances
                usability but also speeds up load times, as minimal designs
                often require fewer resources. Additionally, minimalism aligns
                well with modern aesthetics, appealing to users who appreciate
                sleek and sophisticated visuals. Another advantage is the
                flexibility it offers across various devices and screen sizes.
                Minimalist designs are inherently more adaptable to different
                viewports, ensuring a consistent and seamless experience for
                users, whether they’re on a desktop, tablet, or smartphone. This
                adaptability is crucial in an era where mobile browsing is
                predominant. Moreover, a minimalist approach can simplify the
                maintenance and scalability of a website, making it easier for
                developers to update and expand the site without compromising
                its design integrity.
              </p>

              <h2 className="Blog-Detail-Content-main-tit">Conclusion</h2>

              <p>
                Embracing minimalism in web design can significantly enhance the
                user experience by focusing on essential elements and
                functionality. This design approach not only improves aesthetics
                but also contributes to better performance and adaptability
                across devices. As digital landscapes continue to evolve,
                minimalism remains a powerful tool for creating effective and
                engaging web designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContentSec;
