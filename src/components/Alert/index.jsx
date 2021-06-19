import './index.css';

const Alert = ({ message, invalid, closeAlert}) => {
  return (
    <div
      className={`alert ${invalid ? "alert-open" : ""}`}
      data-testid="alert"
      role="alert"
    >
      <div className="alert__dialog">
        <p className="alert__message">{message}</p>
        <div
          role="button"
          onClick={closeAlert}
          className="alert__button"
          data-testid="alert__button"
        >
          close
        </div>
      </div>
    </div>
  );
};

export default Alert;