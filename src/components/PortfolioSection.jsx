import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Athina AI",
      category: "MERN Stack",
      image: "https://i.ibb.co/YQfZDzy/Image-1.png",
      description:
        "Athina AI is a cutting-edge web application crafted with MERN, integrating advanced animation libraries like GSAP and Framer Motion to deliver a visually stunning and interactive user experience. The project showcases seamless transitions, dynamic motion effects, and an intuitive design that engages users effectively. Athina AI emphasizes responsiveness and performance, leveraging modern web technologies to ensure fast loading speeds and cross-device compatibility.",
      demoLink: "https://www.example.com/neon-dreams",
    },
    {
      id: 2,
      title: "Paa.ge AI",
      category: "Next.js",
      image: "https://i.ibb.co/cD1TVNt/Image-2.png",
      description:
        "Paa.ge AI is an innovative link-in-bio platform developed using Next.js, designed to empower creators, entrepreneurs, and businesses. This platform allows users to share links, sell products, and showcase their best work in one seamless, professional, and free solution. The application leverages the power of Framer Motion to deliver smooth animations and an engaging user experience.",
      demoLink: "https://www.example.com/eco-track",
    },
    {
      id: 3,
      title: "Zipy AI",
      category: "Next.js",
      image: "https://i.ibb.co/wdLmxFj/Image-3.png",
      description:
        "Zipy AI is an advanced debugging tool built with Next.js and enhanced using Framer Motion for smooth animations and dynamic user interfaces. It provides AI-powered mobile session replays to track user behavior and identify issues efficiently. Features like Oopsie Bugs detect and log UI/UX errors, offering actionable insights with video snippets and detailed diagnostics.",
      demoLink: "https://www.example.com/mindful-ai",
    },
    {
      id: 4,
      title: "Index",
      category: "MERN Stack",
      image: "https://i.ibb.co/t8rM4bg/Image-4.png",
      description:
        "Index is a MERN stack-based project designed to streamline personal task management through AI-powered automation. The project utilizes Framer Motion for dynamic animations, along with GSAP and Locomotive Scroll for smooth transitions and engaging interactions. With features like task reminders, calendar syncing, and email management.",
      demoLink: "https://www.example.com/crypto-verse",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section xl:px-20">
      <div className="container">
        <header className="section-header portfolio-header">
          <p>Our Portfolio</p>
          <h3>Explore Our Exceptional Work and Tailored Solutions</h3>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              className="project-item"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="project-image"
                />
                <div className="overlay" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                width={650}
                height={500}
                className="modal-image"
              />
              <h3 className="modal-title">{selectedProject.title}</h3>
              {/* <p className="modal-category">{selectedProject.category}</p> */}
              <p className="modal-description">{selectedProject.description}</p>
              {/* <button
                className="close-button"
              >
                Close
              </button> */}
              <div className="full-btn">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="button"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PortfolioSection;
