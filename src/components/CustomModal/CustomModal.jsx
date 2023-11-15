import React from "react";
import "./CustomModal.scss";
import { MdClose } from "react-icons/md";

import David from "../../assets/images/team/david.jpg";

const CustomModal = ({ isOpen, onClose,}) => {
  return (
    <>
      <section
        className={`${isOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
      >
        <article className="modal__container">
          <div className="modal__container-contents">
            <button onClick={onClose} className="modal__close-btn">
              <MdClose />
            </button>
            <div className="team__summary">
              <div className="team__preview-header">
                <img src={David} alt="david" />
                <div className="team__preview-person">
                  <h3 className="team__preview-name">David Adesina</h3>
                  <p className="team__preview-role">Managing Team Lead Abuja</p>
                </div>
              </div>

              <p className="team__preview-bio">
                David Adesina (popularly known as Gomina Dafidi, now Gomina of
                Abuja) is a graduate of Economics (class of 2016), where he
                served meritoriously as the Class Governor of his class for the
                entire duration of their stay on OAU Campus, winning several
                awards for his insightful leadership & sterling people
                management characteristics and qualities. The Great Ife Abuja
                Hangout, alongside the amazing team, is an avenue for fostering
                connections between both old Ife Alum, recent alums & current
                students of the great citadel of knowledge we're all proud of.
                Taking a cue from what the GIHC has pulled off in Lagos, the
                Abuja Hangout promises to bring fun, relaxation, meaningful
                conversations and above all push a sense of community amongst
                everyone directly affiliated with Great Ife residing within the
                Abuja metropolis. The 2023 Abuja Hangout (the first edition) is
                billed to happen in December 2023, possibly before Christmas,
                but plans are in motion to unveil the date and all other
                important details about the event to everyone.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default CustomModal;
