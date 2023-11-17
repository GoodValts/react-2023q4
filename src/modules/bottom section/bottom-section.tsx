import ItemBlock from './item';
import PageOptions from './select';
import Pagination from './pagination';
import ResultsBlock from './products';
import { useAppSelector } from '../../common/redux/hooks/appHooks';
import {
  selectItemId,
  selectItemsPerPage,
  selectPage,
} from '../../common/redux/reducers/viewMode';
import { selectSearchValue } from '../../common/redux/reducers/search';
import { useGetResultsQuery } from '../../common/API/apiService';

const BottomSection = () => {
  // const { products, isItem } = useContext(ApiContext);
  // const { totalItems, limit } = useContext(PaginationContext);

  // const results = useAppSelector(selectResults);
  const searchValue = useAppSelector(selectSearchValue);
  const itemsPerPage = useAppSelector(selectItemsPerPage);
  const page = useAppSelector(selectPage);
  const { data } = useGetResultsQuery({
    searchValue,
    itemsPerPage,
    page,
  });
  const products = data ? data.products : null;
  const limit = data ? data.limit : 0;
  const totalItems = data ? data.total : 0;

  const itemId = useAppSelector(selectItemId);

  return (
    <section className="bottom-section">
      <div className="search-page">
        {products && totalItems > 0 && <PageOptions></PageOptions>}
        <ResultsBlock></ResultsBlock>
        {products && limit < totalItems && <Pagination></Pagination>}
      </div>
      {itemId && <ItemBlock></ItemBlock>}
    </section>
  );
};

export default BottomSection;
