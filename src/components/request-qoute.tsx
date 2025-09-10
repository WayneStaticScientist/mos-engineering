import React from "react";

export default function RequestQuote() {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="appointment-area position-relative">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-area mb-0 text-xl-start pe-xxl-5 me-xxl-5 space">
                <span className="sub-title">Request A Quote</span>
                <h2 className="sec-title text-white">
                  Let's Talk About Your Industrial and Mining Challenges
                </h2>
                <p className="sec-desc me-xl-5">
                  Connect with our team of experts to discuss your project
                  needs. We provide tailored electrical, automation, and mining
                  services that optimize your operations and ensure long-term
                  reliability and safety.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appointment-area-wrapper">
                <form
                  action="#"
                  method="POST"
                  className="appointment-form input-smoke ajax-contact"
                >
                  <div className="row">
                    <div className="form-group col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={3}
                        className="form-control"
                        placeholder="Write Messages..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-btn col-12">
                      <button className="th-btn fw-btn">
                        <span
                          className="btn-text"
                          data-back="Send Messages"
                          data-front="Send Messages"
                        />
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3" />
                </form>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup d-none d-xxl-block"
            data-bottom="0%"
            data-right="-10%"
          >
            <img src="assets/img/shape/shape-2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
