import React from "react";
import investorImage from "../assets/img/index/investor.svg";
import operationImage from "../assets/img/index/operation.svg";
import teamImage from "../assets/img/index/team.svg";

function HowWeWorks() {
  return (
    <section id="boxes" className="boxes  xl:px-20">
      <div className="container" data-aos="fade-in">
        <div className="section-title-new" data-aos="fade-in">
          <p>How We Work</p>
          <h2>We Focus on Delivering Exceptional Software Solutions</h2>
        </div>
        <div className="row icon-boxes gy-lg-3 gx-lg-3 gy-3 gx-2">
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-0 mb-lg-0"
            data-aos="fade-in"
          >
            <div className="icon-box">
              <img
                className="img-fluid"
                src={investorImage}
                alt="artdev-official-img"
              />
              <h4 className="title">Customized Software Development</h4>
              <p className="description">
                We design and develop tailored software solutions that align
                with your business needs, ensuring maximum efficiency and
                growth.
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-0 mb-lg-0"
            data-aos="fade-in"
          >
            <div className="icon-box">
              <img
                className="img-fluid"
                src={operationImage}
                alt="artdev-official-img"
              />
              <h4 className="title">Streamlined Project Management</h4>
              <p className="description">
                Our team ensures smooth project execution, from planning to
                deployment, so you can focus on scaling your business.
              </p>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 d-flex align-items-stretch mb-0 mb-lg-0"
            data-aos="fade-in"
          >
            <div className="icon-box">
              <img
                className="img-fluid"
                src={teamImage}
                alt="artdev-official-img"
              />
              <h4 className="title">Continuous Support and Maintenance</h4>
              <p className="description">
                We provide ongoing support and maintenance to keep your software
                running smoothly, ensuring it meets evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWorks;
