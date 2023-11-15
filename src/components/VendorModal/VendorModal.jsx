import React from "react";
import "./VendorModal.scss";
import { MdClose } from "react-icons/md";
import VendorImg from "../../assets/images/vendor.jpg";

const VendorModal = ({ isOpen, onClose }) => {
  return (
    <section
      className={`${isOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <article className="vendor__container">
        <div className="modal__container-contents">
          <button onClick={onClose} className="modal__close-btn">
            <MdClose />
          </button>
        </div>
        <figure>
          <img src={VendorImg} alt="vendor" />
        </figure>
      </article>
    </section>
  );
};

export default VendorModal;
