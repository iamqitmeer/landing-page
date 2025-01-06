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
import { FaBoxOpen } from "react-icons/fa";
import { AiOutlinePieChart, AiOutlineTeam } from "react-icons/ai";
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

export default function GraphicDesign() {
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
              <span className="text-[#7cda00]">Visual Identity</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we specialize in creating stunning graphic
              designs that captivate audiences, enhance brand recognition, and
              leave a lasting impression in the digital and physical world.
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
              Our Graphic Design Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We specialize in creating visually stunning designs that
              communicate your brand's story, captivate audiences, and elevate
              your business's identity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Identity Design",
                icon: <AiOutlineTeam className="h-16 w-16" />,
                description:
                  "Crafting unique and memorable brand identities, including logos, color palettes, and typography, tailored to your vision.",
              },
              {
                title: "Marketing Collateral",
                icon: <HiOutlineNewspaper className="h-16 w-16" />,
                description:
                  "Designing brochures, flyers, posters, and other marketing materials that leave a lasting impression on your audience.",
              },
              {
                title: "Digital Design",
                icon: <BiDesktop className="h-16 w-16" />,
                description:
                  "Creating engaging designs for social media, websites, and digital advertisements that enhance your online presence.",
              },
              {
                title: "Illustrations and Infographics",
                icon: <AiOutlinePieChart className="h-16 w-16" />,
                description:
                  "Producing custom illustrations and infographics that simplify complex ideas and visually communicate your message.",
              },
              {
                title: "Packaging Design",
                icon: <FaBoxOpen className="h-16 w-16" />,
                description:
                  "Designing eye-catching packaging that stands out on shelves and reflects the essence of your product.",
              },
              {
                title: "Presentation Design",
                icon: <BsBarChart className="h-16 w-16" />,
                description:
                  "Creating impactful and professional presentations that effectively convey your message and captivate your audience.",
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
                Our Graphic Design Process
              </h2>
              <ProcessStep
                number="1"
                title="Discovery and Brainstorming"
                description="We begin by understanding your brand's identity, goals, and target audience to conceptualize designs that resonate with your vision."
              />
              <ProcessStep
                number="2"
                title="Concept Development"
                description="Our team explores creative ideas and drafts initial concepts, ensuring alignment with your brand's tone and style."
              />
              <ProcessStep
                number="3"
                title="Design and Refinement"
                description="We craft polished and visually stunning designs, incorporating your feedback to ensure the final output exceeds expectations."
              />
              <ProcessStep
                number="4"
                title="Delivery and Presentation"
                description="We present the final designs in the required formats, ready for use in print, digital media, or other platforms."
              />
              <ProcessStep
                number="5"
                title="Post-Delivery Support"
                description="We offer ongoing support for tweaks, updates, and additional design needs to ensure your visuals remain impactful and relevant."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Graphic Design Process"
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
            <Accordion title="What types of graphic design services do you offer?">
              <p className="text-zinc-200 leading-relaxed">
                We offer a wide range of graphic design services, including logo
                design, branding, marketing materials, UI/UX design, packaging,
                social media graphics, and more. Whether you need designs for
                digital or print, we have you covered.
              </p>
            </Accordion>
            <Accordion title="How long does a typical graphic design project take?">
              <p className="text-zinc-200 leading-relaxed">
                The timeline depends on the complexity of the project. A basic
                logo design might take 1-2 weeks, while more extensive projects
                like branding or UI/UX design can take several weeks or months.
                We'll provide an estimated timeline during the initial
                consultation.
              </p>
            </Accordion>
            <Accordion title="Do you provide revisions for the designs?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we include a set number of revisions in all our design
                packages to ensure the final result aligns with your vision.
                Additional revisions can be discussed if needed.
              </p>
            </Accordion>
            <Accordion title="How do you ensure the designs align with our brand?">
              <p className="text-zinc-200 leading-relaxed">
                We start with a detailed consultation to understand your brand’s
                values, target audience, and aesthetic preferences. Our team
                ensures that every design element reflects your brand identity
                and resonates with your audience.
              </p>
            </Accordion>
            <Accordion title="What file formats will we receive for the final designs?">
              <p className="text-zinc-200 leading-relaxed">
                We deliver the final designs in various formats, including
                vector files (AI, EPS, or SVG) and web-ready files (PNG, JPG, or
                PDF), depending on your requirements. All files are optimized
                for their intended use.
              </p>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
