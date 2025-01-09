import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Neon Dreams",
      category: "Web Design",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/2cc135185656637.Y3JvcCwyMzAxLDE4MDAsNTEsMA.png",
      description:
        "A vibrant e-commerce platform with a neon-inspired design, featuring smooth animations and an intuitive user interface.",
      demoLink: "https://www.example.com/neon-dreams",
    },
    {
      id: 2,
      title: "EcoTrack",
      category: "Mobile App",
      image:
        "https://i.pinimg.com/736x/cf/ea/30/cfea305ef815385ef069b123625ee2c0.jpg",
      description:
        "An innovative app helping users reduce their carbon footprint through daily challenges and real-time tracking.",
      demoLink: "https://www.example.com/eco-track",
    },
    {
      id: 3,
      title: "MindfulAI",
      category: "AI / Machine Learning",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/4f9e8e139967569.6239762238d15.png",
      description:
        "An AI-powered meditation assistant that adapts to users' emotional states and provides personalized mindfulness exercises.",
      demoLink: "https://www.example.com/mindful-ai",
    },
    {
      id: 4,
      title: "CryptoVerse",
      category: "Blockchain",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/4fe0b2197781717.Y3JvcCwxNDQwLDExMjYsMCw4NQ.png",
      description:
        "A comprehensive cryptocurrency dashboard with real-time market data, predictive analytics, and portfolio management tools.",
      demoLink: "https://www.example.com/crypto-verse",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section xl:px-20" >
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
