import "../App.css";
import "../index.css";
import logoUp from "../assets/img/photoshop/logo.png";
import aboutImage from "../assets/img/about/1.png";
import heroImage from "../assets/img/index/3.png";
import iconA from "../assets/img/index/a.svg";
import iconB from "../assets/img/index/b.svg";
import iconC from "../assets/img/index/c.svg";
import icon1 from "../assets/img/index/index-01.svg";
import icon2 from "../assets/img/index/index-02.svg";
import icon3 from "../assets/img/index/index-03.svg";
import icon4 from "../assets/img/index/index-04.svg";
import service1 from "../assets/img/services/service-1.svg";
import service2 from "../assets/img/services/service-2.svg";
import service3 from "../assets/img/services/service-3.svg";
import service4 from "../assets/img/services/service-4.svg";
import service5 from "../assets/img/services/service-5.svg";
import service6 from "../assets/img/services/service-6.svg";
import service7 from "../assets/img/services/service-7.svg";
import service8 from "../assets/img/services/service-8.svg";
import clientProgressImage from "../assets/img/index/6.png";
import investorImage from "../assets/img/index/investor.svg";
import operationImage from "../assets/img/index/operation.svg";
import teamImage from "../assets/img/index/team.svg";
import logoDown from "../assets/img/logo-down.png";
import blog1 from "../assets/img/blog/blog-01/banner.webp";
import blog2 from "../assets/img/blog/blog-02/banner.webp";
import blog3 from "../assets/img/blog/blog-03/banner.webp";
import blog4 from "../assets/img/blog/blog-04/banner.webp";
import member1 from "../assets/img/member1.jpg";
import member2 from "../assets/img/member2.jpg";
import member3 from "../assets/img/member3.jpg";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import PauseOnHover from "../components/AutoScrollIcons";
import PortfolioSection from "../components/PortfolioSection";
import { NavLink } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
const testimonials = [
  {
    name: "Client Name 1",
    profession: "Profession 1",
    quote:
      "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    imgSrc: "img/testimonial-1.jpg",
  },
  {
    name: "Client Name 2",
    profession: "Profession 2",
    quote:
      "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    imgSrc: "img/testimonial-2.jpg",
  },
  {
    name: "Client Name 3",
    profession: "Profession 3",
    quote:
      "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    imgSrc: "img/testimonial-3.jpg",
  },
];

