import useModal from '../../hooks/useModal';
import InfoModal from '../InfoModal';
import './index.css';

const Card = ({ info }) => {
  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <div className="card">
      <img
        className="card__img"
        src={info.recipe.image}
        alt={info.recipe.label}
      />
      <div>
        <p className="card__title">{info.recipe.label}</p>
      </div>
      <div className="card__button" role="button">
        <button
          onClick={openModal}
          className="card__info"
          aria-label="open"
          aria-describedby="openModalButton"
        >
          more info
        </button>
        <div className="visuallyhidden" id="openModalButton">Open the modal you can acces to more information of the recipe</div>
      </div>
      <InfoModal info={info} isOpen={isOpenModal} closeModal={closeModal} />
    </div>
  );
};

export default Card;