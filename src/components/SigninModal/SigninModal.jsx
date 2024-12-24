// import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";

function SigninModal({ handleSignin, handleCloseClick, isOpen }) {
  return (
    <ModalWithForm handleCloseClick={handleCloseClick} isOpen={isOpen}>
      <label htmlFor="email" className="modal__label">
        Email
      </label>
      <input
        type="text"
        className="modal__input"
        id="email"
        name="email"
        placeholder="Email"
      />
      <label htmlFor="password" className="modal__label">
        Password
      </label>
      <input
        type="password"
        className="modal__input"
        id="password"
        name="password"
        placeholder="Password"
      />
      <div className="modal__buttons-wrapper">
        <button type="submit" className="modal__submit modal__signin-btn">
          Sign in
        </button>
        <button type="button" className="modal__or-signup-btn">
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SigninModal;
