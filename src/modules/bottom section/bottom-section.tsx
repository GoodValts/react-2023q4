import React, { useContext } from 'react';
import ApiContext from '../../common/controllers/apiController';
import PaginationContext from '../../common/controllers/paginationController';
import PageOptions from './pageOptions';
import Pagination from './pagination';
import ResultsBlock from './products';

const BottomSection = () => {
  const { products } = useContext(ApiContext);
  const { totalItems, limit } = useContext(PaginationContext);

  return (
    <section className="bottom-section">
      {products && totalItems > 0 && <PageOptions></PageOptions>}
      {products && <ResultsBlock products={products}></ResultsBlock>}
      {products && limit < totalItems && <Pagination></Pagination>}
    </section>
  );
};

export default BottomSection;
