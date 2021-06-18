import { useHistory } from 'react-router-dom';

const useRedirectPath = () => {
  const history = useHistory();

  const setPath = (path) => { 
    history.push(path);
  };

  return { setPath };
};

export default useRedirectPath;