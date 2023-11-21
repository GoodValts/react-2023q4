import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import { handlers, server } from '../../setupTest';
import ItemBlock from '../../../modules/bottom section/item';
import { item } from '../../testUtils/mocks/apiMocks';

describe('Detailed Card', () => {
  test('the detailed card component correctly displays the detailed card data', async () => {
    server.use(handlers[2]);
    renderWithProviders(
      <BrowserRouter>
        <ItemBlock />
      </BrowserRouter>
    );

    await waitFor(() => {
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
  });

  test('clicking the close button hides the component', async () => {
    server.use(handlers[2]);
    renderWithProviders(
      <BrowserRouter>
        <ItemBlock />
      </BrowserRouter>
    );

    await waitFor(() => {
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();

      fireEvent.click(button);
      expect(window.location.pathname).toEqual('/');
    });
  });
});
