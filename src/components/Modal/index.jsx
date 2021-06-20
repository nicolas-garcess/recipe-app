import './index.css';

const Modal = ({ isOpen, closeModal, children }) => {

  // To avoid to close the modal if the client click on it
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
          aria-label="close"
          aria-describedby="descriptionClose"
          role="button"
          tabIndex="1"
        >
          <img
            src="https://www.materialui.co/materialIcons/navigation/close_black_256x256.png"
            alt="close-icon"
            className="close-icon"
            title="Close" 
          />
        </div>
        <div
          className="visuallyhidden"
          aria-describedby="descriptionClose"
        >
          Closing this window you will be on the page to watch all recipes
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;