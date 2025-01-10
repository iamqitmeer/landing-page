import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'
// import "../App.css";
// import "../index.css";

function HeroSection() {
  return (
    <section id="hero" className="hero xl:px-20">
    <div className="container position-relative">
      <div className="row gy-5 justify-content-between" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>
            Building Solutions, Designing <span>Success Everywhere</span>
          </h2>
          <p>
            We provide customized digital solutions that drive business
            growth and enhance user experiences. Our services focus on
            improving functionality, engagement, and overall performance.
            From websites to mobile apps and digital marketing, we ensure
            long-term success for every client.
          </p>
          <div className="flex justify-content-center justify-content-lg-start">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Learn More</span>
            </button>
          </div>
        </div>
        <div className="hero-img col-lg-5 order-1 order-lg-2">
          {/* <img
            src={heroImage}
            alt="artdev-official-img"
            data-aos="fade-in"
          /> */}
          <DotLottieReact
            src="https://lottie.host/7f3508f0-9b85-43fa-8378-06a5497da6a7/ULHIa2nanK.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  </section>  )
}

export default HeroSection