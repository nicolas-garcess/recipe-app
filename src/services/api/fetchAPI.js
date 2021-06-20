import makeURL from './url';

// To fetch the data in the API
const fetchAPI = async (form) => {
    try {      
      let response = await fetch(makeURL(form));
      
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        return null;
      }   
    } catch (error) {
      return null;
    }
};

export default fetchAPI;