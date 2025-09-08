import { faqs } from "@/lib/faqs";
import React from "react";

export default function Faqs() {
  return (
    <div className="overflow-hidden bg-smoke2" id="faq-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="faq-image th-parallax tw:z-10!">
              <img src="/assets/img/normal/faq-image.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-5 mt-35 mt-xl-0">
            <div className="faq-area">
              <div className="title-area pe-xxl-5 me-xxl-5">
                <span className="sub-title">FAQ'S</span>
                <h2 className="sec-title">Have Any Questions?</h2>
              </div>
              <div
                className="accordion-area accordion tw:z-50!"
                id="faqAccordion"
              >
                {faqs.map((faq, index) => (
                  <React.Fragment key={index}>
                    <div className="accordion-card tw:z-50!">
                      <div
                        className="accordion-header tw:z-40!"
                        id={`collapse-item-${index}`}
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${index}`}
                          aria-expanded="false"
                          aria-controls="collapse-${index}"
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={`collapse-${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`collapse-item-${index}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p className="faq-text">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
