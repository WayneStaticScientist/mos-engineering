import { Constants } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="footer-wrapper bg-title footer-layout1"
        data-bg-src="/assets/img/bg/dot-shape.png"
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <Link className="" href="/">
                        <img
                          src="/assets/img/logo-white.png"
                          alt="Mos-Engineering Logo"
                        />
                      </Link>
                    </div>
                    <p className="about-text tw:text-white!">
                      We specialize in providing robust electrical, automation,
                      and project management solutions for the industrial and
                      mining sectors. Our expertise ensures your operations are
                      safe, efficient, and built for the future.
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
                        <a href="/about" className="tw:text-white!">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="tw:text-white!">
                          Services
                        </a>
                      </li>

                      <li>
                        <a href="/shop" className="tw:text-white!">
                          Shop
                        </a>
                      </li>

                      <li>
                        <a href="/contact" className="tw:text-white!">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto tw:text-white!">
                <div className="widget widget_nav_menu footer-widget tw:text-white!">
                  <h3 className="widget_title">Our Services</h3>
                  <div className="menu-all-pages-container tw:text-white!">
                    <ul className="menu tw:text-white!">
                      <li>
                        <a href="#" className="tw:text-white!">
                          Electrical Solutions
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw:text-white!">
                          Mining Automation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw:text-white!">
                          Industrial Maintenance
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw:text-white!">
                          Safety & Compliance
                        </a>
                      </li>
                      <li>
                        <a href="#" className="tw:text-white!">
                          Project Management
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="th-widget-about">
                    <h4 className="footer-info-title tw:text-white!">
                      Address Location
                    </h4>
                    <p className="footer-info tw:text-white!">
                      <i className="fas fa-map-marker-alt tw:text-white!" />
                      {Constants.ADDRESS}
                    </p>
                    <h4 className="footer-info-title">Phone Number</h4>
                    <p className="footer-info">
                      <i className="fa-sharp fa-solid fa-phone" />
                      <span>
                        <a
                          className="tw:text-white!"
                          href={`${Constants.PHONE_NUMBERS[0]}}`}
                        >
                          {Constants.PHONE_NUMBERS[0]}
                        </a>
                      </span>
                    </p>
                    <h4 className="footer-info-title">Email address</h4>
                    <p className="footer-info">
                      <i className="fa-sharp fa-solid fa-envelope" />
                      <span>
                        <a
                          className="tw:text-white!"
                          href={`mailto:${Constants.EMAIL_ADDRESS}`}
                        >
                          {Constants.EMAIL_ADDRESS}
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  {/* <div className="recent-post-wrap">
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
                          <a href="blog.html">5 September, 2024</a>
                        </div>
                        <h4 className="post-title">
                          <a className="tw:text-white!" href="blog-details.html">
                            The Future of Mining Automation
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
                          <a href="blog.html">12 August, 2024</a>
                        </div>
                        <h4 className="post-title">
                          <a className="tw:text-white!" href="blog-details.html">
                            Best Practices for Industrial Electrical Safety
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center tw:bg-white!">
          <p className="copyright-text tw:text-black!">
            Copyright <i className="fal fa-copyright tw:text-black!" />
            {new Date().getFullYear()}
            <a href="#" className="tw:text-black!">
              Mos-Engineering
            </a>
            . All Rights Reserved.
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
