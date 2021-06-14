import './index.css';

const Alert = ({ message, invalid , closeAlert}) => {
  return (
    <div className={`alert ${invalid && "alert-open"}`} role="alert">
      <div className="alert__dialog">
        <p className="alert__message">{message}</p>
        <div role="button" className="container-button">
          <button onClick={closeAlert} className="alert__button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;