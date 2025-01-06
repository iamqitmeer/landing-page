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
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import logoUp from "../assets/img/photoshop/logo.png";
import logoDown from "../assets/img/logo-down.png";
import { BiDesktop, BiMobile } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import {
  FaBoxOpen,
  FaFacebookF,
  FaGem,
  FaLock,
  FaPlug,
  FaRegMoneyBillAlt,
  FaShieldAlt,
  FaUserLock,
} from "react-icons/fa";
import {
  AiOutlineDollar,
  AiOutlinePieChart,
  AiOutlineSearch,
  AiOutlineTeam,
  AiOutlineUserAdd,
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

export default function Cybersecurity() {
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
              <span className="text-[#7cda00]">
                Blockchain Security Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we specialize in creating secure blockchain
              strategies that protect data, enhance transparency, and secure
              decentralized networks.
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
              Our Blockchain Security Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We provide secure blockchain solutions, focusing on data
              integrity, decentralized network protection, and smart contract
              security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Contract Security",
                icon: <FaLock className="h-16 w-16" />,
                description:
                  "We develop and audit secure smart contracts to ensure they are free from vulnerabilities and protect against attacks.",
              },
              {
                title: "Blockchain Security Audits",
                icon: <FaShieldAlt className="h-16 w-16" />,
                description:
                  "Comprehensive security audits to identify potential threats and vulnerabilities, ensuring a robust blockchain infrastructure.",
              },
              {
                title: "Secure Blockchain Integration",
                icon: <FaPlug className="h-16 w-16" />,
                description:
                  "We integrate blockchain solutions with an emphasis on securing existing systems and safeguarding your data.",
              },
              {
                title: "DeFi Security",
                icon: <FaRegMoneyBillAlt className="h-16 w-16" />,
                description:
                  "Ensuring decentralized finance platforms are secure, preventing common exploits like flash loan attacks and others.",
              },
              {
                title: "NFT Security Solutions",
                icon: <FaGem className="h-16 w-16" />,
                description:
                  "We implement security measures to protect NFT platforms, ensuring transactions and asset ownership are tamper-proof.",
              },
              {
                title: "Blockchain Penetration Testing",
                icon: <FaUserLock className="h-16 w-16" />,
                description:
                  "Simulated attacks on blockchain systems to identify and address security flaws before malicious actors can exploit them.",
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
                Our Secure Blockchain Process
              </h2>
              <ProcessStep
                number="1"
                title="Blockchain Research & Threat Analysis"
                description="We analyze potential threats and design a secure blockchain architecture tailored to your business needs."
              />
              <ProcessStep
                number="2"
                title="Blockchain Security Architecture & Development"
                description="We build a resilient and secure blockchain architecture that includes encryption, secure token creation, and smart contract auditing."
              />
              <ProcessStep
                number="3"
                title="Blockchain Penetration Testing & Security Audits"
                description="Before integration, we perform rigorous penetration tests to identify and eliminate security risks."
              />
              <ProcessStep
                number="4"
                title="Blockchain Launch & Ongoing Security Monitoring"
                description="We ensure a safe launch with continuous security monitoring to protect against evolving threats and vulnerabilities."
              />
              <ProcessStep
                number="5"
                title="Post-Launch Security Optimization"
                description="We continuously improve the security of your blockchain solution, adapting to new threats and updates in security protocols."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blockchain Security"
              />
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Frequently Asked Blockchain Security Questions
            </h2>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Have questions about blockchain security? We’ve got you covered.
              Explore our answers or contact us for more information.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion title="How do you ensure the security of smart contracts?">
              <p className="text-zinc-200 leading-relaxed">
                We perform thorough smart contract audits and vulnerability
                assessments to prevent exploits and ensure the contracts are
                secure.
              </p>
            </Accordion>
            <Accordion title="What is blockchain penetration testing?">
              <p className="text-zinc-200 leading-relaxed">
                Blockchain penetration testing involves simulating cyberattacks
                to identify and fix security vulnerabilities in the blockchain
                system.
              </p>
            </Accordion>
            <Accordion title="How do you prevent DeFi exploits?">
              <p className="text-zinc-200 leading-relaxed">
                We apply security best practices, including code audits and
                stress testing, to prevent attacks like flash loan and
                reentrancy exploits.
              </p>
            </Accordion>
            <Accordion title="What steps are taken to protect blockchain data?">
              <p className="text-zinc-200 leading-relaxed">
                We ensure data protection through end-to-end encryption, secure
                protocols, and regular security audits to prevent data breaches.
              </p>
            </Accordion>
            <Accordion title="How do you keep up with evolving blockchain security threats?">
              <p className="text-zinc-200 leading-relaxed">
                Our team continuously monitors the blockchain landscape for new
                security threats, applying the latest industry standards and
                updates to your blockchain solution.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
