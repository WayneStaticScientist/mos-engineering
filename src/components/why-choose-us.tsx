import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="about-area space" id="about-sec">
      <div className="container">
        <div className="row gy-5 flex-row-reverse">
          <div className="col-xl-5">
            <div className="pe-xxl-4 me-xl-3">
              <div className="title-area mb-30">
                <span className="sub-title">Why Choose Us</span>
                <h2 className="sec-title">
                  Our Solar Solutions Reach 100% Renewable
                </h2>
              </div>
              <p className="mt-n2 mb-35">
                We offer flexible financing options and guidance on government
                incentives and tax credits. Our team helps make solar energy
                affordable for everyone, ensuring you get the best value and
                maximize your investment in clean energy.
              </p>
              <div className="about-feature-wrap">
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="assets/img/icon/about_1_1.svg" alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Professional Solar Expert</h3>
                    <p className="box-text">
                      Solar panels, also referred to as solar modules, are made
                      up of multiple solar cells arranged in a grid. They are
                      installed on rooftops, solar farms, and other suitable.
                    </p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="assets/img/icon/about_1_2.svg" alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">24/7 Customer Support</h3>
                    <p className="box-text">
                      Solar panels, also referred to as solar modules, are made
                      up of multiple solar cells arranged in a grid. They are
                      installed on rooftops, solar farms, and other suitable..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 mb-30 mb-xl-0">
            <div className="img-box2 pe-xl-5 me-xl-2">
              <div className="img1 th-parallax">
                <img src="assets/img/normal/about_1_2.jpg" alt="About" />
              </div>
              <div className="discount-wrapp style2">
                <h2 className="box-counter">
                  <span className="counter-number">36</span>
                </h2>
                <div className="discount-tag">
                  <span className="discount-anime">
                    years of experience in solar enargy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
