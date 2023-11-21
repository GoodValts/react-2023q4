import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import ResultsBlock from '../../../modules/bottom section/products';
import { handlers, server } from '../../setupTest';
import { results } from '../../testUtils/mocks/apiMocks';

describe('Products', () => {
  test('component renders the specified number of cards', async () => {
    server.use(handlers[0]);
    renderWithProviders(
      <MemoryRouter>
        <ResultsBlock />
      </MemoryRouter>
    );

    await waitFor(() => {
      const cards = screen.getAllByTestId('card');
      expect(cards).toHaveLength(1);
    });
  });

  test('appropriate message is displayed if no cards are present', async () => {
    server.use(handlers[1]);
    renderWithProviders(
      <MemoryRouter>
        <ResultsBlock />
      </MemoryRouter>
    );

    await waitFor(() => {
      const message = screen.getAllByTestId('no_results');
      expect(message).toHaveLength(1);
    });
  });
});

describe('Card', () => {
  test('card component renders the relevant card data', async () => {
    server.use(handlers[0]);
    renderWithProviders(
      <MemoryRouter>
        <ResultsBlock />
      </MemoryRouter>
    );

    await waitFor(() => {
      const cardHeadersArr: HTMLElement[] =
        screen.queryAllByTestId('card-header');
      const cardsImagesArr: HTMLImageElement[] =
        screen.queryAllByTestId('card-image');
      const cardsCategoriesArr: HTMLElement[] =
        screen.queryAllByTestId('card-category');
      const cardsPropertiesArr: HTMLElement[] =
        screen.queryAllByTestId('card-property');
      const cardsLinksArr: HTMLElement[] = screen.queryAllByTestId('card-link');

      for (let i = 0; i < results.products.length; i++) {
        const params = results.products[i];

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
  });

  test('clicking on a card opens a detailed card component', async () => {
    server.use(handlers[0]);
    renderWithProviders(
      <MemoryRouter>
        <ResultsBlock />
      </MemoryRouter>
    );

    await waitFor(() => {
      const button = screen.getByTestId('card-link');
      expect(button).toBeInTheDocument();

      if (button) fireEvent.click(button);

      server.use(handlers[2]);
      waitFor(() => {
        const detailedCard = screen.getByTestId('detailed-card');
        expect(detailedCard).toBeInTheDocument();
      });
    });
  });

  test('clicking triggers an additional API call to fetch detailed information', async () => {
    server.use(handlers[0]);
    renderWithProviders(
      <MemoryRouter>
        <ResultsBlock />
      </MemoryRouter>
    );

    await waitFor(() => {
      const button = screen.getByTestId('card-link');
      expect(button).toBeInTheDocument();

      if (button) fireEvent.click(button);

      server.use(handlers[2]);
      waitFor(() => {
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
      });
    });
  });
});
