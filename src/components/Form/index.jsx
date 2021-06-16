import './index.css';
import { useState } from 'react';
import { useDispatch } from '../Store/StoreProvider';
import { TYPES } from '../Store/storeReducer';
import MealInput from '../MealInput';
import HealthInput from '../HealthInput'
import CuisineType from '../CuisineType';
import Search from '../Search';
import health from '../HealthInput/healthList';
import cuisine from '../CuisineType/cuisineList';
import makeURL from './url';
import { useHistory } from 'react-router-dom';
import Alert from '../Alert';

const formInitialState = {
  meal: {
    value: '',
    isEmpty: false,
    invalid: false,
    invalidMessage: '',
  },
  health: {
    value: '',
    invalid: false,
    invalidMessage: '',
  },
  cuisineType: {
    value: '',
    invalid: false,
    invalidMessage: '',
  },
  search: {
    disable: true,
  },
};

const initialAlert = {
  message: '',
  invalid: false,
};

const Form = () => {
  const [form, setForm] = useState(formInitialState);
  const [alertPopUp, setAlertPopUp] = useState(initialAlert);
  // const { recipes } = useStore();
  const dispatch = useDispatch();
  const history = useHistory();
  //console.log("hola");

  const searchRecipe = async (e) => {
    e.preventDefault();
    
    if (isInputCorrect(form.meal, 'meal') 
        && !form.health.invalid
        && !form.cuisineType.invalid) {

          const data = await fetchAPI();
          
          if (data === null) {
            handleAlertPopUp('There was an error with the query. Keep trying', true);
          } else if (data.hits.length > 0) {    
            let recipes = data.hits;
            
            dispatch({
              type: TYPES.FETCH_DATA,
              payload: recipes,
            });
            history.push('/recipes');
          } else {
            handleAlertPopUp('No results found', true);
          }
    } else {
      handleAlertPopUp('Invalid format', true);
    }
  };

  const fetchAPI = async () => {
    try {      
      let response = await fetch(makeURL(form), {
        method: 'get',
      });
      //console.log(response)
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

  const closeAlert = (e) => {
    e.preventDefault();
    setAlertPopUp({
      message: '',
      invalid: false,
    });
  };

  const handleAlertPopUp = (message, invalid) => {
    setAlertPopUp({
      message,
      invalid,
    });
  };

  const isInputCorrect = (input, inputName) => {
    if (isAnInvalidFormat(input)) {
      setForm({
        ...form,
        [inputName]: { ...input, invalid: true, invalidMessage: 'Invalid format' },
      });

      return false;
    }

    return true;
  };

  const isAnInvalidFormat = (input) => {
    const FORMAT_SPECIAL_CHARS = /[`!@#$%^&*()_+\-=[\]{};:"\\|,.<>/¿?~]/;
    const FORMAT_NUMBERS = /\d/;

    return FORMAT_SPECIAL_CHARS.test(input.value) 
           || FORMAT_NUMBERS.test(input.value)
           || form.meal.value === '';
  };

  const handleMealChange = (e) => {
    const mealInput = e.target;

    if (mealInput.value === '') {
      setForm({
        ...form,
        meal: {value: mealInput.value, isEmpty: true, invalidMessage: 'Input is empty',},
        search: {disable:true},
      });
    } else {
      setForm({
        ...form,
        meal: {value: mealInput.value.toLowerCase(), isEmpty: false,},
        search: {disable:false},
      });
    }
  };

  const handleListChange = (e) => {
    const input = e.target;

    let list = chooseList(input.name);
    if (list !== undefined) {
      const decision = list.some((item) => item.value === input.value);

      if (!decision && input.value !== '') {
        setForm({
          ...form,
          [input.name]: {value: '', invalid: true, invalidMessage: 'Invalid option',},
          search: {disable:true},
        });
      } else {
        setForm({
          ...form,
          [input.name]: {value: input.value, invalid: false,},
          search: {disable: form.meal.isEmpty},
        });
      }
    }
  };

  const chooseList = (listName) => {
    switch (listName) {
      case 'health':
        return health;
      case 'cuisineType':
        return cuisine;
      default:
        break;
    }
  };

  return (
    <form className="form" id="form">
      <fieldset>
        <MealInput
          mealValidation={handleMealChange}
          isEmpty={form.meal.isEmpty}
          invalid={form.meal.invalid}
          invalidMessage={form.meal.invalidMessage}
        />
        <HealthInput
          name="health"
          inputValidation={handleListChange}
          invalid={form.health.invalid}
          invalidMessage={form.health.invalidMessage}
        />
        <CuisineType
          name="cuisineType"
          inputValidation={handleListChange}
          invalid={form.cuisineType.invalid}
          invalidMessage={form.cuisineType.invalidMessage}
        />
        <Search searchInfo={searchRecipe} action={form.search.disable} />
        <Alert message={alertPopUp.message} invalid={alertPopUp.invalid} closeAlert={closeAlert} />
      </fieldset>
    </form>
  );
};

export default Form;
