import './index.css';

const Pagination = ({ recipesPerPage, allRecipe, paginate, curretPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipe / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page} className={`${(curretPage === page) ? "selected-page": ""}`}>
            <a
              onClick={(e) => paginate(page, e)}
              href="!#"
              className="page-link"
              {...((curretPage === page) ? {"aria-current": "page"}: {})}
            >
              <span className="visuallyhidden">page</span>
              {page}
            </a> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;