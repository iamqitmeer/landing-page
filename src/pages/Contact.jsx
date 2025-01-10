import React, { useRef } from "react";
import aboutImage from "../assets/img/about/1.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hap4omw", "template_1r123vt", form.current, {
        publicKey: "sq6oT6-Gf52_hmzwP",
      })
      .then(
        () => {
          alert("Email has been Send Succesfully");
        },
        (error) => {
          console.log("Something went wrong... ", error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact-section  xl:px-20">
      <div className="container">
        <div className="section-title-new" data-aos="fade-in">
          <span className="heading">Contact Us</span>
          <p className="subheading">
            We’d Love to Hear from You <br /> Reach Out to Us for Any Queries
          </p>
        </div>
        <div className="contact-content">
          {/* Left Side - Image */}
          <div className="contact-image">
            <img src={aboutImage} alt="Contact" />
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Message</label>
                <textarea
                  id="subject"
                  placeholder="Enter Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="flex justify-center w-full gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#7cda00] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Submit
                <svg
                  class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    class="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
