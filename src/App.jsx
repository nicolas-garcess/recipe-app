import './App.css';
import StoreProvider from './components/Store/StoreProvider';
import Router from './components/Router';

const App = () => {
  return (
    <div className="App">
      <StoreProvider>
        <Router />
      </StoreProvider>
    </div>
  );
};

export default App;
