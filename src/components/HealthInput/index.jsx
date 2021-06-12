import './index.css';
import healthList from './healthList';

const HealthInput = ({ name, inputValidation, invalid, invalidMessage }) => {
  return (
    <div className={`${name}-container`}>
      <label htmlFor={name} className={`${name}-label`}>{name}</label>
      <select id={name} name={name} onChange={inputValidation} aria-describedby={`${name}-help-text`} defaultValue="">
          <option label="" value="" />
          {healthList.map(item => (
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
      >
        {invalidMessage}
      </span>
    </div>
  );
};

export default HealthInput;