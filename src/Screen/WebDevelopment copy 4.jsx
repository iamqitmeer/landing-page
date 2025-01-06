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
} from "lucide-react";
import "../index.css";
import "../App.css";
import logoUp from "../assets/img/photoshop/logo.png";

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
    <div className="text-[#7cda00] mb-6 ">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-4 ">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
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
      <h4 className="text-xl text-white font-bold mb-3">
        {title}
      </h4>
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

export default function WebDevelopment() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
              At Zenth Solution Provideo, we craft exceptional web experiences
              that drive growth, enhance user engagement, and ensure your
              long-term success in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
              <Button primary large>
                Get Started
              </Button>
              <Button large>Learn More</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto ">
        <section id="services" className=" px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Our Web Development Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry best practices
              to deliver exceptional web solutions tailored to your unique
              business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Applications",
                icon: <Code className="h-16 w-16" />,
                description:
                  "Tailored solutions to meet your unique business needs and challenges, built with scalability and performance in mind.",
              },
              {
                title: "Responsive Design",
                icon: <Laptop className="h-16 w-16" />,
                description:
                  "Crafting visually stunning and functionally seamless experiences across all devices and screen sizes.",
              },
              {
                title: "User-Centric Approach",
                icon: <Users className="h-16 w-16" />,
                description:
                  "Creating intuitive interfaces that prioritize user experience, driving engagement and conversion rates.",
              },
              {
                title: "Performance Optimization",
                icon: <Zap className="h-16 w-16" />,
                description:
                  "Boosting your website's speed and efficiency for better user retention and improved search engine rankings.",
              },
              {
                title: "Data-Driven Development",
                icon: <BarChart className="h-16 w-16" />,
                description:
                  "Leveraging analytics and user insights to make informed decisions and drive measurable results.",
              },
              {
                title: "Scalable Solutions",
                icon: <Globe className="h-16 w-16" />,
                description:
                  "Building flexible and extensible websites that grow with your business and adapt to future technological advancements.",
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
                Our Development Process
              </h2>
              <ProcessStep
                number="1"
                title="Discovery and Planning"
                description="We start by deeply understanding your business goals, target audience, and project requirements to create a comprehensive roadmap for success."
              />
              <ProcessStep
                number="2"
                title="Design and Prototyping"
                description="Our expert designers create intuitive and visually appealing interfaces, ensuring a seamless user experience across all devices and platforms."
              />
              <ProcessStep
                number="3"
                title="Development and Integration"
                description="Our skilled developers bring the designs to life, integrating robust functionality and ensuring scalability to meet your current and future needs."
              />
       
              <ProcessStep
                number="5"
                title="Deployment and Support"
                description="We handle the launch process with care and provide ongoing support and maintenance to keep your website running smoothly and securely."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                Development Process Visualization
              </div>
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="">
          <div className="text-center mb-16 p-14">
            <h2 className="text-4xl font-bold mb-4">Our Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our latest web development projects that showcase
              our expertise and commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                Replace with actual project images
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="flex items-center justify-center text-gray-500 text-lg">
                    Project {item} Image
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Project {item}
                    </h3>
                    <p className="text-sm">
                      Brief description of the project and technologies used.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
        </section> */}

        <section id="faq" className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Got questions? We've got answers. If you don't see your question
              here, feel free to reach out to us directly.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion title="What types of web development projects do you handle?">
              <p className="text-zinc-200 leading-relaxed">
                We handle a wide range of web development projects, including
                custom web applications, e-commerce platforms, content
                management systems, progressive web apps, and more. Our team is
                equipped to tackle projects of various scales and complexities,
                from simple brochure websites to complex enterprise-level
                applications.
              </p>
            </Accordion>
            <Accordion title="How long does a typical web development project take?">
              <p className="text-zinc-200 leading-relaxed">
                The timeline for a web development project can vary depending on
                its scope and complexity. A simple website might take 4-8 weeks,
                while a complex web application could take several months. We'll
                provide a detailed timeline during our initial consultation and
                keep you updated throughout the development process.
              </p>
            </Accordion>
            <Accordion title="Do you provide ongoing support after the website is launched?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we offer ongoing support and maintenance packages to ensure
                your website continues to perform optimally. This includes
                regular updates, security patches, performance monitoring, and
                technical support. We're committed to the long-term success of
                your digital presence.
              </p>
            </Accordion>
            <Accordion title="How do you ensure the security of the websites you develop?">
              <p className="text-zinc-200 leading-relaxed">
                Security is a top priority in our development process. We
                implement best practices such as secure coding, regular security
                audits, SSL certificates, and robust authentication systems. We
                also keep all software and plugins up-to-date to protect against
                vulnerabilities and provide ongoing monitoring for potential
                security threats.
              </p>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
