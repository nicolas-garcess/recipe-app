import { useHistory } from 'react-router-dom';

// Hook to push to an inner page in the site
const useRedirectPath = () => {
  const history = useHistory();

  const setPath = (path) => { 
    history.push(path);
  };

  return { setPath };
};

export default useRedirectPath;