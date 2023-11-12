import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../../src/App';
import ApiContext from '../../../src/common/controllers/apiContext';
import PaginationContext from '../../../src/common/controllers/paginationContext';

const item = {
  id: 3,
  title: 'Samsung Universe 9',
  description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  price: 1249,
  discountPercentage: 15.46,
  rating: 4.09,
  stock: 36,
  brand: 'Samsung',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
};

const mockAppContext = {
  page: 1,
  setPage: () => {},
  limit: 5,
  setLimit: () => {},
  totalItems: 1,
  setTotalItems: () => {},
};

const mockApiContext = {
  searchStr: '',
  setSearchStr: () => {},
  setProducts: () => {},
  item: item,
  setItem: () => {},
  isItem: false,
  setIsItem: () => {},
  isLoading: true,
  setIsLoading: () => {},
  products: [item],
};

jest.mock('../../../src/common/API/apiFunc', () => ({
  getFromApi: jest.fn().mockResolvedValue({
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
  }),
}));

describe('Item', () => {
  test('Check that a loading indicator is displayed while fetching data', async () => {
    render(
      <MemoryRouter>
        <ApiContext.Provider value={mockApiContext}>
          <PaginationContext.Provider value={mockAppContext}>
            <App />
          </PaginationContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );
    const loader = screen.queryByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});
