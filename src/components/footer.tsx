import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="footer-wrapper bg-title footer-layout1"
        data-bg-src="assets/img/bg/dot-shape.png"
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a className="" href="index.html">
                        <img src="assets/img/logo.svg" alt="Solak " />
                      </a>
                    </div>
                    <p className="about-text">
                      Solar energy is renewable and inexhaustible, making it a
                      sustainable solution for meeting energy demands. energy
                      usage to design the ideal solar solution for your
                      property.
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="service.html">Services</a>
                      </li>
                      <li>
                        <a href="project.html">projects</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Our Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="service.html">Renewable Energy</a>
                      </li>
                      <li>
                        <a href="service.html">Wind Generator</a>
                      </li>
                      <li>
                        <a href="service.html">Solar Energy</a>
                      </li>
                      <li>
                        <a href="service.html">Hydropower Energy</a>
                      </li>
                      <li>
                        <a href="service.html">Eco Maintenance</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="th-widget-about">
                    <h4 className="footer-info-title">Address Location</h4>
                    <p className="footer-info">
                      <i className="fas fa-map-marker-alt" />
                      Orlando City, USA
                    </p>
                    <h4 className="footer-info-title">Phone Number</h4>
                    <p className="footer-info">
                      <i className="fa-sharp fa-solid fa-phone" />
                      <span>
                        <a className="text-inherit" href="tel:+19524357106">
                          +1 952-435-7106
                        </a>
                      </span>
                    </p>
                    <h4 className="footer-info-title">Email address</h4>
                    <p className="footer-info">
                      <i className="fa-sharp fa-solid fa-envelope" />
                      <span>
                        <a
                          className="text-inherit"
                          href="mailto:info@solak.com"
                        >
                          info@solak.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-2-1.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="blog.html">2 March, 2025</a>
                        </div>
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Metal Roofing The Best for Solar Panels
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-2-2.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="blog.html">3 March, 2025</a>
                        </div>
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Metal Roofing The Best for Solar Panels
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center">
          <p className="copyright-text">
            Copyright <i className="fal fa-copyright" /> 2025
            <a href="https://themeforest.net/user/themeholy">Solak </a>. All
            Rights Reserved.
          </p>
        </div>
      </footer>
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </>
  );
}
