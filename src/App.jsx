import "./App.css";
import logoUp from "./assets/img/photoshop/logo.png";
import aboutImage from "./assets/img/about/1.png";
import heroImage from "./assets/img/index/3.png";
import iconA from "./assets/img/index/a.svg";
import iconB from "./assets/img/index/b.svg";
import iconC from "./assets/img/index/c.svg";
import icon1 from "./assets/img/index/index-01.svg";
import icon2 from "./assets/img/index/index-02.svg";
import icon3 from "./assets/img/index/index-03.svg";
import icon4 from "./assets/img/index/index-04.svg";
import service1 from "./assets/img/services/service-1.svg";
import service2 from "./assets/img/services/service-2.svg";
import service3 from "./assets/img/services/service-3.svg";
import service4 from "./assets/img/services/service-4.svg";
import service5 from "./assets/img/services/service-5.svg";
import service6 from "./assets/img/services/service-6.svg";
import service7 from "./assets/img/services/service-7.svg";
import service8 from "./assets/img/services/service-8.svg";
import Image4 from "./assets/img/index/4.png"; // Import image at the top
import indexLearnImage from "./assets/img/index/index-learn.svg";
import indexAnalysImage from "./assets/img/index/index-analys.svg";
import indexStrategyImage from "./assets/img/index/index-strategy.svg";
import indexDataImage from "./assets/img/index/index-data.svg";
import clientProgressImage from "./assets/img/index/6.png";
import investorImage from "./assets/img/index/investor.svg";
import operationImage from "./assets/img/index/operation.svg";
import teamImage from "./assets/img/index/team.svg";
import logoDown from "./assets/img/logo-down.png";
import blog1 from "./assets/img/blog/blog-01/banner.webp";
import blog2 from "./assets/img/blog/blog-02/banner.webp";
import blog3 from "./assets/img/blog/blog-03/banner.webp";
import blog4 from "./assets/img/blog/blog-04/banner.webp";
import member1 from "./assets/img/member1.jpg";
import member2 from "./assets/img/member2.jpg";
import member3 from "./assets/img/member3.jpg";
import { useState } from "react";
import "swiper/css"; // Correct CSS import
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AutoScrollIcons from "./components/AutoScrollIcons";
import PauseOnHover from "./components/AutoScrollIcons";
import PortfolioSection from "./components/PortfolioSection";
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

