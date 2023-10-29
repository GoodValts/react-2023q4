export interface ShipParams {
  MGLT: string;
  cargo_capacity: string;
  cost_in_credits: string;
  crew: string;
  films: string[];
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  starship_class: string;
  url: string;
}

export interface AppInterface {
  props: unknown;
  state: {
    results: ShipParams[];
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
  results: ShipParams[];
}

export interface ErrorBoundaryInterface {
  props: {
    children: React.ReactNode;
  };
  state: {
    hasError: boolean;
  };
}
