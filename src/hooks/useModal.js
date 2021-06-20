import { useState } from "react";

// Hook to show or close the modal when it is required
const useModal = (initialValue = false) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const openModal = () => {    
    setIsOpenModal(true);
  };

  const closeModal = () => {    
    setIsOpenModal(false);
  };

  return [isOpenModal, openModal, closeModal];
};

export default useModal;