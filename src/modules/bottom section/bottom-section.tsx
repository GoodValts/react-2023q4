import ItemBlock from './item';
import PageOptions from './select';
import Pagination from './pagination';
import ResultsBlock from './products';
import { useAppSelector } from '../../hooks';
import { selectItemId } from '../../common/redux/viewMode';
import { selectResults } from '../../common/redux/search';

const BottomSection = () => {
  // const { products, isItem } = useContext(ApiContext);
  // const { totalItems, limit } = useContext(PaginationContext);

  const results = useAppSelector(selectResults);
  const products = results ? results.products : null;
  const limit = results ? results.limit : 0;
  const totalItems = results ? results.total : 0;

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
