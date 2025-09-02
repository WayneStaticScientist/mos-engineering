import React from "react";

export default function Header() {
  return (
    <>
      <>
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
        <div className="popup-search-box d-none d-lg-block">
          <button className="searchClose">
            <i className="fal fa-times" />
          </button>
          <form action="#">
            <input type="text" placeholder="What are you looking for?" />
            <button type="submit">
              <i className="fal fa-search" />
            </button>
          </form>
        </div>
        <div className="th-menu-wrapper">
          <div className="th-menu-area text-center">
            <button className="th-menu-toggle">
              <i className="fal fa-times" />
            </button>
            <div className="mobile-logo">
              <a href="home-solar-energy.html">
                <img src="assets/img/logo.svg" alt="Solak " />
              </a>
            </div>
            <div className="th-mobile-menu">
              <ul>
                <li className="menu-item-has-children">
                  <a href="home-solar-energy.html">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="home-solar-energy.html">Home Solar Energy</a>
                    </li>
                    <li>
                      <a href="home-renewable-energy.html">
                        Home Renewable Energy
                      </a>
                    </li>
                    <li>
                      <a href="home-wind-energy.html">Home Wind Energy</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="appointment.html">Appointment</a>
                    </li>
                    <li>
                      <a href="pricing.html">Price Table</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Testimonial</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="error.html">Error Page</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Service</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service.html">Services - Style 1</a>
                    </li>
                    <li>
                      <a href="service-2.html">Services - Style 2</a>
                    </li>
                    <li>
                      <a href="service-3.html">Services - Style 3</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Project</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="project.html">Project Style 1</a>
                    </li>
                    <li>
                      <a href="project-2.html">Project Style 2</a>
                    </li>
                    <li>
                      <a href="project-3.html">Project Style 3</a>
                    </li>
                    <li>
                      <a href="project-4.html">Project Style 4</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>

      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-md-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-light fa-clock" />
                      <span>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</span>
                    </li>
                    <li className="">
                      <i className="fa-sharp fa-regular fa-location-dot" />
                      <span>12 Division Park, SKY 12546. Berlin</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope" />
                      <a href="mailto:help@solak.com">help@solak.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="social-links">
                  <span className="social-title">Follow Us On:</span>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container-fiuld">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="home-solar-energy.html">
                      <img src="assets/img/logo.svg" alt="Solak " />
                    </a>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="home-solar-energy.html">Home</a>
                        <ul className="mega-menu mega-menu-content allow-natural-scroll">
                          <li>
                            <div className="container">
                              <div className="row gy-4">
                                <div className="col-lg-4">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="assets/img/pages/home-solar-energy.jpg"
                                        alt="Home One"
                                      />
                                      <div className="btn-wrap">
                                        <a
                                          href="home-solar-energy.html"
                                          className="th-btn"
                                        >
                                          View Demo
                                        </a>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <a href="home-solar-energy.html">
                                        Home Solar Energy
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="assets/img/pages/home-renewable-energy.jpg"
                                        alt="Home Two"
                                      />
                                      <div className="btn-wrap">
                                        <a
                                          href="home-renewable-energy.html"
                                          className="th-btn"
                                        >
                                          View Demo
                                        </a>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <a href="home-renewable-energy.html">
                                        Home Renewable Energy
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="assets/img/pages/home-wind-energy.jpg"
                                        alt="Home Three"
                                      />
                                      <div className="btn-wrap">
                                        <a
                                          href="home-wind-energy.html"
                                          className="th-btn"
                                        >
                                          View Demo
                                        </a>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <a href="home-wind-energy.html">
                                        Home Wind Energy
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="appointment.html">Appointment</a>
                          </li>
                          <li>
                            <a href="pricing.html">Price Table</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Services - Style 1</a>
                          </li>
                          <li>
                            <a href="service-2.html">Services - Style 2</a>
                          </li>
                          <li>
                            <a href="service-3.html">Services - Style 3</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Project</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="project.html">Project Style 1</a>
                          </li>
                          <li>
                            <a href="project-2.html">Project Style 2</a>
                          </li>
                          <li>
                            <a href="project-3.html">Project Style 3</a>
                          </li>
                          <li>
                            <a href="project-4.html">Project Style 4</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="header-button">
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button type="button" className="icon-btn searchBoxToggler">
                      <i className="far fa-search" />
                    </button>
                    <a
                      href="#"
                      className="icon-btn sideMenuToggler d-none d-lg-block"
                    >
                      <img src="assets/img/icon/grid.svg" alt="" />
                    </a>
                    <a href="tel:+25862323258" className="th-btn th-icon">
                      <span
                        className="btn-text"
                        data-back="Call For Help Us: +258 6232 3258 "
                        data-front="Call For Help Us: +258 6232 3258"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg"
              data-mask-src="assets/img/logo_bg_mask.png"
            />
          </div>
        </div>
      </header>
    </>
  );
}
