import React from "react";

export default function AboutUs() {
  return (
    <div className="about-area overflow-hidden space-top" id="about-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7">
            <div className="title-area mb-40 text-center">
              <span className="sub-title">
                Solak - Solar &amp; Renewable Energy
              </span>
              <h2 className="sec-title">
                We Strive To Lead The way In The Solar Energy Industry.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 align-items-center">
          <div className="col-xl-7 mb-30 mb-xl-0">
            <div className="img-box1">
              <div className="img1 th-parallax">
                <img src="assets/img/normal/about_1_1.jpg" alt="About" />
              </div>
              <div className="about-wrapp">
                <div className="discount-wrapp">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn popup-video"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                  <div className="discount-tag">
                    <span className="discount-anime">
                      solak-solak enargy since in 1996
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
              <p className="mb-25">
                Solar panels with PV cells convert sunlight directly into
                electricity. PV panels are often installed on rooftops, in solar
                farms, and even in smaller portable chargers. When sunlight hits
                the cells.
              </p>
              <div className="checklist list-two-column mb-20">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Clean and Renewable
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Energy Independence
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Low Maintenance
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check" />
                    Solar Scalability
                  </li>
                </ul>
              </div>
              <div className="about-profile">
                <div className="signature">
                  <img src="assets/img/normal/signature.svg" alt="signature" />
                </div>
                <h3 className="box-title">Alines Jannie</h3>
                <p className="box-text">Director of Renewable Group</p>
              </div>
              <div className="btn-group mt-30 justify-content-start">
                <a href="contact.html" className="th-btn black-btn th-icon">
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
