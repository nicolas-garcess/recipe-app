import './index.css';

const Search = ({ searchInfo, isDisable }) => {
  return (
    <div className="search-container" role="search">
      <button
        onClick={(e) => searchInfo(e)}
        disabled={isDisable}
        className={`search-container__button ${!isDisable ? "enable" : ""}`}
      >
        search
      </button>
    </div>
  );
};

export default Search;
