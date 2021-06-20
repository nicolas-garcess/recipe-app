import './index.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <h2 className="error404__subtitle">not found</h2>
      <Link
        to="/"
        className="home"
        aria-label="Go to home page"
        aria-describedby="homeButton"
      >
        home
      </Link>
      <div
        className="visuallyhidden"
        id="homeButton"
      >
        Cliking on this link you will be redirected to the home page
      </div>
    </div>
  );
};

export default Error;