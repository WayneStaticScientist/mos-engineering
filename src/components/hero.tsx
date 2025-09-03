import { HeroSliderContent } from "@/lib/tools-hero-slider";
import React from "react";

export default function HeroSection() {
  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <div
        className="swiper th-slider hero-slider-1"
        id="heroSlide1"
        data-slider-options='{"effect":"fade"}'
      >
        <div className="swiper-wrapper">
          {HeroSliderContent.map((node, index) => (
            <div className="swiper-slide" key={index}>
              <div className="hero-inner">
                <div className="th-hero-bg" data-bg-src={node.image}>
                  <div
                    className="hero-shape-1"
                    data-ani="slideinleft"
                    data-ani-delay="0.7s"
                  >
                    <img src="/assets/img/bg/hero_overlay_1.png" alt="" />
                  </div>
                </div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      {node.message}
                    </span>
                    <h3
                      className="hero-title tw:text-6xl!"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                    >
                      {node.title}
                    </h3>
                    <div
                      className="btn-group justify-content-lg-start justify-content-center"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a href="/" className="th-btn style1 th-icon">
                        <span
                          className="btn-text"
                          data-back="Become A member"
                          data-front="Become A member"
                        />
                        <i className="fa-regular fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          data-slider-prev="#heroSlide"
          className="slider-arrow slider-prev"
        >
          <i className="far fa-arrow-left" />
        </button>
        <button
          data-slider-next="#heroSlide"
          className="slider-arrow slider-next"
        >
          <i className="far fa-arrow-right" />
        </button>
      </div>
      <div className="hero-over-image">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-5 col-lg-4">
              <div className="hero-image global-img">
                <img src="assets/img/hero/hero-img-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="hero1-item">
                <div className="box-icon">
                  <img src="assets/img/icon/doller.svg" alt="" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">Cost Savings</h3>
                  <p className="box-text">
                    Over time, solar energy can significantly lower electricity
                    bills and, in some cases, allow users to sell excess power
                    back to the grid.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="hero-image global-img">
                <img src="assets/img/hero/hero-img-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
