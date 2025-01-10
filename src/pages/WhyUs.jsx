import React from "react";
import iconA from "../assets/img/index/a.svg";
import iconB from "../assets/img/index/b.svg";
import iconC from "../assets/img/index/c.svg";
function WhyUs() {
  return (
    <section id="boxes-hero" className="boxes-hero  xl:px-20">
      <div className="container">
        <header className="section-header">
          <p>Why Us?</p>
          <h3>
            Empowering your business with innovative digital solutions for
            lasting success.
          </h3>
        </header>
        <div className="row icon-boxes">
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-3 mb-lg-0"
            data-aos="fade-in"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  className="img-fluid"
                  src={iconA}
                  alt="artdev-official-img"
                />
              </div>
              <h4 className="title">Expertise in Innovation</h4>
              <p className="description">
                We use the latest technology to create solutions that stand out,
                keep you ahead of the competition, and deliver measurable
                results.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-3 mb-lg-0"
            data-aos="fade-in"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  className="img-fluid"
                  src={iconB}
                  alt="artdev-official-img"
                />
              </div>
              <h4 className="title">Making an Impact</h4>
              <p className="description">
                Every business is unique, so we create customized strategies
                that fit your specific goals, challenges, and vision for the
                future.
              </p>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 d-flex align-items-stretch mb-3 mb-lg-0"
            data-aos="fade-in"
          >
            <div className="icon-box">
              <div className="icon">
                <img
                  className="img-fluid"
                  src={iconC}
                  alt="artdev-official-img"
                />
              </div>
              <h4 className="title">Targeting the Right Market</h4>
              <p className="description">
                We focus on delivering top-quality results that provide real
                value, enhance user experiences, and ensure complete
                satisfaction for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
