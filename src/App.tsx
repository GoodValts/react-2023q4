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
  const searchValue = useAppSelector(selectSearchValue);
  const itemsPerPage = useAppSelector(selectItemsPerPage);
  const page = useAppSelector(selectPage);
  const id = useAppSelector(selectItemId);

  const { isFetching: isFetchingResults } = useGetResultsQuery({
    searchValue,
    itemsPerPage,
    page,
  });
  const { isFetching: isFetchingItem } = useGetItemQuery({ itemId: id || 0 });

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
