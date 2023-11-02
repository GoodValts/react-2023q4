import React, { useEffect, useState } from 'react';
import getFromApi from './common/API/apiFunc';
import BottomSection from './modules/bottom section/bottom-section';
import TopSection from './modules/top-section';
import { responseInterface } from './types/Interfaces';

const emptyObj = {
  limit: 0,
  total: 0,
  skip: 0,
  products: [],
};

const App = () => {
  const [results, setResults] = useState<responseInterface>(emptyObj);
  const [loading, setLoading] = useState(false);
  const localStr = localStorage.getItem('searchInputValue') || '';

  const handleSearch = async (searchValue: string) => {
    try {
      setLoading(true);

      console.log('getFromApi start func');

      const apiResults = await getFromApi(searchValue, 5, 0);
      if (apiResults.products && apiResults.products.length > 0) {
        setResults(apiResults);
      } else {
        setResults(emptyObj);
      }
    } catch (error) {
      throw new Error('failed to load from API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(localStr);
  }, [localStr]);

  return (
    <main>
      <header className="header">
        <h1 className="header__header">StarWars Ships</h1>
      </header>
      <TopSection onSearch={handleSearch} />
      <BottomSection results={results} />
      {loading && (
        <div className="user-message">
          <img
            className="user-message__loading"
            src="/src/assets/loading.gif"
            alt="loading"
          />
        </div>
      )}
    </main>
  );
};

export default App;
