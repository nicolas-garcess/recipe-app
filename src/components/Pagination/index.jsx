import './index.css';

const Pagination = ({ recipesPerPage, allRecipe, paginate, curretPage }) => {
  const pageNumbers = [];
  
  // Define the number of pages that are needed to show all the recipes
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
              data-testid={`${page}-page`}
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