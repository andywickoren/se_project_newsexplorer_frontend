import React, { useState } from "react";
import "./ConfirmRegisterModal.css";
import close from "../../assets/close.svg";

function ConfirmRegisterModal({ openSigninModal, handleCloseClick }) {
  console.log(handleCloseClick);
  const handleOverlay = (e) => {
    e.target === e.currentTarget && handleCloseClick();
  };

  return (
    <div
      className="confirm-register-modal confirm-register-modal_opened"
      onClick={handleOverlay}
    >
      <div className="confirm-register-modal__content">
        <button
          onClick={handleCloseClick}
          type="button"
          className="confirm-register-modal__close"
          aria-label="close"
        >
          <img
            src={close}
            alt="close button"
            className="confirm-register-modal__close-icon"
          />
        </button>
        <div className="confirm-register-modal__message">
          <p className="confirm-register-modal__text">
            Registration succesfully completed!
          </p>

          <button
            onClick={openSigninModal}
            type="button"
            className="confirm-register-modal__login-button"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRegisterModal;
