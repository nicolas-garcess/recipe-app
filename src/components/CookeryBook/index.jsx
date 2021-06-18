import { useStore } from '../Store/StoreProvider';
import { useEffect, useState } from 'react';
import './index.css';
import Card from '../Card';
import Pagination from '../Pagination';

let data = [];
let currentRecipes = [];

const CookeryBook = () => {
  const storage = sessionStorage.getItem('recipes');
  const { recipes } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);
  
  (() => {
    data = storage !== null ? JSON.parse(storage) : recipes;
  
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    currentRecipes = data.slice(indexOfFirstRecipe, indexOfLastRecipe);
  })();

  const changePage = (pageNumber, e) => {
    e.preventDefault();

    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (storage === null) {
      sessionStorage.setItem('recipes', JSON.stringify(recipes));
    }
    return () => {
      sessionStorage.removeItem('recipes');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);
  
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
        curretPage={currentPage}
      />
    </div>
  );
};

export default CookeryBook;