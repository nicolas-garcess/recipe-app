import health from './healthList';
import cuisine from './cuisineList';

const LIST_TYPE = {
    HEATLH: 'health',
    CUISINE: 'cuisineType',  
};

// Define the list than will be shown 
const chooseList = (listName) => {
    switch (listName) {
      case LIST_TYPE.HEATLH:
        return health;
      case LIST_TYPE.CUISINE:
        return cuisine;
      default:
        return;
    }
};

export default chooseList;