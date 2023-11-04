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
    searchValue: string;
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
  products: productParams[] | null;
  setProducts: React.Dispatch<React.SetStateAction<productParams[] | null>>;
}
