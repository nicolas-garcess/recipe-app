import { useState } from "react";

const useAlert = (initialValue = {message: '', invalid: false}) => {
  const [alert, setAlert] = useState(initialValue);

  const enableAlert = (message) => {    
    setAlert({message, invalid: true});
  };

  const closeAlert = () => {
    setAlert({message: '', invalid: false});
  };

  return {enableAlert, closeAlert, alert};
};

export default useAlert;