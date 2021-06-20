import { useState } from "react";

// Hook to show or close an alert when it is required
const useAlert = (initialValue = {message: '', invalid: false}) => {
  const [alert, setAlert] = useState(initialValue);

  const enableAlert = (message) => {    
    setAlert({message, invalid: true});
  };

  const closeAlert = () => {
    setAlert({message: '', invalid: false});
  };

  return { enableAlert, closeAlert, alert };
};

export default useAlert;