import './index.css';

const AnyInput = ({ name, inputValidation, invalid, invalidMessage }) => {
  return (
    <div className={`${name}-container`}>
      <label htmlFor={name}>Enter {name}</label>
      <input 
        type="text" 
        id={name}
        name={name}
        className={`${name}-container__input`} 
        aria-invalid={invalid}
        aria-describedby={`${name}-help-text`}
        required
        onChange={inputValidation}
      />
      <span 
        id={`${name}-help-text`}
        className={`error ${invalid  ? "show": ""}`}
        role="alert"
      >
      {invalidMessage}
      </span>
    </div>
  );
};

export default AnyInput;