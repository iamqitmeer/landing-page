import React from "react";

function OurTeam() {
  return {
     <section id="our-team" className="our-team">
      <div className="container" data-aos="fade-in">
        <div className="section-title-new" data-aos="fade-in">
          <span className="heading">Meet Our Team</span>
          <p className="subheading">
            Bringing Ideas to Life with Passion and Dedication
          </p>
        </div>
        <div className="row team-members gy-lg-4 gx-lg-4 gy-3 gx-2">
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4"
            data-aos="fade-up"
          >
            <div className="team-member-card">
              <div className="member-photo">
                <img className="img-fluid " src={member1} alt="John Doe" />
              </div>
              <div className="member-info">
                <h4 className="name">John Doe</h4>
                <p className="position">Chief Executive Officer</p>
                <p className="bio">
                  A leader dedicated to creating innovative strategies and
                  guiding our team to success.
                </p>
                <div className="social-links">
                  <NavLink to="#" className="">
                    <i className="ri-facebook-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-instagram-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-twitter-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-linkedin-fill"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="team-member-card">
              <div className="member-photo">
                <img
                  className="img-fluid "
                  src={member2}
                  alt="Jane Smith"
                />
              </div>
              <div className="member-info">
                <h4 className="name">Jane Smith</h4>
                <p className="position">Chief Technology Officer</p>
                <p className="bio">
                  A tech innovator focused on delivering robust and scalable
                  solutions for the future.
                </p>
                <div className="social-links">
                  <NavLink to="#" className="">
                    <i className="ri-facebook-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-instagram-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-twitter-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-linkedin-fill"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 d-flex align-items-stretch mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="team-member-card">
              <div className="member-photo">
                <img
                  className="img-fluid "
                  src={member3}
                  alt="Michael Brown"
                />
              </div>
              <div className="member-info">
                <h4 className="name">Michael Brown</h4>
                <p className="position">Head of Marketing</p>
                <p className="bio">
                  Passionate about connecting with audiences and building
                  lasting relationships.
                </p>
                <div className="social-links">
                  <NavLink to="#" className="">
                    <i className="ri-facebook-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-instagram-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-twitter-fill"></i>
                  </NavLink>
                  <NavLink to="#" className="">
                    <i className="ri-linkedin-fill"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  };
}

export default OurTeam;
