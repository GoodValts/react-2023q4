import { createContext } from 'react';
import { PaginationDataInterface } from '../../types/Interfaces';

const PaginationContext = createContext<PaginationDataInterface>({
  page: 1,
  setPage: () => {},
  limit: 5,
  setLimit: () => {},
  totalItems: 0,
  setTotalItems: () => {},
});

export default PaginationContext;
