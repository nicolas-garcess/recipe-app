import { useStore } from '../Store/StoreProvider';
import { useEffect, useState } from 'react';
import './index.css';
import Card from '../Card';
import Pagination from '../Pagination';

const CookeryBook = () => {
  const local = localStorage.getItem('recipes');
  const { recipes } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);

  const data = local !== null ? JSON.parse(local) : recipes;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = data.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const changePage = (pageNumber, e) => {
    e.preventDefault();

    setCurrentPage(pageNumber)
  };

  useEffect(() => {
    if (local === null) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    return () => {
      localStorage.removeItem('recipes');
    }
  }, [recipes, local]);
  
  return (
    <div className="cookerybook">
      <div className="recipes">
        {currentRecipes.map((item, index) => (
          <Card key={index} info={item} />
        ))}
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        allRecipe={data.length}
        paginate={changePage}
      />
    </div>
  );
};

export default CookeryBook;