import './index.css';
import { useState } from 'react';
import { useDispatch } from '../Store/StoreProvider';
import { TYPES } from '../Store/storeReducer';
import useRedirectPath from '../../hooks/useRedirectPath';
import MealInput from '../MealInput';
import HealthInput from '../HealthInput'
import CuisineType from '../CuisineType';
import Search from '../Search';
import Alert from '../Alert';
import fetchAPI from '../../services/api/fetchAPI';
import chooseList from '../../services/listTypes';
import useAlert from '../../hooks/useAlert';

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

const Form = () => {
  const [form, setForm] = useState(formInitialState);
  const {enableAlert, closeAlert, alert} = useAlert();
  const dispatch = useDispatch();
  const {setPath} = useRedirectPath();

  const searchRecipe = async (e) => {
    e.preventDefault();
    
    if (isInputCorrect(form.meal, 'meal') 
        && !form.health.invalid
        && !form.cuisineType.invalid) {

          const data = await fetchAPI(form);
          
          if (data === null) {
            enableAlert('There was an error with the query. Keep trying');
          } else if (data.hits.length > 0) {    
            let recipes = data.hits;
            
            dispatch({
              type: TYPES.FETCH_DATA,
              payload: recipes,
            });

            setPath('/recipes');
          } else {
            enableAlert('No results found');
          }
    } else {
      enableAlert('Invalid format');
    }
  };

  const isInputCorrect = (input, inputName) => {
    if (isAnInvalidFormat(input)) {
      setForm({
        ...form,
        [inputName]: {
          ...input, 
          invalid: true, 
          invalidMessage: 'Invalid format',
        },
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
        meal: {
          value: mealInput.value,
          isEmpty: true, 
          invalidMessage: 'Input is empty',
        },
        search: {disable:true},
      });
    } else {
      setForm({
        ...form,
        meal: {
          value: mealInput.value.toLowerCase(),
          isEmpty: false,
        },
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
          [input.name]: {
            value: '',
            invalid: true,
            invalidMessage: 'Invalid option',
          },
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

  return (
    <form className="form" id="form">
      <fieldset>
        <legend><h1 className="visuallyhidden form-title">find your recipe</h1></legend>
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
        <Search searchInfo={searchRecipe} isDisable={form.search.disable} />
        <Alert
          message={alert.message}
          invalid={alert.invalid}
          closeAlert={closeAlert}
        />
      </fieldset>
    </form>
  );
};

export default Form;
