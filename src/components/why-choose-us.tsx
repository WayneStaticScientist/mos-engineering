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
                  Your Reliable Partner for Industrial Solutions
                </h2>
              </div>
              <p className="mt-n2 mb-35">
                We bring a wealth of technical expertise and hands-on experience
                to every project. Our team is dedicated to providing tailored
                solutions that meet your specific industrial and mining needs,
                ensuring efficiency, safety, and long-term reliability.
              </p>
              <div className="about-feature-wrap">
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="/assets/img/icon/about_1_1.svg" alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Seasoned Industry Experts</h3>
                    <p className="box-text">
                      Our professionals are highly skilled and have extensive
                      backgrounds in electrical engineering, automation, and
                      mining operations. We understand the unique challenges of
                      the industry and deliver practical, effective solutions.
                    </p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="/assets/img/icon/about_1_2.svg" alt="Icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">Reliable Customer Support</h3>
                    <p className="box-text">
                      We pride ourselves on being accessible and responsive. Our
                      team is committed to providing excellent support and
                      service, ensuring your operations run smoothly with
                      minimal downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 mb-30 mb-xl-0">
            <div className="img-box2 pe-xl-5 me-xl-2">
              <div className="img1 th-parallax">
                <img src="/assets/img/normal/about_1_2.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
