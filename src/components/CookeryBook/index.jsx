import { useStore } from '../Store/StoreProvider';
import './index.css';
import Card from '../Card';

const CookeryBook = () => {
  const { recipes } = useStore();
  
  return (
    <div className="cookerybook">
    {recipes.map((item) => (
      <Card key={item.recipe.url} info={item} />
    ))}
    </div>
  );
};

export default CookeryBook;