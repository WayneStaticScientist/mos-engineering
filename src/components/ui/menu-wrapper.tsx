import React from "react";

export default function MenuWrapper() {
  return (
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
                  <a href="home-renewable-energy.html">Home Renewable Energy</a>
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
  );
}
