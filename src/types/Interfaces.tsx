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

export interface BottomSectionInterface {
  results: responseInterface;
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
  totalPages: number;
}
