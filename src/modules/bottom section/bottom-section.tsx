import React from 'react';
import { BottomSectionInterface } from '../../types/Interfaces';
import PageOptions from './pageOptions';
import Pagination from './pagination';
import ResultsBlock from './results';

const BottomSection = ({ results }: BottomSectionInterface) => {
  console.log('results=', results);

  return (
    <section className="bottom-section">
      {results && results.total > 0 && <PageOptions></PageOptions>}
      <ResultsBlock results={results}></ResultsBlock>
      {results && results.limit < results.total && (
        <Pagination
          currentPage={results.skip / results.limit + 1}
          totalItems={results.total}
          limit={results.limit}
        ></Pagination>
      )}
    </section>
  );
};

export default BottomSection;
