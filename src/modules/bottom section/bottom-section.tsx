import React, { useContext } from 'react';
import ApiContext from '../../common/controllers/apiContext';
import PaginationContext from '../../common/controllers/paginationContext';
import ItemBlock from './item';
import PageOptions from './pageOptions';
import Pagination from './pagination';
import ResultsBlock from './products';

const BottomSection = () => {
  const { products, isItem } = useContext(ApiContext);
  const { totalItems, limit } = useContext(PaginationContext);

  return (
    <section className="bottom-section">
      <div className="search-page">
        {products && totalItems > 0 && <PageOptions></PageOptions>}
        {products && <ResultsBlock></ResultsBlock>}
        {products && limit < totalItems && <Pagination></Pagination>}
      </div>
      {isItem && <ItemBlock></ItemBlock>}
    </section>
  );
};

export default BottomSection;
