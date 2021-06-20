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
          aria-label="close"
          aria-describedby="closeAlertButton"
        >
          close
        </div>
        <div
          className="visuallyhidden"
          id="closeAlertButton"
        >
          Closing this alert you will be on the form site and you can enter new values
        </div>
      </div>
    </div>
  );
};

export default Alert;