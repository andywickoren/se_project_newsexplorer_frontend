import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
import { useState } from "react";
import { simulateApiLoginCheck } from "../../utils/api";

function SigninModal({ openRegisterModal, onLogin, handleCloseClick, isOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const title = "Sign in";
  const otherBackendErrors = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    simulateApiLoginCheck({ email, password })
      .then((user) => {
        onLogin(user);
      })
      .catch((error) => {
        if (error.message === "Invalid email") {
          setEmailError("Invalid email");
        } else if (error.message === "Invalid password") {
          setPasswordError("Invalid password");
        }
      });
  };

  return (
    <ModalWithForm
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      title={title}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-wrapper">
        <label htmlFor="email" className="modal__label">
          Email
        </label>
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Enter email"
          aria-label="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="modal__error-message modal__error-message_email">
          {emailError}
        </span>
      </div>
      <div className="modal__input-wrapper">
        <label htmlFor="password" className="modal__label">
          Password
        </label>
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Enter password "
          aria-label="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="modal__error-message modal__error-message_password">
          {passwordError}
        </span>
      </div>
      <span className="modal__error-message-login-error">
        {otherBackendErrors}
      </span>
      <div className="modal__buttons-wrapper">
        <button type="submit" className="modal__submit modal__signin-btn">
          Sign in
        </button>

        <button
          type="button"
          className="modal__or-signup-btn"
          onClick={openRegisterModal}
        >
          <span className="modal__or">or</span>{" "}
          <span className="modal__signup">Sign up</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SigninModal;
