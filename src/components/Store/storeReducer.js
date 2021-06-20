const TYPES = {
  FETCH_DATA: 'fetch',
};
  
const initialStore = {
  recipes: [],
};

// Reducer actions
const storeReducer = (state, action) => {
  switch (action.type) {
    case TYPES.FETCH_DATA:
      return {...state, recipes: action.payload};
    default:
      return state;
  }
};

export { initialStore, TYPES };
export default storeReducer;