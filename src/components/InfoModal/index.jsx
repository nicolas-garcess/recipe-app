import Modal from '../Modal';
import './index.css';

const InfoModal = ({ info, isOpen, closeModal }) => {

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <article className="article">
        <header className="article-header">
          <h2 className="article-title">{info.recipe.label}</h2>
        </header>
        <main className="article-main">
          <div className="upper-main">
            <div className="container-left">
              <div className="container-cuisine">
                <h3 className="cuisine">cuisine type</h3>
                <p className="types">{info.recipe.cuisineType}</p>
              </div>
              <div className="article__img">
                <img src={info.recipe.image} alt={info.recipe.label} />
              </div>
            </div>
            <div className="container-ingredients">
              <h4 className="ingredient-title">ingredients</h4>

              {info.recipe.ingredientLines.map((item) => (
                <p key={item} className="ingredient">{item}</p>
              ))}
            </div>
          </div>
          <div className="external-link">
            <a href={info.recipe.url} target="blank"> full recipe </a>
          </div>
        </main>
      </article>
    </Modal>  
  );
};

export default InfoModal;