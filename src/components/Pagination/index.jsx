import './index.css';

const Pagination = ({ recipesPerPage, allRecipe, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipe / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page}>
            <a
              onClick={(e) => paginate(page, e)}
              href="!#"
              className="page-link"
            >
              {page}
            </a> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;