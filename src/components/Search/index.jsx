import './index.css';

const Search = ({ searchInfo, isDisable }) => {
  return (
    <div className="search-container" role="search">
      <button
        onClick={(e) => searchInfo(e)}
        disabled={isDisable}
        className={`search-container__button ${!isDisable ? "enable" : ""}`}
        data-testid="search-button"
        aria-describedby="searchButton"
      >
        search
      </button>
      <div className="visuallyhidden" id="searchButton">You will see all recipes clicking on this button</div>
    </div>
  );
};

export default Search;
