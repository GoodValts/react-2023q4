import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ApiContext from '../../../src/common/controllers/apiContext';
import PaginationContext from '../../../src/common/controllers/paginationContext';
import ItemBlock from '../../../src/modules/bottom section/item';

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

describe('Item', () => {
  jest.mock('../../../src/common/API/apiFunc', () => ({
    getItemFromApi: jest.fn().mockResolvedValue({
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

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ApiContext.Provider value={mockApiContext}>
          <PaginationContext.Provider value={mockAppContext}>
            <ItemBlock />
          </PaginationContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );
  });

  test('Make sure the detailed card component correctly displays the detailed card data', () => {
    const image: HTMLImageElement | null = screen.queryByTestId('image');
    expect(image?.src).toEqual(item.thumbnail);

    expect(screen.queryByTestId('header')?.textContent).toEqual(item.title);
    expect(screen.queryByTestId('description')?.textContent).toEqual(
      item.description
    );

    expect(screen.queryByTestId('category')?.textContent).toEqual(
      `Category: ${item.category}`
    );
    expect(screen.queryByTestId('price')?.textContent).toEqual(
      `Price: ${Math.round(
        item.price
      )}$ (-${item.discountPercentage.toString()}%)`
    );
    expect(screen.queryByTestId('rating')?.textContent).toEqual(
      `Rating: ${item.rating}`
    );
    expect(screen.queryByTestId('amount')?.textContent).toEqual(
      `Amount: ${item.stock}`
    );
  });

  test('Ensure that clicking the close button hides the component', async () => {
    const button = screen.getByTestId('button');
    const user = userEvent.setup();
    user.click(button);
    await waitFor(() => {
      expect(window.location.pathname).toEqual('/');
    });
  });
});
