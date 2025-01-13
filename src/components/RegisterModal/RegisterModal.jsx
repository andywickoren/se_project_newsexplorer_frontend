import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import { simulateApiEmailCheck } from "../../utils/api";

function RegisterModal({
  handleSignup,
  handleCloseClick,
  isOpen,
  openSigninModal,
}) {
  const title = "Sign up";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!e.target.validity.valid) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    setUsername(usernameValue);

    if (usernameValue.trim() === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmissionError("");

    if (!email || !password || !username) {
      if (!email) setEmailError("Email is required");
      if (!password) setPasswordError("Password is required");
      if (!username) setUsernameError("Username is required");
      return;
    }

    simulateApiEmailCheck(email)
      .then(() => {
        handleSignup();
      })
      .catch((error) => {
        setSubmissionError(error.message);
      });
  };

  return (
    <ModalWithForm
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      title={title}
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
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <span className="modal__error-message modal__error-message_email">
          {emailError}
        </span>
      </div>

      {/* <span className="modal__password-error-message">{passwordError}</span> */}

      <div className="modal__input-wrapper">
        <label htmlFor="password" className="modal__label">
          Password
        </label>
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <span className="modal__error-message modal__error-message_password">
          {passwordError}
        </span>
      </div>
      <div className="modal__input-wrapper">
        <label htmlFor="username" className="modal__label">
          Username
        </label>
        <input
          type="text"
          className="modal__input"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <span className="modal__error-message modal__error-message_username">
          {usernameError}
        </span>
      </div>

      <div className="modal__buttons-wrapper">
        <span className="modal__error-message_register-error">
          {submissionError}
        </span>
        <button
          type="submit"
          className="modal__submit modal__signin-btn"
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <button
          type="button"
          className="modal__or-signup-btn"
          onClick={openSigninModal}
        >
          <span className="modal__or">or </span>
          <span className="modal__signup">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
