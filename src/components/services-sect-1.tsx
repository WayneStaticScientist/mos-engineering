import React from "react";

export default function ServicesCardList() {
  return (
    <div className="position-relative overflow-hidden space-top">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img src="assets/img/icon/feature_1_1.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Energy Solutions</a>
              </h3>
              <p className="box-text">
                Solar panels with PV cells convert sunlight directly into
                electricity. PV panels are often installed on rooftops, in solar
                farms.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img src="assets/img/icon/feature_1_2.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Global Expertise</a>
              </h3>
              <p className="box-text">
                Global expertise" refers to having a broad, in-depth
                understanding, knowledge, and proficiency in a particular field
                or subject
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img src="assets/img/icon/feature_1_3.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Home Appliance</a>
              </h3>
              <p className="box-text">
                A home appliance refers to any electrical or mechanical device
                that assists in household tasks making daily life more
                convenient
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img src="assets/img/icon/feature_1_4.svg" alt="Icon" />
              </div>
              <h3 className="box-title">
                <a href="service-details.html">Easy Installation</a>
              </h3>
              <p className="box-text">
                Easy installation refers to the process of setting up or
                assembling a product, system, or device with minimal the effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
