// Copyright Luis Cabrera at https://www.youtube.com/watch?v=UVBUhi5Oaiw
import { createContext, useContext, useReducer } from 'react';
import storeReducer, { initialStore } from './storeReducer';

// Create the context that every component can access to
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default StoreProvider;