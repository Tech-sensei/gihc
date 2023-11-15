import React, { useState } from "react";
import "./AbujaSection.scss";
import David from "../../assets/images/team/david.jpg";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText, FaLinkedin, FaTwitter } from "react-icons/fa";
import CustomModal from "../../components/CustomModal/CustomModal";

const AbujaSection = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const toggleLogoutModal = () => {
    setLogoutModalOpen(!isLogoutModalOpen);
  };

  const handleLogout = () => {
    setLogoutModalOpen(false);
  };

  return (
    <>
      <section className="section abujaSection">
        <article className="abujaSection__container container">
          <div className="abujaSection__container--header">
            <h2>Meet the Organizing Team Lead for GIAH 1.0</h2>
          </div>

          <div className="abujaSection__container--content">
            <div className="past__speaker--body" onClick={toggleLogoutModal}>
              <div className="past__speaker--body-menu"></div>
              <div>
                <span className="past__speaker--list">
                  <span className="past__speaker--item">
                    <img src={David} alt="past-speaker" />
                  </span>
                </span>
              </div>
              <div className="team__bio">
                <h3>David Adesina</h3>
                <p>Managing Team Lead Abuja</p>

                <div className="speaker__socials">
                  <Link
                    to="https://www.linkedin.com/in/thedavidadesina"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin />
                  </Link>
                  <a
                    href="mailto:gominadafidi@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaEnvelopeOpenText />
                  </a>
                  <Link
                    to="https://twitter.com/gominathebrand"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <CustomModal
        isOpen={isLogoutModalOpen}
        onClose={toggleLogoutModal}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default AbujaSection;
