import React from "react";

export default function SideMenuWrapper() {
  return (
    <div className="sidemenu-wrapper d-none d-lg-block">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times" />
        </button>
        <div className="widget footer-widget">
          <h3 className="widget_title">About Company</h3>
          <div className="th-widget-about">
            <p className="about-text">
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered. cost
              effective users via team driven.
            </p>
            <div className="th-social">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://www.whatsapp.com/">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="widget footer-widget">
          <h3 className="widget_title">Recent Posts</h3>
          <div className="recent-post-wrap">
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-1.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fa-sharp fa-solid fa-calendar-days" />
                    21 Feb, 2025
                  </a>
                </div>
                <h4 className="post-title">
                  <a className="text-inherit" href="blog-details.html">
                    Harnessing the Sun The Future of The Solar Power.
                  </a>
                </h4>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-2.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="post-title">
                  <a className="text-inherit" href="blog-details.html">
                    Harnessing the Sun The Future of The Solar Power.
                  </a>
                </h4>
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fa-sharp fa-solid fa-calendar-days" />
                    22 Feb, 2025
                  </a>
                </div>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-3.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="post-title">
                  <a className="text-inherit" href="blog-details.html">
                    Harnessing the Sun The Future of The Solar Power.
                  </a>
                </h4>
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fa-sharp fa-solid fa-calendar-days" />
                    23 Feb, 2025
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
