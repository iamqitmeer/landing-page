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
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
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

export default function UIUXDesign() {
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
              Redefine Your{" "}
              <span className="text-[#7cda00]">User Experience</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#fff]">
              At Zenth Solution, we create intuitive and engaging UI/UX designs
              that enhance usability, delight users, and bring your ideas to
              life through seamless interactions and stunning visuals.
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
              Our UI/UX Design Expertise
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              We specialize in crafting user-centric designs that are both
              visually stunning and functionally effective, ensuring seamless
              user experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User Research & Personas",
                icon: <AiOutlineTeam className="h-16 w-16" />,
                description:
                  "Conducting detailed research and creating user personas to design experiences tailored to your target audience.",
              },
              {
                title: "Wireframing & Prototyping",
                icon: <HiOutlineNewspaper className="h-16 w-16" />,
                description:
                  "Building wireframes and interactive prototypes to visualize and test the flow and functionality of your app or website.",
              },
              {
                title: "User Interface Design",
                icon: <BiDesktop className="h-16 w-16" />,
                description:
                  "Designing intuitive and visually appealing user interfaces that enhance engagement and usability.",
              },
              {
                title: "Interaction Design",
                icon: <AiOutlinePieChart className="h-16 w-16" />,
                description:
                  "Creating interactive elements and animations that guide users and make the experience delightful.",
              },
              {
                title: "Usability Testing",
                icon: <FaBoxOpen className="h-16 w-16" />,
                description:
                  "Conducting comprehensive usability tests to identify and address pain points in the user journey.",
              },
              {
                title: "Accessibility Design",
                icon: <BsBarChart className="h-16 w-16" />,
                description:
                  "Ensuring your designs are inclusive and accessible, adhering to WCAG guidelines and best practices.",
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
                Our UI/UX Design Process
              </h2>
              <ProcessStep
                number="1"
                title="Discovery and Research"
                description="We begin by understanding your users, business goals, and competitive landscape to define the design strategy."
              />
              <ProcessStep
                number="2"
                title="Ideation and Wireframing"
                description="Our team brainstorms creative solutions, develops user flows, and builds wireframes to outline the structure."
              />
              <ProcessStep
                number="3"
                title="Prototyping and Visual Design"
                description="We create high-fidelity prototypes and visually appealing designs, ensuring they align with your brand identity."
              />
              <ProcessStep
                number="4"
                title="Usability Testing"
                description="We test the designs with real users, collect feedback, and refine the interfaces for optimal usability."
              />
              <ProcessStep
                number="5"
                title="Delivery and Support"
                description="We deliver the final designs in the required formats and provide ongoing support for enhancements and updates."
              />
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="UI/UX Design Process"
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
            <Accordion title="What types of UI/UX design services do you offer?">
              <p className="text-zinc-200 leading-relaxed">
                We offer comprehensive UI/UX design services, including user
                research, wireframing, prototyping, interaction design, visual
                design, usability testing, and accessibility design. Whether
                you're building a mobile app, web platform, or enterprise
                system, we can create seamless, intuitive designs for your
                users.
              </p>
            </Accordion>
            <Accordion title="How long does a typical UI/UX design project take?">
              <p className="text-zinc-200 leading-relaxed">
                The timeline depends on the project's scope and complexity.
                Simple wireframes and prototypes might take 1-2 weeks, while
                more comprehensive UI/UX projects, including user research,
                multiple revisions, and testing, may take several weeks to a
                couple of months. We'll provide a clear timeline during the
                initial consultation.
              </p>
            </Accordion>
            <Accordion title="Do you provide revisions for the designs?">
              <p className="text-zinc-200 leading-relaxed">
                Yes, we include a set number of revisions in all our UI/UX
                design packages to ensure the designs meet your expectations.
                Additional revisions can be arranged if necessary.
              </p>
            </Accordion>
            <Accordion title="How do you ensure the designs align with our target users?">
              <p className="text-zinc-200 leading-relaxed">
                We start by conducting user research to understand your target
                audience’s needs, behaviors, and pain points. Our team then
                creates user personas and maps out user journeys to ensure the
                designs align with your users' expectations and provide a
                seamless experience.
              </p>
            </Accordion>
            <Accordion title="What tools do you use for UI/UX design?">
              <p className="text-zinc-200 leading-relaxed">
                We use industry-standard tools like Figma, Adobe XD, Sketch, and
                InVision to create wireframes, prototypes, and high-fidelity
                designs. These tools help us collaborate effectively and iterate
                quickly during the design process.
              </p>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
