const makeURL = (form) => {
    const APP_ID = process.env.REACT_APP_ID;
    const APP_KEY = process.env.REACT_APP_KEY;

    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=`

    for (const key in form) {
      if (key === 'meal') {
        let meal = form[key].value;
        url = `${url}${meal}&app_id=${APP_ID}&app_key=${APP_KEY}` ;
      } else if (form[key].value !== '' && !form[key].invalid && key !== 'search') {
        url = `${url}&${key}=${form[key].value}`;
      }
    }

    return url;
};

export default makeURL;
