import GoBack from '../GoBack';
import './index.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <GoBack />
    </header>
  );
};

export default Header;