import "./ModalWithForm.css";
import close from "../../assets/close.png";

function ModalWithForm({
  children,
  handleCloseClick,
  isOpen,
  title,
  onSubmit,
}) {
  const handleOverlay = (e) => {
    e.target === e.currentTarget && handleCloseClick();
  };
  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={handleOverlay}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className={`modal__close ${
            title === "Sign in" ? "modal__close-signin" : "modal__close-signup"
          }`}
          aria-label="close"
        >
          <img src={close} alt="Close modal" className="modal__close-icon" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
