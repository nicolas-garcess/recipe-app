import { useStore } from '../Store/StoreProvider';
import { useEffect } from 'react';
import './index.css';
import Card from '../Card';

const local = localStorage.getItem('recipes');

const CookeryBook = () => {
  const { recipes } = useStore();

  const data = local !== null ? JSON.parse(local) : recipes;

  useEffect(() => {
    if(local === null) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    return () => {
      localStorage.removeItem('recipes');
    }
  }, [recipes]);
  
  return (
    <div className="cookerybook">
      {data.map((item) => (
        <Card key={item.recipe.url} info={item} />
      ))}
    </div>
  );
};

export default CookeryBook;