function App() {
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
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              src={logoUp}
              className="img-fluid"
              alt="logo Header Art Developer"
            />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="#about-append">About</a>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0);">
                  <span>Services</span>{" "}
                  <i className="ri-arrow-down-s-line dropdown-indicator" />
                  {/* <i class="ri-arrow-down-s-line"></i> */}
                </a>
                <ul>
                  <li>
                    <a href="#">Custom Software Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="#">Web Application Development</a>
                  </li>
                  <li>
                    <a href="#">E-commerce Solutions</a>
                  </li>
                  <li>
                    <a href="#">UI/UX Design & Prototyping</a>
                  </li>
                  <li>
                    <a href="#">Cloud Solutions & Integration</a>
                  </li>
                  <li>
                    <a href="#">API Development & Integration</a>
                  </li>
                  <li>
                    <a href="#">AI & Machine Learning Solutions</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#boxes-hero">Why Us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#layanan-kita">Services</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
          <div className="btn-nav d-flex align-items-center">
            <ul>
              <li className="login-nav">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  Free Consultation{" "}
                </a>
              </li>
            </ul>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>

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
      <section id="hero" className="hero">
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
                <a href="#layanan-kita" id="icon" className="btn-get-started">
                  Contact Us
                  <h4 style={{ display: "inline" }}>
                    <HiOutlineArrowLongRight id="icon-1" color="#000" />
                  </h4>
                </a>
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
      <main id="main" className="mobile-view">
        {/* ======= Services Section ======= */}

        <section id="about-append" className="about-append">
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
                <a href="#" className="read-more">
                  Learn More.
                </a>
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

        <section id="boxes-hero" className="boxes-hero">
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
                  <h4 className="title">Memberikan Impact</h4>
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
                  <h4 className="title">Market yang Tepat</h4>
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
        <AutoScrollIcons />

        <section id="layanan-kita" className="layanan-kita">
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
                  title: "Web Development",
                  description:
                    "Build a powerful online presence for your business with our responsive and scalable web development services.",
                },
                {
                  img: service2,
                  title: "App Development",
                  description:
                    "Create seamless mobile experiences with custom mobile apps tailored to your business goals.",
                },
                {
                  img: service3,
                  title: "Graphic Design",
                  description:
                    "Enhance your brand’s visual identity with stunning graphic designs that engage and inspire your audience.",
                },
                {
                  img: service4,
                  title: "UI/UX Design",
                  description:
                    "Create intuitive, user-friendly interfaces that enhance the user experience and drive conversions.",
                },
                {
                  img: service1,
                  title: "Digital Marketing",
                  description:
                    "Grow your brand's reach and visibility with tailored digital marketing strategies that drive results.",
                },
                {
                  img: service7,
                  title: "SEO",
                  description:
                    "Optimize your website for search engines to increase organic traffic and improve your online visibility.",
                },
                {
                  img: service8,
                  title: "Blockchain",
                  description:
                    "Leverage blockchain technology for secure, transparent solutions that enhance business processes.",
                },
                {
                  img: service6,
                  title: "Branding",
                  description:
                    "Build a strong brand identity that resonates with your audience and sets you apart from competitors.",
                },
                {
                  img: service6,
                  title: "Cybersecurity",
                  description:
                    "Protect your business from cyber threats with advanced cybersecurity measures and secure systems.",
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
                    <a href="#">
                      Learn More &nbsp;
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection />

        {/* End Why Us Section */}
        {/* <section id="about-3" className="about-3">
          <div className="container" data-aos="fade-in">
            <div className="row no-gutters justify-content-between">
              <p
                style={{
                  fontSize: "44px",
                  letterSpacing: "0.3px",
                  fontWeight: "bolder",
                  textAlign: "center",
                  marginBottom: "40px",
                  color: "#7cda00",
                }}
              >
                Find Your Strategy
              </p>
              <div
                className="col-lg-6 video-box justify-content-center"
                data-aos="fade-in"
              >
                <img
                  src={Image4} // Use imported image here
                  className="img-fluid"
                  alt="artdev-official-img"
                />
              </div>
              <div className="col-lg-5 d-flex flex-column d-flex justify-content-center about-content">
                <div className="section-title-new" data-aos="fade-in">
                  <h2
                    style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                      lineHeight: "40px",
                    }}
                  >
                    We Help You Discover the Right Strategy
                  </h2>
                  <p>
                    Don’t miss out! With our creative ideas, Invo is always
                    ready to offer unique and innovative strategies tailored to
                    your business. We analyze and stay updated on what
                    captivates and attracts your target audience. By staying
                    unique, your business will easily stand out and grab the
                    attention of potential customers, making it easier to
                    compete in the market.
                  </p>
                </div>
                <a href="#">
                  Check Our Case Studies <i className="bi bi-arrow-right" />
                </a>
                <div className="about-3-quote" data-aos="fade-in">
                  <div className="content">
                    <blockquote>
                      <p>
                        Whether you believe it or not, their services are truly
                        amazing. My daily sales, which used to be around 3
                        million, have now doubled, even tripled. Invo’s
                        professionalism is exceptional!
                      </p>
                      <h5>Iqbal Ramadhan</h5>
                      <p>Owner of Creative Youth Vision</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* What Our Clients Say */}

        {/* End About Us Section */}

        {/*End About Us Section */}

        <section id="boxes" className="boxes">
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
                      <a href="#" className="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-linkedin-fill"></i>
                      </a>
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
                      <a href="#" className="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-linkedin-fill"></i>
                      </a>
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
                      <a href="#" className="">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-instagram-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="#" className="">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ======= Call To Action Section ======= */}
        <section id="hero-2" className="hero-2">
          <div className="container text-center" data-aos="fade-in">
            <h1>Get Started Now ?</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Zenth Solution is here to help you elevate your business. We offer
              customized solutions and innovative strategies designed to
              accelerate your business growth and ensure its success in the
              digital world.
            </p>
            <a className="btn-get-started-2" href="#layanan-kita">
              Explore Our Services
            </a>
            <a className="btn-get-started-bot" href="#" onClick="ATC()">
              Contact Us
            </a>
          </div>
        </section>
        {/* End Call To Action Section */}
      </main>

      <section id="contact" className="contact-section">
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
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Footer ======= */}

      <footer id="footer" className="footer">
        <div className="footer-top" data-aos="fade-in">
          <div className="container">
            <div className="row justify-content-between">
              <div
                className="col-lg-3 col-md-6 footer-contact"
                data-aos="fade-in"
              >
                <img src={logoDown} alt="Zenth Solution Logo" />
                <p>
                  Medan, Sumatera Utara
                  <br />
                  Indonesia
                  <br />
                  <strong>Phone :</strong>{" "}
                  <a href="https://api.whatsapp.com/send?text=Halo%20Zenth%20Solution,%20Saya%20ingin%20Konsultasi%20Layanan%20Dengan%20Anda&phone=6281260779669">
                    0812-6077-9669
                  </a>
                  <br />
                  <strong>Email :</strong>{" "}
                  <a href="mailto:info@zenthsolution.com?subject=Halo%20Zenth%20Solution,%20Saya%20ingin%20konsultasi">
                    info@zenthsolution.com
                  </a>
                  <br />
                </p>
                <div className="social-links-abc">
                  <a
                    style={{ margin: "0px 5px" }}
                    href="#"
                    className="facebook"
                    target="_blank"
                  >
                    <i
                      style={{ fontSize: "30px" }}
                      className="ri-facebook-box-fill"
                    ></i>{" "}
                  </a>
                  <a
                    style={{ margin: "0px 5px" }}
                    href="#"
                    className="instagram"
                    target="_blank"
                  >
                    <i
                      style={{ fontSize: "30px" }}
                      className="ri-instagram-fill"
                    ></i>{" "}
                  </a>
                  <a
                    style={{ margin: "0px 5px" }}
                    href="#"
                    className="linkedin"
                    target="_blank"
                  >
                    <i
                      style={{ fontSize: "30px" }}
                      className="ri-linkedin-box-fill"
                    ></i>{" "}
                  </a>
                  <a
                    style={{ margin: "0px 5px" }}
                    href="#"
                    className="tiktok"
                    target="_blank"
                  >
                    <i
                      style={{ fontSize: "30px" }}
                      className="ri-tiktok-line"
                    ></i>{" "}
                  </a>
                </div>
              </div>

              <div
                className="col-lg-2 col-md-6 footer-links"
                data-aos="fade-in"
              >
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="#">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="#">SEO & Branding</a>
                  </li>
                  <li>
                    <a href="#">Blockchain Solutions</a>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-2 col-md-6 footer-links"
                data-aos="fade-in"
              >
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">About Zenth Solution</a>
                  </li>
                  <li>
                    <a href="#">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-lg-3 col-md-6 footer-blog" data-aos="fade-in">
                <h4>Our Latest Articles</h4>
                <ul>
                  <li>
                    <img src={blog1} alt="Blog 1" />
                    <a href="#">
                      The Importance of Digital Marketing for Business Growth
                    </a>
                  </li>
                  <li>
                    <img src={blog2} alt="Blog 2" />
                    <a href="#">
                      How Effective Branding Sets You Apart in a Competitive
                      Market
                    </a>
                  </li>
                  <li>
                    <img src={blog3} alt="Blog 3" />
                    <a href="#">
                      Optimizing Your Website for Better User Experience
                    </a>
                  </li>
                  <li>
                    <img src={blog4} alt="Blog 4" />
                    <a href="#">Leveraging SEO to Boost Website Traffic</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            © Copyright 2025 Zenth Solution™ - All Rights Reserved
          </div>
        </div>
      </footer>

      {/* End Footer */}
      {/* End Footer */}
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}

export default App;
