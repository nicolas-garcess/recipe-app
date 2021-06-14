import './index.css';

const Modal = ({ isOpen, closeModal, children }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <div className="close-container" onClick={closeModal}>
          <img
            src="https://www.materialui.co/materialIcons/navigation/close_black_256x256.png"
            alt="close-icon"
            className="close-icon"
            title="Close"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;