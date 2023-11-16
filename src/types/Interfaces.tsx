export interface productParams {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface responseInterface {
  limit: number;
  skip: number;
  total: number;
  products: productParams[];
}

export interface AppInterface {
  props: unknown;
  state: {
    results: productParams[];
    loading: boolean;
  };
}

export interface TopSectionInterface {
  props: {
    onSearch: (searchTerm: string) => void;
  };
  state: {
    isError: boolean;
  };
}

export interface ProductsBlockInterface {
  products: productParams[];
}

export interface ErrorBoundaryInterface {
  props: {
    children: React.ReactNode;
  };
  state: {
    hasError: boolean;
  };
}

export interface PaginationInterface {
  currentPage: number;
  totalItems: number;
  limit: number;
}

export interface PaginationDataInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}

export interface ApiDataInterface {
  searchStr: string;
  setSearchStr: React.Dispatch<React.SetStateAction<string>>;
  products: productParams[] | null;
  setProducts: React.Dispatch<React.SetStateAction<productParams[] | null>>;
  item: productParams | null;
  setItem: React.Dispatch<React.SetStateAction<productParams | null>>;
  isItem: boolean;
  setIsItem: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ReducerType {
  type: string;
  payload: string;
}

export interface AppState {
  search: {
    searchValue: string;
    results: responseInterface | null;
    item?: productParams;
  };
  viewMode: {
    isLoading: boolean;
    page: number;
    itemsPerPage: number;
    itemId?: number;
  };
}
