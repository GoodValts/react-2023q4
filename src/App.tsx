// import { useNavigate } from 'react-router-dom';
import {
  selectItemId,
  selectItemsPerPage,
  selectPage,
} from './common/redux/reducers/viewMode';
import { useAppSelector } from './common/redux/hooks/appHooks';
import BottomSection from './modules/bottom section/bottom-section';
import TopSection from './modules/top-section';
import { selectSearchValue } from './common/redux/reducers/search';
import { useGetItemQuery, useGetResultsQuery } from './common/API/apiService';

const App = () => {
  // const navigate = useNavigate();

  // const { limit, page, setTotalItems } = useContext(AppContext);
  // const {
  //   searchStr,
  //   // isLoading,
  //   setIsItem,
  //   // setIsLoading,
  //   setProducts,
  //   setSearchStr,
  // } = useContext(ApiContext);

  // const handleSearch = useCallback(async () => {
  //   try {
  //     setIsItem(false);
  //     // setIsLoading(true);

  //     const strToAPI =
  //       searchStr || localStorage.getItem('searchInputValue') || '';

  //     const apiResults = await getFromApi(strToAPI, limit, page);
  //     if (apiResults.products && apiResults.products.length > 0) {
  //       setProducts(apiResults.products);
  //       setTotalItems(apiResults.total);
  //       navigate(`./?search=${searchStr}&page=${page}`);
  //     } else {
  //       setSearchStr('');
  //       setProducts(null);
  //     }
  //   } catch (error) {
  //     throw new Error('failed to load from API');
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // }, [
  //   limit,
  //   page,
  //   searchStr,
  //   setSearchStr,
  //   setIsItem,
  //   setTotalItems,
  //   setProducts,
  //   // setIsLoading,
  //   navigate,
  // ]);

  // useEffect(() => {
  //   const localStr = localStorage.getItem('searchInputValue');

  //   if (localStr) dispatch(setSearchValue(localStr));
  //   // handleSearch();
  // }, [handleSearch, dispatch]);

  const searchValue = useAppSelector(selectSearchValue);
  const itemsPerPage = useAppSelector(selectItemsPerPage);
  const page = useAppSelector(selectPage);
  const id = useAppSelector(selectItemId);
  const { isFetching: isFetchingResults } = useGetResultsQuery({
    searchValue,
    itemsPerPage,
    page,
  });
  const { isFetching: isFetchingItem } = useGetItemQuery(id);

  return (
    <main>
      <header className="header">
        <h1 className="header__header">
          <s>StarWars Ships</s> Some crap
        </h1>
      </header>
      <TopSection />
      <BottomSection />
      {(isFetchingResults || isFetchingItem) && (
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
