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
import { BiMobile } from "react-icons/bi";

import Header from "../components/Header";
import Footer from "../components/Footer";
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

export default function AppDevelopment() {
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
   <Header/>
      <header className="bg-[#000000] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-[#fff]">
              Elevate Your{" "}
              <span className="text-[#7cda00]">Mobile Presence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution Provideo, we specialize in crafting exceptional
              mobile applications that drive growth, enhance user engagement,
              and ensure long-term success in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
              <button class="buttonabc">Get Start</button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto ">
        <section id="services" className="px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Our Mobile App Development Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry best practices
              to deliver exceptional mobile app solutions tailored to your
              unique business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Mobile Applications",
                icon: <BiMobile className="h-16 w-16" />,
                description:
                  "Tailored mobile app solutions to meet your unique business needs, built for performance and scalability.",
              },
              {
                title: "Cross-Platform Development",
                icon: <Code2 className="h-16 w-16" />,
                description:
                  "Delivering seamless app experiences across iOS and Android platforms, ensuring broader reach and consistency.",
              },
              {
                title: "User-Centric Interfaces",
                icon: <User className="h-16 w-16" />,
                description:
                  "Designing intuitive and engaging app interfaces that enhance user experience and drive retention.",
              },
              {
                title: "Performance Optimization",
                icon: <Zap className="h-16 w-16" />,
                description:
                  "Creating apps optimized for speed, responsiveness, and efficiency to deliver unparalleled user satisfaction.",
              },
              {
                title: "Data-Driven Development",
                icon: <BarChart className="h-16 w-16" />,
                description:
                  "Leveraging analytics and insights to make informed decisions and deliver measurable results through mobile apps.",
              },
              {
                title: "Scalable Solutions",
                icon: <Globe2 className="h-16 w-16" />,
                description:
                  "Building flexible and extensible mobile applications that grow with your business and adapt to future needs.",
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
                Our Mobile App Development Process
              </h2>
              <ProcessStep
                number="1"
                title="Discovery and Planning"
                description="We start by understanding your app's objectives, target audience, and unique requirements to craft a strategic roadmap for success."
              />
              <ProcessStep
                number="2"
                title="Design and Prototyping"
                description="Our expert designers create intuitive and visually appealing app interfaces, ensuring seamless user experiences tailored to your audience."
              />
              <ProcessStep
                number="3"
                title="Development and Integration"
                description="Our skilled developers transform designs into high-performance apps, integrating advanced features and ensuring scalability across platforms."
              />
              <ProcessStep
                number="4"
                title="Testing and Quality Assurance"
                description="Rigorous testing ensures your app is free of bugs, performs flawlessly, and provides a smooth experience for your users."
              />
              <ProcessStep
                number="5"
                title="Deployment and Support"
                description="We handle the app's launch across app stores and provide continuous support and maintenance to ensure its success and reliability."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mobile App Development Process"
              />
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
            <Accordion title="What types of mobile app projects do you handle?">
              <p className="text-zinc-200 leading-relaxed">
                We specialize in developing a variety of mobile apps, including
                native apps for iOS and Android, cross-platform apps using
                frameworks like React Native, e-commerce apps, social networking
                apps, enterprise solutions, and more. Whether it’s a simple
                utility app or a feature-rich platform, we’ve got you covered.
              </p>
            </Accordion>
            <Accordion title="How long does a typical mobile app project take?">
              <p className="text-zinc-200 leading-relaxed">
                The timeline for a mobile app project depends on its complexity
                and feature requirements. A basic app may take 6-10 weeks, while
                a complex app with advanced features can take several months.
                We’ll provide a detailed timeline during the initial
                consultation and keep you updated throughout the process.
              </p>
            </Accordion>
            <Accordion title="Do you provide ongoing support after the app is launched?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we offer ongoing support and maintenance packages to ensure
                your app remains functional, secure, and up-to-date. This
                includes bug fixes, updates for new OS versions, performance
                optimizations, and additional feature enhancements based on user
                feedback.
              </p>
            </Accordion>
            <Accordion title="How do you ensure the security of the apps you develop?">
              <p className="text-zinc-200 leading-relaxed">
                Security is integral to our development process. We follow best
                practices such as secure coding, data encryption, secure APIs,
                and regular security testing. We also ensure compliance with app
                store guidelines and industry standards to protect user data and
                maintain app integrity.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
