import React from "react";
import icon1 from "../assets/img/index/index-01.svg";
import icon2 from "../assets/img/index/index-02.svg";
import icon3 from "../assets/img/index/index-03.svg";
import icon4 from "../assets/img/index/index-04.svg";
function AboutSection() {
  return (
    <section id="about-append" className="about-append  xl:px-20">
      <div className="container" data-aos="fade-in">
        <div className="row align-items-xl-center gy-4 justify-content-between">
          <p>About Us</p>
          <div className="col-xl-5 content">
            <h2>Turning Ideas into Digital Success Stories</h2>
            <p>
              We are a dedicated team of digital experts passionate about
              helping businesses succeed in the ever-evolving digital world. Our
              mission is to provide customized solutions that drive growth,
              enhance user experiences, and ensure long-term success across
              websites, mobile apps, and digital marketing. With a focus on
              innovation and quality, we are committed to delivering results
              that matter. <br />
              <br />
            </p>
            <p className="clamp">
              Whether you're a startup or an established business, we work
              closely with you to understand your unique needs and create
              tailored strategies that help you reach your goals. From
              developing user-friendly websites and mobile apps to implementing
              effective digital marketing campaigns, we’re here to bring your
              vision to life and support your growth every step of the way.{" "}
              <br />
            </p>
            <button
              href="#"
              className="ahm_btn  mt-4"
              style={{ "--clr": "#7808d0" }}
            >
              <span className="ahm_btn__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ahm_btn__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ahm_btn__icon-svg ahm_btn__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Read More{" "}
            </button>
          </div>
          <div className="col-xl-6 ">
            <div className="row gy-2 gx-2 gy-lg-3 gx-lg-3 icon-boxes mt-6">
              <div className="col-md-6 col-6" data-aos="fade-in">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src={icon1}
                      className="img-fluid"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Experienced</h3>
                  <p>
                    With over 5 years of experience, we help businesses,
                    startups succeed in the digital world.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-md-6 col-6" data-aos="fade-in">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src={icon2}
                      className="img-fluid"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Time-Saving</h3>
                  <p>
                    We provide efficient solutions to help you reach your goals
                    faster.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-md-6 col-6" data-aos="fade-in">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src={icon3}
                      className="img-fluid"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Communication</h3>
                  <p>
                    Share your ideas with us, and we’ll guide you to success.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
              <div className="col-md-6 col-6" data-aos="fade-in">
                <div className="icon-box">
                  <div className="icon">
                    <img
                      src={icon4}
                      className="img-fluid"
                      alt="artdev-official-img"
                    />
                  </div>
                  <h3>Innovative Ideas</h3>
                  <p>
                    Our team delivers creative, data-driven solutions tailored
                    to your needs.
                  </p>
                </div>
              </div>
              {/* End Icon Box */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
