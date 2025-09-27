import { Constants } from "@/lib/utils";
import React from "react";

export default function LocationForm() {
  return (
    <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title">Our Contact Information</h2>
        </div>
        <div className="row gy-4">
          <div className="col-xl-4 col-md-6">
            <div className="contact-media">
              <div className="icon-btn">
                <i className="fa-sharp fa-light fa-location-dot" />
              </div>
              <div className="media-body">
                <h5 className="box-title">Our Address</h5>
                <p className="box-text">{Constants.ADDRESS}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="contact-media">
              <div className="icon-btn">
                <i className="fa-light fa-phone" />
              </div>
              <div className="media-body">
                <h5 className="box-title">Contact Number</h5>
                <p className="box-text">
                  <a href={`tel:${Constants.PHONE_NUMBERS[0]}`}>
                    {Constants.PHONE_NUMBERS[0]}
                  </a>
                  <a href={`tel:${Constants.PHONE_NUMBERS[1]}`}>
                    {Constants.PHONE_NUMBERS[1]}
                  </a>
                  <a href={`mailto:${Constants.EMAIL_ADDRESS}`}>
                    {Constants.EMAIL_ADDRESS}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="contact-media">
              <div className="icon-btn">
                <i className="fa-light fa-clock" />
              </div>
              <div className="media-body">
                <h5 className="box-title">Opening Hour</h5>
                <p className="box-text">Mon - Sun 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
