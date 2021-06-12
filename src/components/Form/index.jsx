import './index.css';
import MealInput from '../MealInput';
import HealthInput from '../HealthInput'
import CuisineType from '../CuisineType';
import Search from '../Search';
import { useState } from 'react';
import health from '../HealthInput/healthList';
import cuisine from '../CuisineType/cuisineList';
import makeURL from './url';

const formInitialState = {
  meal: {
    value: '',
    isEmpty: true,
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
  console.log("hola");

  const fetchAPI = async (e) => {
    e.preventDefault();
    
    if (isInputCorrect(form.meal, 'meal') 
        && !form.health.invalid
        && !form.cuisineType.invalid) {
      
      console.log(makeURL(form));
      let response = await fetch(makeURL(form),
        {
        method: 'get',
      });

      let data = await response.json();
      console.log(data);
    }
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
    const FORMAT_SPECIAL_CHARS = /[ `!@#$%^&*()_+\-=[\]{};:"\\|,.<>/¿?~]/;
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
        console.log("entra");
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
    <form className="form">
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
      <Search searchInfo={fetchAPI} action={form.search.disable} />
    </form>
  );
};

export default Form;
