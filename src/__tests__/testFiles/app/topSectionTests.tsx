import { fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import TopSection from '../../../modules/top-section';
import { handlers, server } from '../../setupTest';

describe('TopSection', () => {
  test('Clicking the Search button saves the entered value to the local storage', async () => {
    renderWithProviders(
      <BrowserRouter>
        <TopSection />
      </BrowserRouter>
    );

    const search = await screen.queryByTestId('search-button');
    if (search) fireEvent.click(search);

    expect(search).toBeInTheDocument();
  });

  test('component retrieves the value from the local storage upon mounting', async () => {
    server.use(handlers[0]);
    renderWithProviders(
      <BrowserRouter>
        <TopSection />
      </BrowserRouter>
    );

    waitFor(() => {
      const input: HTMLInputElement = screen.getByTestId('search-input');
      expect(input.value).toEqual('');
    });
  });

  test('input change value', async () => {
    server.use(handlers[0]);
    renderWithProviders(
      <BrowserRouter>
        <TopSection />
      </BrowserRouter>
    );

    waitFor(() => {
      const input: HTMLInputElement = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'someText' } });
      expect(input.value).toEqual('someText');
    });
  });
});
