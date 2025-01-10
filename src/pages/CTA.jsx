import React from "react";
import { NavLink } from "react-router";

function CTA() {
  return (
    <section id="hero-2" className="hero-2  xl:px-20">
      <div className="container text-center" data-aos="fade-in">
        <h1>Get Started Now ?</h1>
        <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          Zenth Solution is here to help you elevate your business. We offer
          customized solutions and innovative strategies designed to accelerate
          your business growth and ensure its success in the digital world.
        </p>
        <NavLink className="btn-get-started-2" href="#layanan-kita">
          Explore Our Services
        </NavLink>
        <NavLink className="btn-get-started-bot" href="#" onClick="ATC()">
          Contact Us
        </NavLink>
      </div>
    </section>
  );
}

export default CTA;
