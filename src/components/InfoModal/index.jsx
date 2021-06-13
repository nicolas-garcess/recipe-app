import './index.css';

const InfoModal = ({ isOpen, closeModal, info }) => {

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <article className="modal__dialog" onClick={handleModalDialogClick}>
        <header className="article-header">
          <h2 className="article-title">{info.recipe.label}</h2>
          <div className="close-container">
            <img src="https://www.materialui.co/materialIcons/navigation/close_black_256x256.png" alt="close-icon" className="close-icon" onClick={(e) => closeModal(e)}/>
          </div>
        </header>
        <main className="article-main">
          <div className="upper-main">
            <div>
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
    </div>
  );
};

export default InfoModal;