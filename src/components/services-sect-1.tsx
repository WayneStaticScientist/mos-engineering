import React from "react";

export default function ServicesCardList() {
  return (
    <div className="position-relative overflow-hidden space-top">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {/* Card 1: Industrial Automation & PLCs */}
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img
                  src="/assets/img/icon/feature_1_1.svg"
                  alt="Automation Icon"
                />
              </div>
              <h3 className="box-title">
                <a href="#">Industrial Automation & PLCs</a>
              </h3>
              <p className="box-text">
                Specializing in PLC, HMI, and SCADA systems, we handle all
                aspects of automation. Our services include troubleshooting,
                maintenance, custom wiring, programming, and commissioning to
                optimize your industrial processes.
              </p>
            </div>
          </div>

          {/* Card 2: Solar & Electrical Services */}
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img
                  src="/assets/img/icon/feature_1_2.svg"
                  alt="Solar & Electrical Icon"
                />
              </div>
              <h3 className="box-title">
                <a href="#">Solar & Electrical Services</a>
              </h3>
              <p className="box-text">
                From full solar installations to general electrical engineering,
                we provide comprehensive solutions. Our expertise covers
                electrical maintenance, cable termination, and solar system
                maintenance to ensure reliable power for your business or home.
              </p>
            </div>
          </div>

          {/* Card 3: Mining & Industrial Supplies */}
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img
                  src="/assets/img/icon/feature_1_3.svg"
                  alt="Supplies Icon"
                />
              </div>
              <h3 className="box-title">
                <a href="#">Mining & Industrial Supplies</a>
              </h3>
              <p className="box-text">
                We supply a wide range of industrial and mining products. As an
                added benefit, clients who purchase our products are eligible
                for discounted installation services, making your setup process
                smooth and cost-effective.
              </p>
            </div>
          </div>

          {/* Card 4: Maintenance & Commissioning */}
          <div className="col-md-6 col-xl-3">
            <div className="feature-card th-ani">
              <div className="box-icon">
                <img
                  src="/assets/img/icon/feature_1_4.svg"
                  alt="Maintenance Icon"
                />
              </div>
              <h3 className="box-title">
                <a href="#">Maintenance & Commissioning</a>
              </h3>
              <p className="box-text">
                Our team provides thorough maintenance and commissioning
                services for all systems we install. This includes regular
                check-ups, fault diagnosis, and system optimization to ensure
                peak performance and longevity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
