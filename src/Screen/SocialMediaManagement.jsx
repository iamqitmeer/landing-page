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
import "../index.css";  import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import logoUp from "../assets/img/photoshop/logo.png";
import logoDown from "../assets/img/logo-down.png";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { FaBoxOpen, FaBullhorn, FaChartBar, FaChartLine, FaPen, FaShieldAlt, FaUsers } from "react-icons/fa";
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

export default function SocialMediaManagement() {
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
              <span className="text-[#7cda00]">Social Media Presence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we specialize in crafting engaging and
              results-driven social media strategies that boost brand
              visibility, engage your audience, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
              <button className="buttonabc">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto">
        <section id="services" className="px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Our Social Media Management Services
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We provide expert social media management services designed to
              amplify your brand, engage your target audience, and drive
              business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Content Creation & Curation",
      icon: <FaPen className="h-16 w-16" />,
      description:
        "Crafting compelling content tailored to your brand's voice, from graphics to videos, that resonates with your audience.",
    },
    {
      title: "Social Media Strategy",
      icon: <FaChartLine className="h-16 w-16" />,
      description:
        "Developing a tailored strategy to grow your social media presence, increase engagement, and align with your business goals.",
    },
    {
      title: "Community Management",
      icon: <FaUsers className="h-16 w-16" />,
      description:
        "Building and nurturing relationships with your followers, responding to inquiries, and fostering a positive brand community.",
    },
    {
      title: "Paid Social Advertising",
      icon: <FaBullhorn className="h-16 w-16" />,
      description:
        "Running targeted paid social campaigns that drive traffic, generate leads, and increase conversions across platforms.",
    },
    {
      title: "Analytics & Reporting",
      icon: <FaChartBar className="h-16 w-16" />,
      description:
        "Measuring social media performance with detailed analytics and providing insights for continuous improvement.",
    },
    {
      title: "Brand Reputation Management",
      icon: <FaShieldAlt className="h-16 w-16" />,
      description:
        "Monitoring and managing online brand reputation by addressing customer feedback and ensuring positive public perception.",
    },
  ].map((item, index) => (
    <Card key={index} {...item} />
  ))}
</div>

        </section>

        <section id="process">
          <div className="grid md:grid-cols-2 gap-12 items-center p-14">
            <div>
              <h2 className="text-4xl text-[#7cda00] font-bold mb-8">
                Our Social Media Management Process
              </h2>
              <ProcessStep
                number="1"
                title="Brand Analysis & Goal Setting"
                description="We begin by understanding your brand and defining clear objectives for your social media campaigns."
              />
              <ProcessStep
                number="2"
                title="Content Planning & Scheduling"
                description="We create a content calendar, ensuring that posts are consistent, relevant, and timely for maximum engagement."
              />
              <ProcessStep
                number="3"
                title="Content Creation & Publishing"
                description="Our team produces high-quality content and posts it across the right platforms, ensuring a strong presence."
              />
              <ProcessStep
                number="4"
                title="Engagement & Community Building"
                description="We foster relationships with your followers through timely responses, interactive content, and brand voice consistency."
              />
              <ProcessStep
                number="5"
                title="Performance Monitoring & Reporting"
                description="We analyze the performance of social media campaigns and provide regular reports, optimizing strategies as needed."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Social Media Strategy"
              />
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Frequently Asked Social Media Questions
            </h2>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Have questions about social media management? We’ve got you
              covered. Explore our answers or contact us for more information.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion title="How do you ensure my brand stands out on social media?">
              <p className="text-zinc-200 leading-relaxed">
                We develop a unique voice for your brand, create visually
                appealing content, and engage with your audience in meaningful
                ways.
              </p>
            </Accordion>
            <Accordion title="Which social media platforms should my business be on?">
              <p className="text-zinc-200 leading-relaxed">
                We analyze your target audience and industry to recommend the
                platforms that will provide the best ROI.
              </p>
            </Accordion>
            <Accordion title="How do you measure the success of social media campaigns?">
              <p className="text-zinc-200 leading-relaxed">
                We track key performance indicators (KPIs) like engagement rate,
                reach, conversions, and audience growth to assess success.
              </p>
            </Accordion>
            <Accordion title="How often will I receive updates on my social media performance?">
              <p className="text-zinc-200 leading-relaxed">
                We provide detailed monthly reports, with insights into
                performance and suggestions for improvements.
              </p>
            </Accordion>
            <Accordion title="Can you help with paid advertising on social media?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we manage paid ad campaigns across platforms like Facebook,
                Instagram, and LinkedIn, optimizing for maximum impact.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  );
}
