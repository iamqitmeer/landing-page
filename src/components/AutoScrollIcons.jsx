import React, { useEffect, useRef } from "react";
import "./../App.css";

const AutoScrollIcons = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      scrollAmount += 2; // Pixels to scroll on each interval
      if (scrollContainer) {
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0; // Reset to start when end is reached
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth", // Smooth scrolling effect
        });
      }
    };

    const scrollInterval = setInterval(autoScroll, 50); // Adjust interval timing as needed

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <section id="about-100" className="about-100">
    <div className="container" data-aos="fade-in">
      <div className="row align-items-center gy-5">
        <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
          <div className="section-title-new" data-aos="fade-in">
            <p>Our Expertise</p>
            <h2>
              We Bring Expertise to Create Efficient and Scalable Solutions
            </h2>
          </div>
  
          <div
            ref={scrollContainerRef}
            className="scroll-container"
            data-aos="fade-in"
            data-aos-delay={100}
          >
            {[
              "ri-html5-fill",
              "ri-css3-fill",
              "ri-javascript-fill",
              "ri-tailwind-css-fill",
              "ri-bootstrap-fill",
              "ri-reactjs-line",
              "ri-nodejs-line",
              "ri-firebase-line",
              "ri-database-2-fill",
              "ri-nextjs-fill",
              "ri-angularjs-line",
              "ri-flutter-fill",
              "ri-openai-fill",
              "ri-github-fill",
              "ri-copilot-fill",
              "ri-npmjs-line",
            ].map((iconClass, index) => (
              <div key={index} className="service-item">
                <i
                  className={`${iconClass} icon-i`}
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default AutoScrollIcons;

// import React, { useEffect, useRef } from "react";
// import "./../App.css";

// const AutoScrollIcons = () => {
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     let scrollAmount = 0;

//     const autoScroll = () => {
//       scrollAmount -= 2; // Decrease pixels to scroll on each interval for right to left scroll

//       if (scrollContainer) {
//         if (scrollAmount <= 0) {
//           // Reset scrollAmount to scrollContainer.scrollWidth to create the infinite scroll effect
//           scrollAmount = scrollContainer.scrollWidth;
//         }

//         scrollContainer.scrollTo({
//           left: scrollAmount,
//           behavior: "smooth", // Smooth scrolling effect
//         });
//       }
//     };

//     const scrollInterval = setInterval(autoScroll, 50); // Adjust interval timing as needed

//     return () => clearInterval(scrollInterval); // Cleanup on unmount
//   }, []);

//   return (
//     <section id="about-100" className="about-100">
//       <div className="container" data-aos="fade-in">
//         <div className="row align-items-xl-center gy-5">
//           <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
//             <div className="section-title-new" data-aos="fade-in">
//               <p>Our Expertise</p>
//               <h2>
//                 We Bring Expertise to Create Efficient and Scalable Solutions
//               </h2>
//             </div>

//             <div
//               ref={scrollContainerRef}
//               className="scroll-container"
//               data-aos="fade-in"
//               data-aos-delay={100}
//             >
//               {/* Service Icons */}
//               {[
//                 "ri-html5-fill",
//                 "ri-css3-fill",
//                 "ri-javascript-fill",
//                 "ri-tailwind-css-fill",
//                 "ri-bootstrap-fill",
//                 "ri-reactjs-line",
//                 "ri-nodejs-line",
//                 "ri-firebase-line",
//                 "ri-database-2-fill",
//                 "ri-database-2-fill",
//                 "ri-database-2-fill",
//               ].map((iconClass, index) => (
//                 <div key={index} className="service-item">
//                   <i
//                     className={`${iconClass} icon-i`}
//                     style={{ fontSize: "4rem", color: "#fff" }}
//                   ></i>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AutoScrollIcons;
