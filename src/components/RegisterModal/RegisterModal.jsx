// import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function SigninModal({
  handleSignup,
  handleCloseClick,
  isOpen,
  openSigninModal,
}) {
  const title = "Sign up";
  return (
    <ModalWithForm
      handleCloseClick={handleCloseClick}
      isOpen={isOpen}
      title={title}
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
      <label htmlFor="email" className="modal__label">
        Username
      </label>
      <input
        type="text"
        className="modal__input"
        id="username"
        name="username"
        placeholder="Username"
      />
      <div className="modal__buttons-wrapper">
        <button
          type="submit"
          className="modal__submit modal__signin-btn"
          onClick={handleSignup}
        >
          Sign up
        </button>
        <button
          type="button"
          className="modal__or-signup-btn"
          onClick={openSigninModal}
        >
          <span className="modal__or">or</span>{" "}
          <span className="modal__signup">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default SigninModal;
