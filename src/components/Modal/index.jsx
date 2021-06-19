import './index.css';

const Modal = ({ isOpen, closeModal, children }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${isOpen && "modal-open"}`}
      onClick={closeModal}
      data-testid="modal"
    >
      <div
        className="modal__dialog"
        data-testid="modal__dialog"
        onClick={handleModalDialogClick}
      >
        <div
          className="close-container"
          data-testid="close-container"
          onClick={closeModal}
          onKeyPress={closeModal}
        >
          <img
            src="https://www.materialui.co/materialIcons/navigation/close_black_256x256.png"
            alt="close-icon"
            className="close-icon"
            title="Close"
            role="button"
            tabIndex="1"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;