import React from "react";
import "./Footer.scss";
import Logo from "../../assets/svg/Logo.svg";
import { IoMdPaperPlane } from "react-icons/io";
import { PiWhatsappLogo } from "react-icons/pi";

import Instagram from "../../assets/svg/Instagram.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer section">
      <article className="footer__container container">
        <div className="footer__container--contents">
          <div className="footer__contents-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="footer__contents-email">
            <p>
              A networking community of great Ife students and alumni that
              serves as a model and inspires other educational and related
              institutions globally.
            </p>
            <h3>Subscribe to our newsletter</h3>

            <form className="email-wrapper">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="submit-btn flex">
                Subscribe
                <span className="submit-btn__arrow">
                  <IoMdPaperPlane />
                </span>
              </button>
            </form>
          </div>

          <div className="footer__contents-links-wrapper">
            <div className="footer__contents-links">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <a href="/">Events/Activities</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="footer__contents-links">
              <h3>Support Us</h3>
              <ul>
                <li>
                  <a href="/">Partner with us</a>
                </li>
                <li>
                  <a href="/">Sponsor</a>
                </li>
              </ul>
            </div>

            <div className="footer__contents-links">
              <h3>Connect with us</h3>
              <ul>
                <li>
                  <img src={Instagram} alt="instagram" />
                  <Link to="https://instagram.com/greatifehangoutcommunity?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    Instagram
                  </Link>
                </li>

                <li>
                  <img src={Twitter} alt="twitter" />
                  <Link to="https://twitter.com/GreatIfeHC?t=-gJZkQdn0sqFBN1-JhgnZw&s=09">
                    Twitter
                  </Link>
                </li>

                <li>
                  <img src={Linkedin} alt="linkedin" />
                  <Link to="https://www.linkedin.com/in/great-ife-hangout-community-819186296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <PiWhatsappLogo />
                  <Link to="https://urlxz.com/6s2x3t">WhapsApp</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__container--bottom flex">
          <p>© 2023 Great Ife Community Hangout. All rights reserved</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
