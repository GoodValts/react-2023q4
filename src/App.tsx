import React, { useEffect, useContext, useCallback } from 'react';
import { getFromApi } from './common/API/apiFunc';
import ApiContext from './common/controllers/apiContext';
import AppContext from './common/controllers/paginationContext';
import BottomSection from './modules/bottom section/bottom-section';
import TopSection from './modules/top-section';

const App = () => {
  const { limit, page, setTotalItems } = useContext(AppContext);
  const { isLoading, setIsLoading, setProducts } = useContext(ApiContext);
  const localStr = localStorage.getItem('searchInputValue') || '';

  const handleSearch = useCallback(
    async (searchValue: string) => {
      try {
        setIsLoading(true);

        const apiResults = await getFromApi(searchValue, limit, page);
        if (apiResults.products && apiResults.products.length > 0) {
          setProducts(apiResults.products);
          setTotalItems(apiResults.total);
        } else {
          setProducts(null);
        }
      } catch (error) {
        throw new Error('failed to load from API');
      } finally {
        setIsLoading(false);
      }
    },
    [limit, page, setTotalItems, setProducts, setIsLoading]
  );

  useEffect(() => {
    handleSearch(localStr);
  }, [localStr, handleSearch]);

  return (
    <main>
      <header className="header">
        <h1 className="header__header">
          <s>StarWars Ships</s> Some crap
        </h1>
      </header>
      <TopSection onSearch={handleSearch} />
      <BottomSection />
      {isLoading && (
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
