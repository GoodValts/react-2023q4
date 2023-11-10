import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsBlock from '../../src/modules/bottom section/products';
import ApiContext from '../../src/common/controllers/apiContext';
import AppContext from '../../src/common/controllers/paginationContext';
import { MemoryRouter } from 'react-router-dom';

const mockApiContext = {
  searchStr: '',
  setSearchStr: () => {},
  setProducts: () => {},
  item: null,
  setItem: () => {},
  isItem: false,
  setIsItem: () => {},
  isLoading: false,
  setIsLoading: () => {},
  products: [
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
    },
  ],
};

const nullApiContext = {
  searchStr: '',
  setSearchStr: () => {},
  setProducts: () => {},
  item: null,
  setItem: () => {},
  isItem: false,
  setIsItem: () => {},
  isLoading: false,
  setIsLoading: () => {},
  products: null,
};

const mockAppContext = {
  page: 1,
  setPage: () => {},
  limit: 5,
  setLimit: () => {},
  totalItems: 1,
  setTotalItems: () => {},
};

describe('ResultsBlock', () => {
  test('renders the specified number of cards', () => {
    render(
      <MemoryRouter>
        <ApiContext.Provider value={mockApiContext}>
          <AppContext.Provider value={mockAppContext}>
            <ResultsBlock />
          </AppContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );

    const cardsArr = screen.queryAllByTestId('card');
    expect(cardsArr).toHaveLength(mockAppContext.totalItems);
  });

  test('appropriate message is displayed if no cards are present', () => {
    render(
      <MemoryRouter>
        <ApiContext.Provider value={nullApiContext}>
          <AppContext.Provider value={mockAppContext}>
            <ResultsBlock />
          </AppContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );

    const errorBlock = screen.queryByTestId('no_results');
    expect(errorBlock).toBeInTheDocument();
  });
});
