import './index.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <h2 className="error404__subtitle">not found</h2>
      <Link to="/" className="home">home</Link>
    </div>
  );
};

export default Error;