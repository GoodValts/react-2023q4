import { createContext } from 'react';
import { ApiDataInterface } from '../../types/Interfaces';

const ApiContext = createContext<ApiDataInterface>({
  products: null,
  setProducts: () => {},
});

export default ApiContext;