function Home() {
  const form = useRef();

 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hap4omw", "template_1r123vt", form.current, {
        publicKey: "sq6oT6-Gf52_hmzwP",
      })
      .then(
        () => {
          alert("Email has been Send Succesfully");
        },
        (error) => {
          console.log("Something went wrong... ", error.text);
        }
      );
  };

  return (
    <>
      <Header />

      {/* End Header */}

      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Zenth Solution ™
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="img-offcanvas col-lg-12">
            <img src={aboutImage} className="img-fluid" alt="" />
          </div>
          <p>
            At Zenth Solution, we specialize in building innovative and scalable
            software solutions tailored to your business needs. Our dedicated
            team works closely with you to turn your ideas into high-performance
            digital products, ensuring growth and success at every step.
          </p>
          <p>
            We offer cutting-edge technology solutions, including custom
            software development, mobile apps, and web applications. With a
            focus on user-centric design and seamless functionality, we empower
            businesses to stay ahead in the fast-evolving digital world.
          </p>
        </div>
      </div>

      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero xl:px-20">
        <div className="container position-relative">
          <div className="row gy-5 justify-content-between" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Building Solutions, Designing <span>Success Everywhere</span>
              </h2>
              <p>
                We provide customized digital solutions that drive business
                growth and enhance user experiences. Our services focus on
                improving functionality, engagement, and overall performance.
                From websites to mobile apps and digital marketing, we ensure
                long-term success for every client.
              </p>
              <div className="flex justify-content-center justify-content-lg-start">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Learn More</span>
                </button>
              </div>
            </div>
            <div className="hero-img col-lg-5 order-1 order-lg-2">
              {/* <img
                src={heroImage}
                alt="artdev-official-img"
                data-aos="fade-in"
              /> */}
              <DotLottieReact
                src="https://lottie.host/7f3508f0-9b85-43fa-8378-06a5497da6a7/ULHIa2nanK.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </section>

      {/* End Hero Section */}
      <main id="main" className="mobile-view ">
        {/* ======= Services Section ======= */}

        <section id="about-append" className="about-append  xl:px-20">
          <div className="container" data-aos="fade-in">
            <div className="row align-items-xl-center gy-4 justify-content-between">
              <p>About Us</p>
              <div className="col-xl-5 content">
                <h2>Turning Ideas into Digital Success Stories</h2>
                <p>
                  We are a dedicated team of digital experts passionate about
                  helping businesses succeed in the ever-evolving digital world.
                  Our mission is to provide customized solutions that drive
                  growth, enhance user experiences, and ensure long-term success
                  across websites, mobile apps, and digital marketing. With a
                  focus on innovation and quality, we are committed to
                  delivering results that matter.
                </p>
                <p className="clamp">
                  Whether you're a startup or an established business, we work
                  closely with you to understand your unique needs and create
                  tailored strategies that help you reach your goals. From
                  developing user-friendly websites and mobile apps to
                  implementing effective digital marketing campaigns, we’re here
                  to bring your vision to life and support your growth every
                  step of the way.
                </p>
                <button
                  href="#"
                  className="ahm_btn"
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
              <div className="col-xl-6">
                <div className="row gy-2 gx-2 gy-lg-3 gx-lg-3 icon-boxes">
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
                        We provide efficient solutions to help you reach your
                        goals faster.
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
                        Share your ideas with us, and we’ll guide you to
                        success.
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
                        Our team delivers creative, data-driven solutions
                        tailored to your needs.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    We use the latest technology to create solutions that stand
                    out, keep you ahead of the competition, and deliver
                    measurable results.
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

        {/* About Section - Home Page */}

        {/* End About Section */}
        {/* ======= Why Us Section ======= */}

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

        <PortfolioSection />

       
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
                    We provide ongoing support and maintenance to keep your
                    software running smoothly, ensuring it meets evolving
                    business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="our-team" className="our-team">
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
        </section> */}

        {/* ======= Call To Action Section ======= */}
        <section id="hero-2" className="hero-2  xl:px-20">
          <div className="container text-center" data-aos="fade-in">
            <h1>Get Started Now ?</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Zenth Solution is here to help you elevate your business. We offer
              customized solutions and innovative strategies designed to
              accelerate your business growth and ensure its success in the
              digital world.
            </p>
            <NavLink className="btn-get-started-2" href="#layanan-kita">
              Explore Our Services
            </NavLink>
            <NavLink className="btn-get-started-bot" href="#" onClick="ATC()">
              Contact Us
            </NavLink>
          </div>
        </section>
        {/* End Call To Action Section */}
      </main>

      <section id="contact" className="contact-section  xl:px-20">
        <div className="container">
          <div className="section-title-new" data-aos="fade-in">
            <span className="heading">Contact Us</span>
            <p className="subheading">
              We’d Love to Hear from You <br /> Reach Out to Us for Any Queries
            </p>
          </div>
          <div className="contact-content">
            {/* Left Side - Image */}
            <div className="contact-image">
              <img src={aboutImage} alt="Contact" />
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="subject">Message</label>
                  <textarea
                    id="subject"
                    placeholder="Enter Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="flex justify-center w-full gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#7cda00] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Submit
                  <svg
                    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      class="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Footer ======= */}

      <Footer />

      {/* End Footer */}
      {/* End Footer */}
      <NavLink
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </NavLink>
    </>
  );
}

export default Home;
