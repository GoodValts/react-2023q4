import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../../src/modules/bottom section/pagination';
import ApiContext from '../../src/common/controllers/apiContext';
import { BrowserRouter } from 'react-router-dom';
import PaginationContext from '../../src/common/controllers/paginationContext';

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

describe('Pagination', () => {
  test('component updates URL query parameter when page change, forwardButtons', async () => {
    const mockAppContext = {
      page: 1,
      setPage: () => {},
      limit: 5,
      setLimit: () => {},
      totalItems: 35,
      setTotalItems: () => {},
    };

    render(
      <BrowserRouter>
        <ApiContext.Provider value={mockApiContext}>
          <PaginationContext.Provider value={mockAppContext}>
            <Pagination></Pagination>
          </PaginationContext.Provider>
        </ApiContext.Provider>
      </BrowserRouter>
    );

    const buttonsArr = await Promise.all([
      screen.queryByTestId('nextPageButton'),
      screen.queryByTestId('lastPageButton'),
    ]);

    const user = userEvent.setup();

    buttonsArr.forEach((el) => {
      if (el) {
        user.click(el);
        expect(window.location.pathname).not.toEqual('/?search=&page=1');
      }
    });
  });

  test('component updates URL query parameter when page change, forwardButtons', async () => {
    const mockAppContext = {
      page: 2,
      setPage: () => {},
      limit: 30,
      setLimit: () => {},
      totalItems: 34,
      setTotalItems: () => {},
    };

    render(
      <BrowserRouter>
        <ApiContext.Provider value={mockApiContext}>
          <PaginationContext.Provider value={mockAppContext}>
            <Pagination></Pagination>
          </PaginationContext.Provider>
        </ApiContext.Provider>
      </BrowserRouter>
    );

    const buttonsArr = await Promise.all([
      screen.queryByTestId('firstPageButton'),
      screen.queryByTestId('prevPageButton'),
    ]);

    const user = userEvent.setup();

    buttonsArr.forEach((el) => {
      if (el) {
        user.click(el);
        expect(window.location.pathname).not.toEqual('/?search=&page=2');
      }
    });
  });
});
