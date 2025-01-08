// import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
import { useState } from "react";

function SigninModal({ openRegisterModal, onLogin, handleCloseClick, isOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = "Sign in";
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { email, password };
    onLogin(values);
  };

  return (
    <ModalWithForm
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      title={title}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
      </label>
      <input
        type="text"
        className="modal__input"
        id="email"
        name="email"
        placeholder="Email"
        aria-label="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        aria-label="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="modal__buttons-wrapper">
        <button
          type="submit"
          className="modal__submit modal__signin-btn"
          // onClick={onLogin}
        >
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
