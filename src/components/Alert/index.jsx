import './index.css';

const Alert = ({ message, invalid , closeAlert}) => {
  return (
    <div className={`alert ${invalid && "alert-open"}`} role="alert">
      <div className="alert__dialog">
        {message}
        <div role="button" >
          <button onClick={closeAlert}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;