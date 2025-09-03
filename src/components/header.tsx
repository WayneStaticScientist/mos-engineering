import React from "react";
import { Constants } from "@/lib/utils";
import SearchMenu from "./ui/search-menu";
import MenuWrapper from "./ui/menu-wrapper";
import SideMenuWrapper from "./ui/side-menu-wrapper";

export default function Header() {
  return (
    <>
      <>
        <SideMenuWrapper />
        <SearchMenu />
        <MenuWrapper />
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
                      <span>Mon - Sun 24hrs</span>
                    </li>
                    <li className="">
                      <i className="fa-sharp fa-regular fa-location-dot" />
                      <span>{Constants.ADDRESS}</span>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope" />
                      <a href={`mailto:${Constants.EMAIL_ADDRESS}`}>
                        {Constants.EMAIL_ADDRESS}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="social-links">
                  <span className="social-title">Follow Us On:</span>
                  <a href={Constants.INSTAGRAM}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href={`mailto:${Constants.EMAIL_ADDRESS}`}>
                    <i className="fab fa-google" />
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
