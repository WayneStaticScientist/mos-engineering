import React from "react";

export default function AboutUs() {
  return (
    <div className="about-area overflow-hidden space-top" id="about-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7">
            <div className="title-area mb-40 text-center">
              <span className="sub-title">
                Mos-Engineering Industrial & Electrical Services
              </span>
              <h2 className="sec-title">
                Delivering Comprehensive Solutions in Automation, Electrical,
                and Solar Engineering.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 align-items-center">
          <div className="col-xl-7 mb-30 mb-xl-0">
            <div className="img-box1">
              <div className="img1 th-parallax">
                <img src="/assets/img/normal/about_1_1.jpg" alt="About" />
              </div>
              <div className="about-wrapp">
                <div className="discount-wrapp">
                  <a href="#" className="play-btn popup-video">
                    <i className="fa-solid fa-play" />
                  </a>
                  <div className="discount-tag">
                    <span className="discount-anime">
                      Mos-Engineering - Your Partner in Industrial Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
              <p className="mb-25">
                Our expertise spans industrial automation, including PLC, HMI,
                and SCADA systems, as well as comprehensive electrical
                engineering and maintenance. We are committed to providing
                top-tier service, from detailed wiring and coding to full system
                commissioning.
              </p>
              <div className="checklist list-two-column mb-20">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Expert Industrial Automation
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Comprehensive Electrical & Solar Services
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Reliable Troubleshooting & Maintenance
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Specialized Mining & Industrial Supplies
                  </li>
                </ul>
              </div>
              <div className="btn-group mt-30 justify-content-start">
                <a href="#" className="th-btn black-btn th-icon">
                  <span
                    className="btn-text"
                    data-back="More About Us"
                    data-front="More About Us"
                  />
                  <i className="fa-regular fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
