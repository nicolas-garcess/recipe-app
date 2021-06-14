import './index.css';

const Search = ({ searchInfo, action }) => {
  return (
    <div className="search-container" role="search">
      <button
        onClick={(e) => searchInfo(e)}
        disabled={action}
        className="search-container__button"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
