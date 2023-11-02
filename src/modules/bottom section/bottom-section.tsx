import React from 'react';
import { BottomSectionInterface } from '../../types/Interfaces';
import Pagination from './pagination';
import ResultsBlock from './results';

const BottomSection = ({ results }: BottomSectionInterface) => {
  return (
    <section className="bottom-section">
      <ResultsBlock results={results}></ResultsBlock>
      {results && results.products.length > results.total && (
        <Pagination currentPage={1} totalPages={2}></Pagination>
      )}
    </section>
  );
};

export default BottomSection;
