import { useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromApi } from './common/API/apiFunc';
import ApiContext from './common/controllers/apiContext';
import AppContext from './common/controllers/paginationContext';
import BottomSection from './modules/bottom section/bottom-section';
import TopSection from './modules/top-section';

const App = () => {
  const navigate = useNavigate();

  const { limit, page, setTotalItems } = useContext(AppContext);
  const {
    searchStr,
    isLoading,
    setIsItem,
    setIsLoading,
    setProducts,
    setSearchStr,
  } = useContext(ApiContext);

  const handleSearch = useCallback(async () => {
    try {
      setIsItem(false);
      setIsLoading(true);

      // console.log('searchStr=', searchStr);

      const strToAPI =
        searchStr || localStorage.getItem('searchInputValue') || '';

      const apiResults = await getFromApi(strToAPI, limit, page);
      if (apiResults.products && apiResults.products.length > 0) {
        setProducts(apiResults.products);
        setTotalItems(apiResults.total);
        navigate(`./?search=${searchStr}&page=${page}`);
      } else {
        // console.log('!apiResults.products');
        setSearchStr('');
        setProducts(null);
      }
    } catch (error) {
      throw new Error('failed to load from API');
    } finally {
      setIsLoading(false);
    }
  }, [
    limit,
    page,
    searchStr,
    setSearchStr,
    setIsItem,
    setTotalItems,
    setProducts,
    setIsLoading,
    navigate,
  ]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <main>
      <header className="header">
        <h1 className="header__header">
          <s>StarWars Ships</s> Some crap
        </h1>
      </header>
      <TopSection />
      <BottomSection />
      {isLoading && (
        <div className="user-message" data-testid="loader">
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
