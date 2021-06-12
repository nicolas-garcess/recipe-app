import './index.css';

const Search = ({ searchInfo, action }) => {
  return (
    <div className="search-button" role="search">
      <button onClick={(e) => searchInfo(e)} disabled={action}>Search</button>
    </div>
  );
};

export default Search;
