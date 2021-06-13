import './index.css';
import { Link } from 'react-router-dom';

const Card = ({ info }) => {
  return (
    <div  className="card">
      <img className="card__img" src={info.recipe.image} alt={info.recipe.label} />
      <div>
        <p className="card__title">{info.recipe.label}</p>
      </div>
      <div className="card__button">
        <Link to="#" className="card__info">more info</Link>
      </div>
    </div>
  );
};

export default Card;