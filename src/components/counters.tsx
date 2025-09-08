import React from "react";

export default function Counters() {
  return (
    <div className="space-extra2-top space-bottom overflow-hidden">
      <div className="container">
        <div className="counter-card-wrap style3">
          <div className="counter-card">
            <div className="box-icon">
              <img src="assets/img/icon/counter_card_1_1.svg" alt="" />
            </div>
            <h3 className="box-number">
              <span className="counter-number">500</span>+
            </h3>
            <div className="media-body">
              <p className="box-text mb-n1">
                Automation and PLC Projects Completed
              </p>
            </div>
          </div>
          <div className="divider" />
          <div className="counter-card">
            <div className="box-icon">
              <img src="assets/img/icon/counter_card_1_2.svg" alt="" />
            </div>
            <h3 className="box-number">
              <span className="counter-number">1000</span>+
            </h3>
            <div className="media-body">
              <p className="box-text mb-n1">Electrical & Solar Installations</p>
            </div>
          </div>
          <div className="divider" />
          <div className="counter-card">
            <div className="box-icon">
              <img src="assets/img/icon/counter_card_1_3.svg" alt="" />
            </div>
            <h3 className="box-number">
              <span className="counter-number">10</span>+
            </h3>
            <div className="media-body">
              <p className="box-text mb-n1">
                Years of Combined Industry Experience
              </p>
            </div>
          </div>
          <div className="divider" />
        </div>
      </div>
    </div>
  );
}
