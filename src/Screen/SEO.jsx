import { useState, useEffect } from "react";
import {
  Code,
  Laptop,
  Users,
  Zap,
  BarChart,
  Globe,
  ChevronDown,
  ChevronRight,
  Star,
  Check,
  Code2,
  User,
  Globe2,
} from "lucide-react";
import "../index.css";
import "../App.css";
import logoUp from "../assets/img/photoshop/logo.png";
import logoDown from "../assets/img/logo-down.png";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import {
  AiOutlineDollar,
  AiOutlinePieChart,
  AiOutlineSearch,
  AiOutlineTeam,
} from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";

const Button = ({ children, primary = false, large = false, ...props }) => (
  <button
    className={`
      px-6 py-3 rounded-full font-semibold transition-all duration-300
      ${large ? "text-lg px-8 py-4" : ""}
      ${
        primary
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
          : "bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }
    `}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ icon, title, description }) => (
  <div className="bg-[#0b0b0b] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300  group">
    <div className="text-[#7cda00] mb-6 ">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-white ">{title}</h3>
    <p className=" leading-relaxed text-zinc-300">{description}</p>
  </div>
);

const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start mb-12 group">
    <div className="flex-shrink-0 mr-6">
      <div className="w-12 h-12 rounded-full bg-[#7cda00] flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
    </div>
    <div>
      <h4 className="text-xl text-white font-bold mb-3">{title}</h4>
      <p className="text-zinc-100 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl text-[#fff] font-semibold">{title}</span>
        <ChevronDown
          className={`transform text-[#fff] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`mt-4 overflow-hidden text-[#fff] transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, company, quote }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className="text-4xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default function DigitalMarketing() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
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
                <button className="cunsulBtn">Free Consultation </button>
              </li>
            </ul>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>

      <header className="bg-[#000000] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-[#fff]">
              Elevate Your{" "}
              <span className="text-[#7cda00]">Digital Marketing Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we craft tailored digital marketing strategies
              that enhance brand visibility, drive engagement, and maximize
              conversions through innovative digital channels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
              <button class="buttonabc">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto ">
        <section id="services" className="px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Our Digital Marketing Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We specialize in building impactful digital marketing campaigns to
              help your business grow, improve online presence, and connect with
              your audience effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                icon: <AiOutlineSearch className="h-16 w-16" />,
                description:
                  "Optimizing your website to rank higher on search engines and drive more organic traffic.",
              },
              {
                title: "Social Media Marketing",
                icon: <FaFacebookF className="h-16 w-16" />,
                description:
                  "Crafting social media strategies that engage your audience and boost brand awareness.",
              },
              {
                title: "Pay-Per-Click (PPC) Advertising",
                icon: <AiOutlineDollar className="h-16 w-16" />,
                description:
                  "Running targeted ad campaigns to drive immediate traffic and achieve measurable results.",
              },
              {
                title: "Content Marketing",
                icon: <MdOutlineContentPaste className="h-16 w-16" />,
                description:
                  "Creating valuable, relevant content to attract and engage your audience, building long-term relationships.",
              },
              {
                title: "Email Marketing",
                icon: <MdEmail className="h-16 w-16" />,
                description:
                  "Designing personalized email campaigns to nurture leads, increase conversions, and retain customers.",
              },
              {
                title: "Influencer Marketing",
                icon: <AiOutlineUserAdd className="h-16 w-16" />,
                description:
                  "Collaborating with influencers to reach a broader audience and build trust for your brand.",
              },
            ].map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </section>

        <section id="process" className="">
          <div className="grid md:grid-cols-2 gap-12 items-center p-14">
            <div>
              <h2 className="text-4xl text-[#7cda00] font-bold mb-8">
                Our Digital Marketing Process
              </h2>
              <ProcessStep
                number="1"
                title="Market Research & Strategy"
                description="We begin by understanding your business goals, target audience, and competitors to build a customized digital marketing strategy."
              />
              <ProcessStep
                number="2"
                title="Campaign Development & Optimization"
                description="We develop and launch digital marketing campaigns, continuously monitoring and optimizing for the best results."
              />
              <ProcessStep
                number="3"
                title="Engagement & Growth"
                description="We focus on increasing engagement through targeted content, social media strategies, and paid ads to grow your brand’s presence."
              />
              <ProcessStep
                number="4"
                title="Analytics & Reporting"
                description="We provide in-depth analysis of your campaigns and track key metrics to ensure optimal ROI and long-term growth."
              />
              <ProcessStep
                number="5"
                title="Continuous Improvement"
                description="We refine and adjust strategies based on performance data, ensuring your digital marketing efforts are always evolving."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1581337258711-7d6705183f79?q=80&w=1374&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Digital Marketing Process"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Have questions? We're here to help. Check out our answers to
              common queries, or get in touch with us for more details.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion title="What digital marketing services do you offer?">
              <p className="text-zinc-200 leading-relaxed">
                We offer a comprehensive range of digital marketing services,
                including SEO, social media marketing, PPC, content marketing,
                email marketing, and influencer marketing. Our goal is to help
                businesses grow and thrive in the digital landscape.
              </p>
            </Accordion>
            <Accordion title="How long does it take to see results from digital marketing?">
              <p className="text-zinc-200 leading-relaxed">
                The timeline for seeing results depends on various factors,
                including the service and goals. SEO and organic growth may take
                a few months, while PPC campaigns can yield faster results. We
                provide regular reports to keep you informed on the progress.
              </p>
            </Accordion>
            <Accordion title="Do you offer custom strategies for businesses?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we develop tailored strategies for each business based on
                their specific goals, target audience, and industry. Our team
                works closely with you to ensure the approach fits your business
                needs.
              </p>
            </Accordion>
            <Accordion title="What tools do you use for digital marketing?">
              <p className="text-zinc-200 leading-relaxed">
                We use industry-leading tools like Google Analytics, SEMrush,
                Hootsuite, Mailchimp, and others to track, analyze, and optimize
                campaigns for the best results.
              </p>
            </Accordion>
            <Accordion title="How do you measure the success of a digital marketing campaign?">
              <p className="text-zinc-200 leading-relaxed">
                We measure success through key metrics such as website traffic,
                conversion rates, engagement rates, ROI, and customer feedback.
                These metrics help us assess the effectiveness of campaigns and
                optimize them for better outcomes.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

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
    </div>
  );
}
