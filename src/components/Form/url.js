const makeURL = (form) => {
    const APP_ID = 'ccdedd84';
    const APP_KEY = '99f4720abfe124d1e696c539b77ec27c';

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
