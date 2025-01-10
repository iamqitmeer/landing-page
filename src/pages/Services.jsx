import React from 'react'
import service1 from "../assets/img/services/service-1.svg";
import service2 from "../assets/img/services/service-2.svg";
import service3 from "../assets/img/services/service-3.svg";
import service4 from "../assets/img/services/service-4.svg";
import service5 from "../assets/img/services/service-5.svg";
import service6 from "../assets/img/services/service-6.svg";
import service7 from "../assets/img/services/service-7.svg";
import service8 from "../assets/img/services/service-8.svg";
import { NavLink } from 'react-router';

function Services() {
  return (
    <section id="layanan-kita" className="layanan-kita  xl:px-20">
          <div className="container" data-aos="fade-in">
            <header className="section-header">
              <p>Our Services</p>
              <h3>
                Discover the Digital Solutions Tailored for Your Business Needs
              </h3>
            </header>
            <div className="row gy-3 gx-2 gx-lg-3 gy-lg-3 item">
              {[
                {
                  img: service5,
                  path: "/services/web-development",

                  title: "Web Development",
                  description:
                    "Build a powerful online presence for your business with our responsive and scalable web development services.",
                },
                {
                  img: service2,
                  path: "/services/app-development",
                  title: "App Development",
                  description:
                    "Create seamless mobile experiences with custom mobile apps tailored to your business goals.",
                },
                {
                  img: service3,
                  title: "Graphic Design",
                  path: "/services/graphic-design",
                  description:
                    "Enhance your brand’s visual identity with stunning graphic designs that engage and inspire your audience.",
                },
                {
                  img: service4,
                  title: "UI/UX Design",
                  path: "/services/ui-ux-design",
                  description:
                    "Create intuitive, user-friendly interfaces that enhance the user experience and drive conversions.",
                },
                {
                  img: service1,
                  title: "Digital Marketing",
                  path: "/services/digital-marketing",

                  description:
                    "Grow your brand's reach and visibility with tailored digital marketing strategies that drive results.",
                },
                {
                  img: service7,
                  title: "Cybersecurity",
                  path: "/services/cybersecurity",
                  description:
                    "Safeguard your business from evolving cyber threats with robust cybersecurity solutions. We implement advanced security protocols to protect your data, systems, and reputation from attacks.",
                },

                {
                  img: service8,
                  title: "Blockchain",
                  path: "/services/blockchain",
                  description:
                    "Leverage blockchain technology for secure, transparent solutions that enhance business processes.",
                },
                {
                  img: service6,
                  title: "AI & Machine Learning Solutions",
                  path: "/services/ai-ml",
                  description:
                    "Harness the power of AI and Machine Learning to drive innovation, automate processes, and transform your business with data-driven insights and predictive analytics.",
                },
                {
                  img: service6,
                  title: "Social Media Management",
                  path: "/services/social-media-management",

                  description:
                    "Maximize your online presence with strategic social media management. We create engaging content, monitor analytics, and boost your brand visibility across multiple platforms to drive growth and customer engagement.",
                },
              ].map((service, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-in"
                  key={index}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <img src={service.img} alt={`${service.title}-img`} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div class="container">
                      <NavLink to={service.path} class="btn-shine">
                        Learn More
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Services