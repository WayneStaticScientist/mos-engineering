import React from "react";

export default function OurServices() {
  return (
    <>
      <section
        className="overflow-hidden space"
        data-bg-src="/assets/img/bg/service_bg_1.jpg"
      >
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">Our Comprehensive Services</span>
                <h2 className="sec-title">
                  Delivering Expertise in Automation, Electrical, and Industrial
                  Solutions.
                </h2>
              </div>
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    data-slider-prev="#serviceSlide"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button
                    data-slider-next="#serviceSlide"
                    className="slider-arrow default"
                  >
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="serviceSlide"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                {/* Service 1: Industrial Automation */}
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src="assets/img/service/service_overlay_1.jpg"
                    />
                    <div className="box-content">
                      <div className="box-icon">
                        <img src="assets/img/icon/service_1_1.svg" alt="Icon" />
                      </div>
                      <div
                        className="box-img"
                        data-mask-src="assets/img/shape/ser-shape.png"
                      >
                        <img
                          src="assets/img/service/service_1_1.jpg"
                          alt="img"
                        />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          PLC, HMI & SCADA Automation
                        </a>
                      </h3>
                      <p className="box-text">
                        We specialize in **PLC, HMI, and SCADA systems**,
                        providing comprehensive services from **coding and
                        wiring** to **full system commissioning**. We are
                        experts in implementing robust automation solutions.
                      </p>
                      <a
                        href="service.html"
                        className="th-btn border-btn th-icon fw-medium text-uppercase"
                      >
                        <span
                          className="btn-text"
                          data-back="View Details"
                          data-front="View Details"
                        />
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Service 2: Electrical Engineering */}
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src="assets/img/service/service_overlay_2.jpg"
                    />
                    <div className="box-content">
                      <div className="box-icon">
                        <img src="assets/img/icon/service_1_2.svg" alt="Icon" />
                      </div>
                      <div
                        className="box-img"
                        data-mask-src="assets/img/shape/ser-shape.png"
                      >
                        <img
                          src="assets/img/service/service_1_2.jpg"
                          alt="img"
                        />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Electrical Engineering & Maintenance
                        </a>
                      </h3>
                      <p className="box-text">
                        Our services cover all aspects of **electrical
                        engineering**, including **cable termination** and
                        general maintenance. We offer reliable solutions to keep
                        your operations running smoothly and safely.
                      </p>
                      <a
                        href="service.html"
                        className="th-btn border-btn th-icon fw-medium text-uppercase"
                      >
                        <span
                          className="btn-text"
                          data-back="View Details"
                          data-front="View Details"
                        />
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Service 3: Solar & Renewable Energy */}
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src="assets/img/service/service_overlay_3.jpg"
                    />
                    <div className="box-content">
                      <div className="box-icon">
                        <img src="assets/img/icon/service_1_3.svg" alt="Icon" />
                      </div>
                      <div
                        className="box-img"
                        data-mask-src="assets/img/shape/ser-shape.png"
                      >
                        <img
                          src="assets/img/service/service_1_3.jpg"
                          alt="img"
                        />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Solar Installations & Maintenance
                        </a>
                      </h3>
                      <p className="box-text">
                        We provide complete **solar installation** services for
                        both domestic and industrial applications. We also offer
                        **solar maintenance** to ensure your system operates at
                        peak efficiency for years to come.
                      </p>
                      <a
                        href="service.html"
                        className="th-btn border-btn th-icon fw-medium text-uppercase"
                      >
                        <span
                          className="btn-text"
                          data-back="View Details"
                          data-front="View Details"
                        />
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Service 4: Industrial & Mining Supplies */}
                <div className="swiper-slide">
                  <div className="service-card">
                    <div
                      className="service-overlay"
                      data-bg-src="assets/img/service/service_overlay_4.jpg"
                    />
                    <div className="box-content">
                      <div className="box-icon">
                        <img src="assets/img/icon/service_1_4.svg" alt="Icon" />
                      </div>
                      <div
                        className="box-img"
                        data-mask-src="assets/img/shape/ser-shape.png"
                      >
                        <img
                          src="assets/img/service/service_1_4.jpg"
                          alt="img"
                        />
                      </div>
                      <h3 className="box-title">
                        <a href="service-details.html">
                          Mining & Industrial Supplies
                        </a>
                      </h3>
                      <p className="box-text">
                        We are a leading supplier of industrial and mining
                        equipment. When you purchase from us, you get a
                        **discounted installation service**, ensuring seamless
                        integration of your new products.
                      </p>
                      <a
                        href="service.html"
                        className="th-btn border-btn th-icon fw-medium text-uppercase"
                      >
                        <span
                          className="btn-text"
                          data-back="View Details"
                          data-front="View Details"
                        />
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This section remains the same as the context did not provide new info for it. */}
      <section className="bg-theme">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6 cta-item_wrapp">
              <div className="cta-item">
                <div className="box-icon">
                  <img src="assets/img/icon/cta_1_1.svg" alt="" />
                </div>
                <h3 className="box-title">Domestic Installation</h3>
                <p className="box-text">
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems
                  &amp; EV Charging
                </p>
              </div>
            </div>
            <div className="col-lg-6 cta-item_wrapp">
              <div className="cta-item">
                <div className="box-icon">
                  <img src="assets/img/icon/cta_1_2.svg" alt="" />
                </div>
                <h3 className="box-title">Commercial Installation</h3>
                <p className="box-text">
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems
                  &amp; EV Charging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
