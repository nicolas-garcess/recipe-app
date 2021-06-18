import './index.css';

const MealInput = ({ mealValidation, isEmpty, invalid, invalidMessage }) => {
  return (
    <div className="meal-container">
      <label htmlFor="meal" className="meal-container__label">enter a meal</label>
      <input 
        type="text" 
        id="meal"
        name="meal"
        className="meal-container__input" 
        aria-required="true"
        aria-invalid={invalid}
        aria-describedby="meal-help-text" 
        required
        placeholder="required*"
        onChange={mealValidation}
        data-testid="meal-change"
      />
      <span 
        id="meal-help-text"
        className={`error ${isEmpty || invalid  ? "show": ""}`}
        role="alert"
        data-testid="error-message"
      >
        {invalidMessage}
      </span>
    </div>
  );
};

export default MealInput;
