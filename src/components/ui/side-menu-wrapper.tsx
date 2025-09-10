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
              We deliver cutting-edge electrical and automation solutions
              tailored for the demanding environments of the industrial and
              mining sectors. Our team is dedicated to optimizing performance,
              ensuring safety, and maximizing operational efficiency.
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
      </div>
    </div>
  );
}
