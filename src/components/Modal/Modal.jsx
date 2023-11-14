import { useEffect } from "react";
import "../Modal/Modal.scss";
import { MdClose } from "react-icons/md";

const Modal = ({ selectedTeamMember, handleClose, modalOpen }) => {

  useEffect(() => {
    
    const handleOverlayClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        handleClose();
      }
    };

    const handleScroll = () => {
      modalOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "");
    };

    window.addEventListener("click", handleOverlayClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up event listeners on unmount
      window.removeEventListener("click", handleOverlayClick);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [handleClose, modalOpen]);

  if (!selectedTeamMember) return null;

  const { name, bio, image, role } = selectedTeamMember;

  return (
    <section
      className={`${modalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <article className="modal__container">
        <div className="modal__container-contents">
          <button onClick={handleClose} className="modal__close-btn">
            <MdClose />
          </button>
          <div className="team__summary">
            <div className="team__preview-header">
              <img src={image} alt={name} />
              <div className="team__preview-person">
                <h3 className="team__preview-name">{name}</h3>
                <p className="team__preview-role">{role}</p>
              </div>
            </div>

            <p className="team__preview-bio">{bio}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Modal;
