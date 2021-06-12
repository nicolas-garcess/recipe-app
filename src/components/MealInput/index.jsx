import './index.css';

const MealInput = ({ mealValidation, isEmpty, invalid, invalidMessage }) => {
  return (
    <div className="meal-container">
      <label htmlFor="meal">Enter a meal</label>
      <input 
        type="text" 
        id="meal"
        name="meal"
        className="meal-container__input" 
        aria-required="true"
        aria-invalid={invalid}
        aria-describedby="meal-help-text" 
        required
        onChange={mealValidation}
      />
      <span 
        id="meal-help-text"
        className={`error ${isEmpty || invalid  ? "show": ""}`}
        role="alert"
      >
        {invalidMessage}
      </span>
    </div>
  );
};

export default MealInput;
