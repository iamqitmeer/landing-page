import React from "react";

import "../index.css";
import "../App.css";
import logoDown from "../assets/img/logo-down.png";

import blog1 from "../assets/img/blog/blog-01/banner.webp";
import blog2 from "../assets/img/blog/blog-02/banner.webp";
import blog3 from "../assets/img/blog/blog-03/banner.webp";
import blog4 from "../assets/img/blog/blog-04/banner.webp";
function Footer() {
  return (
    <footer id="footer" className="footer xl:px-20">
      <div className="footer-top" data-aos="fade-in">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-md-6 footer-contact"
              data-aos="fade-in"
            >
              <img src={logoDown} alt="Zenth Solution Logo" />
              <p>
                Medan, Sumatera Utara
                <br />
                Indonesia
                <br />
                <strong>Phone :</strong>{" "}
                <a href="https://api.whatsapp.com/send?text=Halo%20Zenth%20Solution,%20Saya%20ingin%20Konsultasi%20Layanan%20Dengan%20Anda&phone=6281260779669">
                  0812-6077-9669
                </a>
                <br />
                <strong>Email :</strong>{" "}
                <a href="mailto:info@zenthsolution.com?subject=Halo%20Zenth%20Solution,%20Saya%20ingin%20konsultasi">
                  info@zenthsolution.com
                </a>
                <br />
              </p>
              <div className="social-links-abc">
                <a
                  style={{ margin: "0px 5px" }}
                  href="#"
                  className="facebook"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "30px" }}
                    className="ri-facebook-box-fill"
                  ></i>{" "}
                </a>
                <a
                  style={{ margin: "0px 5px" }}
                  href="#"
                  className="instagram"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "30px" }}
                    className="ri-instagram-fill"
                  ></i>{" "}
                </a>
                <a
                  style={{ margin: "0px 5px" }}
                  href="#"
                  className="linkedin"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "30px" }}
                    className="ri-linkedin-box-fill"
                  ></i>{" "}
                </a>
                <a
                  style={{ margin: "0px 5px" }}
                  href="#"
                  className="tiktok"
                  target="_blank"
                >
                  <i
                    style={{ fontSize: "30px" }}
                    className="ri-tiktok-line"
                  ></i>{" "}
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links" data-aos="fade-in">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Mobile App Development</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">SEO & Branding</a>
                </li>
                <li>
                  <a href="#">Blockchain Solutions</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links" data-aos="fade-in">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">About Zenth Solution</a>
                </li>
                <li>
                  <a href="#">Our Portfolio</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-blog" data-aos="fade-in">
              <h4>Our Latest Articles</h4>
              <ul>
                <li>
                  <img src={blog1} alt="Blog 1" />
                  <a href="#">
                    The Importance of Digital Marketing for Business Growth
                  </a>
                </li>
                <li>
                  <img src={blog2} alt="Blog 2" />
                  <a href="#">
                    How Effective Branding Sets You Apart in a Competitive
                    Market
                  </a>
                </li>
                <li>
                  <img src={blog3} alt="Blog 3" />
                  <a href="#">
                    Optimizing Your Website for Better User Experience
                  </a>
                </li>
                <li>
                  <img src={blog4} alt="Blog 4" />
                  <a href="#">Leveraging SEO to Boost Website Traffic</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © Copyright 2025 Zenth Solution™ - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
