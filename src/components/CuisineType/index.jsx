import './index.css';
import cuisineList from '../../services/listTypes/cuisineList';

const CuisineType = ({ name, inputValidation, invalid, invalidMessage }) => {
  return (
    <div className={`${name}-container`}>
      <label htmlFor={name} className={`${name}-container__label`}>cuisine</label>
      <select
        id={name}
        name={name}
        onChange={inputValidation}
        aria-describedby={`${name}-help-text`}
        defaultValue=""
        className={`${name}-container__input`}
        data-testid="list-change"
      >
          <option label="" value="" />
          {cuisineList.map(item => (
            <option
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
      </select>
      <span 
        id={`${name}-help-text`}
        className={`error ${invalid  ? "show": ""}`}
        role="alert"
        data-testid="error-message"
      >
        {invalidMessage}
      </span>
    </div>
  );
};

export default CuisineType;