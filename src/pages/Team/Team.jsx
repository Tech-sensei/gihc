import React from "react";
import "./Team.scss";
import Modal from "../../components/Modal/Modal";
import { HiChevronDoubleDown } from "react-icons/hi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useGlobalContext } from "../../contexts/context";
import { teamMembers } from "../../data/data";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Team = () => {
  const {
    modalOpen,
    selectedTeamMember,
    handleTeamMemberClick,
    handleModalClose,
  } = useGlobalContext();

  return (
    <>
      <section className="header-bg section">
        <article className="header-bg__container">
          <div className="header-bg__container-contents">
            <h1 className="">TEAM LEADS</h1>
          </div>

          <Scroll
            to="next-section"
            smooth={true}
            duration={100}
            delay={0}
            offset={100}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="scroll-btn">
              <HiChevronDoubleDown />
              <span>Scroll Down</span>
            </div>
          </Scroll>
        </article>
      </section>

      <section className="section team" id="next-section">
        <article className="team__container container">
          <p className="team__container--desc"></p>

          <div className="team__container-contents">
            {teamMembers.map((teamMember) => {
              const { id, name, role, image, linkedin, instagram, twitter } =
                teamMember;
              return (
                <div
                  key={id}
                  className="team__contents-body"
                  onClick={() => handleTeamMemberClick(teamMember)}
                >
                  <div className="team__body-menu"></div>
                  <div>
                    <span className="team__list">
                      <span className="team__item">
                        <img src={image} alt={name} />
                      </span>
                    </span>
                  </div>

                  <div className="team__bio">
                    <h3>{name}</h3>
                    <p>{role}</p>
                    <div className="speaker__socials">
                      <Link
                        to={linkedin}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaLinkedin />
                      </Link>
                      <Link
                        to={instagram}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        to={twitter}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaTwitter />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <Modal
        selectedTeamMember={selectedTeamMember}
        handleClose={handleModalClose}
        modalOpen={modalOpen}
      />
    </>
  );
};

export default Team;
