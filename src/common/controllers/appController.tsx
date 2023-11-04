import { useState, ReactNode, useMemo } from 'react';
import ApiContent from './apiController';
import PaginationContent from './paginationController';
import { productParams } from '../../types/Interfaces';

const AppContentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<productParams[] | null>(null);
  const apiValue = useMemo(() => {
    return {
      products,
      setProducts,
    };
  }, [products]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  const paginationValue = useMemo(() => {
    return {
      page,
      setPage,
      limit,
      setLimit,
      totalItems,
      setTotalItems,
    };
  }, [page, limit, totalItems]);

  return (
    <ApiContent.Provider value={apiValue}>
      <PaginationContent.Provider value={paginationValue}>
        {children}
      </PaginationContent.Provider>
    </ApiContent.Provider>
  );
};

export default AppContentProvider;
