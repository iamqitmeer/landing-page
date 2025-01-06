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
import {
  FaBoxOpen,
  FaChalkboardTeacher,
  FaFacebookF,
  FaFileSignature,
  FaGem,
  FaPlug,
  FaRegMoneyBillAlt,
  FaShieldAlt,
} from "react-icons/fa";
import {
  AiOutlineDollar,
  AiOutlinePieChart,
  AiOutlineSearch,
  AiOutlineTeam,
} from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdEmail, MdOutlineContentPaste } from "react-icons/md";

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
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Blockchain() {
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
      <Header />

      <header className="bg-[#000000] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-[#fff]">
              Elevate Your{" "}
              <span className="text-[#7cda00]">Blockchain Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we craft tailored blockchain strategies that
              enhance transparency, security, and efficiency through
              decentralized technologies.
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
              Our Blockchain Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We specialize in building robust blockchain solutions to enhance
              decentralization, provide secure transactions, and transform
              industries with smart contracts and distributed ledger
              technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Contract Development",
                icon: <FaFileSignature className="h-16 w-16" />,
                description:
                  "Developing and deploying smart contracts to automate processes and ensure trustless transactions on the blockchain.",
              },
              {
                title: "Blockchain Integration",
                icon: <FaPlug className="h-16 w-16" />,
                description:
                  "Integrating blockchain technology into existing systems to enhance data integrity, transparency, and security.",
              },
              {
                title: "Decentralized Finance (DeFi)",
                icon: <FaRegMoneyBillAlt className="h-16 w-16" />,
                description:
                  "Building DeFi platforms to enable peer-to-peer financial transactions without intermediaries, reducing costs and enhancing access.",
              },
              {
                title: "Tokenization & NFTs",
                icon: <FaGem className="h-16 w-16" />,
                description:
                  "Creating and managing tokens and NFTs for various use cases, such as collectibles, real estate, and digital assets.",
              },
              {
                title: "Blockchain Security Audits",
                icon: <FaShieldAlt className="h-16 w-16" />,
                description:
                  "Performing security audits on blockchain applications to identify vulnerabilities and ensure they meet industry standards.",
              },
              {
                title: "Blockchain Consultation",
                icon: <FaChalkboardTeacher className="h-16 w-16" />,
                description:
                  "Providing consultation services to businesses seeking to adopt blockchain technology for their operations or solutions.",
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
                Our Blockchain Process
              </h2>
              <ProcessStep
                number="1"
                title="Blockchain Research & Strategy"
                description="We start by understanding your business requirements and designing a customized blockchain solution that aligns with your goals."
              />
              <ProcessStep
                number="2"
                title="Blockchain Architecture & Development"
                description="Our team develops a secure, scalable blockchain architecture that meets the needs of your project, including token creation and smart contracts."
              />
              <ProcessStep
                number="3"
                title="Integration & Testing"
                description="We integrate the blockchain solution into your existing infrastructure and conduct thorough testing to ensure it functions as expected."
              />
              <ProcessStep
                number="4"
                title="Launch & Maintenance"
                description="We launch your blockchain solution and provide ongoing support and maintenance to ensure it remains secure and effective."
              />
              <ProcessStep
                number="5"
                title="Continuous Improvement"
                description="We monitor the system's performance and make necessary adjustments to keep up with the evolving blockchain landscape."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blockchain Process"
              />
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Frequently Asked Blockchain Questions
            </h2>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Have questions about blockchain? We're here to help. Check out our
              answers to common queries, or get in touch with us for more
              details.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion title="What blockchain services do you offer?">
              <p className="text-zinc-200 leading-relaxed">
                We offer blockchain development services including smart
                contract development, blockchain integration, decentralized
                finance (DeFi) platforms, tokenization, NFT development,
                security audits, and more.
              </p>
            </Accordion>
            <Accordion title="How long does it take to implement a blockchain solution?">
              <p className="text-zinc-200 leading-relaxed">
                The timeline for implementing a blockchain solution depends on
                the complexity of the project. Simple solutions may take a few
                weeks, while more complex projects could take several months.
              </p>
            </Accordion>
            <Accordion title="Do you offer custom blockchain solutions?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we tailor our blockchain solutions to meet the unique needs
                of your business, ensuring that the final product aligns with
                your goals and objectives.
              </p>
            </Accordion>
            <Accordion title="What are the benefits of blockchain technology?">
              <p className="text-zinc-200 leading-relaxed">
                Blockchain offers benefits like enhanced security, transparency,
                decentralization, cost-efficiency, and the ability to automate
                processes through smart contracts.
              </p>
            </Accordion>
            <Accordion title="How do you ensure the security of blockchain applications?">
              <p className="text-zinc-200 leading-relaxed">
                We conduct thorough security audits on all blockchain
                applications, ensuring that they meet industry standards and are
                resistant to hacking and other malicious attacks.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
