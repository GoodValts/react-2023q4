import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResultsBlock from '../../src/modules/bottom section/products';
import ApiContext from '../../src/common/controllers/apiContext';
import AppContext from '../../src/common/controllers/paginationContext';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import * as apiFunc from '../../src/common/API/apiFunc';

const mockApiContext = {
  searchStr: '',
  setSearchStr: () => {},
  setProducts: () => {},
  item: {
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

const mockAppContext = {
  page: 1,
  setPage: () => {},
  limit: 5,
  setLimit: () => {},
  totalItems: 1,
  setTotalItems: () => {},
};

jest.mock('../../src/common/API/apiFunc', () => ({
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

describe('Card', () => {
  test(' card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <ApiContext.Provider value={mockApiContext}>
          <AppContext.Provider value={mockAppContext}>
            <ResultsBlock />
          </AppContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );

    const cardHeadersArr: HTMLElement[] =
      screen.queryAllByTestId('card-header');
    const cardsImagesArr: HTMLImageElement[] =
      screen.queryAllByTestId('card-image');
    const cardsCategoriesArr: HTMLElement[] =
      screen.queryAllByTestId('card-category');
    const cardsPropertiesArr: HTMLElement[] =
      screen.queryAllByTestId('card-property');
    const cardsLinksArr: HTMLElement[] = screen.queryAllByTestId('card-link');

    for (let i = 0; i < mockAppContext.totalItems; i++) {
      const params = mockApiContext.products[i];

      expect(cardHeadersArr[i].textContent).toEqual(params.title);
      expect(cardsImagesArr[i].src).toEqual(params.thumbnail);
      expect(cardsCategoriesArr[i].textContent).toEqual(
        `Category: ${params.category}`
      );
      expect(cardsPropertiesArr[i].textContent).toEqual(
        `Price: ${Math.round(
          params.price
        ).toString()}$ (-${params.discountPercentage.toString()}%)`
      );
      expect(cardsLinksArr[i]).toBeInTheDocument();
    }
  });

  // test 2 in progress

  test('clicking on a card opens a detailed card component', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ApiContext.Provider value={mockApiContext}>
          <AppContext.Provider value={mockAppContext}>
            <ResultsBlock />
          </AppContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );

    act(() => fireEvent.click(getByTestId('card-link')));

    expect(await screen.findByTestId('item')).toBeInTheDocument();
  });
  // end of test2

  test('clicking triggers an additional API call to fetch detailed information', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ApiContext.Provider value={mockApiContext}>
          <AppContext.Provider value={mockAppContext}>
            <ResultsBlock />
          </AppContext.Provider>
        </ApiContext.Provider>
      </MemoryRouter>
    );

    const mockItemFromApi = jest.spyOn(apiFunc, 'getItemFromApi');

    await act(async () => fireEvent.click(getByTestId('card-link')));

    expect(mockItemFromApi).toHaveBeenCalledWith(3);
  });
});
