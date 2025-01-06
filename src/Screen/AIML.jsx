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
  FaCogs,
  FaCommentDots,
  FaComments,
  FaRegChartBar,
  FaRobot,
  FaSearch,
} from "react-icons/fa";
import {
  AiOutlineDollar,
  AiOutlinePieChart,
  AiOutlineSearch,
  AiOutlineTeam,
} from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi2";
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

export default function AIML() {
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
                AI & Machine Learning Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we specialize in harnessing the power of AI and
              Machine Learning to drive innovation, automate processes, and
              deliver intelligent solutions that transform your business.
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
              Our AI & ML Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We offer cutting-edge AI and Machine Learning solutions to help
              businesses leverage data, improve decision-making, and automate
              tasks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Analytics",
                icon: <FaRegChartBar className="h-16 w-16" />,
                description:
                  "We create predictive models using machine learning to forecast trends, customer behavior, and business outcomes.",
              },
              {
                title: "AI Automation",
                icon: <FaRobot className="h-16 w-16" />,
                description:
                  "Implementing AI-powered automation solutions to streamline operations, reduce human error, and increase efficiency.",
              },
              {
                title: "Natural Language Processing (NLP)",
                icon: <FaCommentDots className="h-16 w-16" />,
                description:
                  "Using NLP to analyze and understand human language, helping businesses improve customer support and automate text-based processes.",
              },
              {
                title: "AI Chatbots",
                icon: <FaComments className="h-16 w-16" />,
                description:
                  "Designing and deploying AI chatbots to improve customer engagement, automate conversations, and deliver personalized experiences.",
              },
              {
                title: "Machine Learning Models",
                icon: <FaCogs className="h-16 w-16" />,
                description:
                  "Developing custom machine learning models for pattern recognition, classification, and decision-making.",
              },
              {
                title: "Data Science & Insights",
                icon: <FaSearch className="h-16 w-16" />,
                description:
                  "Transforming raw data into actionable insights using AI and ML algorithms to support data-driven decision-making.",
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
                Our AI & ML Process
              </h2>
              <ProcessStep
                number="1"
                title="AI Research & Problem Identification"
                description="We begin by understanding your business challenges and identifying opportunities where AI and ML can make an impact."
              />
              <ProcessStep
                number="2"
                title="Data Collection & Preprocessing"
                description="We gather and prepare data, ensuring it's clean and structured to build effective machine learning models."
              />
              <ProcessStep
                number="3"
                title="Model Development & Training"
                description="We design and train machine learning models using advanced algorithms to deliver accurate predictions and insights."
              />
              <ProcessStep
                number="4"
                title="AI Deployment & Integration"
                description="We integrate AI models into your business processes, ensuring smooth deployment and scalability."
              />
              <ProcessStep
                number="5"
                title="Continuous Monitoring & Optimization"
                description="We monitor the performance of your AI models and continuously optimize them to adapt to evolving data and business needs."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AI & Machine Learning"
              />
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-[#7cda00] font-bold mb-4">
              Frequently Asked AI & ML Questions
            </h2>
            <p className="text-xl text-zinc-100 max-w-3xl mx-auto">
              Have questions about AI and Machine Learning? We’ve got you
              covered. Explore our answers or contact us for more information.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion title="How do you ensure the quality of AI models?">
              <p className="text-zinc-200 leading-relaxed">
                We use rigorous testing, validation, and monitoring processes to
                ensure AI models are accurate, reliable, and robust.
              </p>
            </Accordion>
            <Accordion title="What types of machine learning models do you build?">
              <p className="text-zinc-200 leading-relaxed">
                We build a range of models, including supervised learning,
                unsupervised learning, and reinforcement learning models,
                depending on your needs.
              </p>
            </Accordion>
            <Accordion title="How does AI automation work in my business?">
              <p className="text-zinc-200 leading-relaxed">
                AI automation helps streamline repetitive tasks, improve
                operational efficiency, and reduce errors, allowing your team to
                focus on more strategic activities.
              </p>
            </Accordion>
            <Accordion title="What is the role of data in AI & ML projects?">
              <p className="text-zinc-200 leading-relaxed">
                High-quality, well-prepared data is essential for training AI
                and ML models. The better the data, the more accurate the
                predictions and insights will be.
              </p>
            </Accordion>
            <Accordion title="How do you handle model performance optimization?">
              <p className="text-zinc-200 leading-relaxed">
                We continuously monitor model performance and apply techniques
                such as hyperparameter tuning, retraining, and data updates to
                improve accuracy and efficiency.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
