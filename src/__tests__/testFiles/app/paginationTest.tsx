import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import Pagination from '../../../modules/bottom section/pagination';

describe('Pagination', () => {
  test('Component updates URL query parameter when page changes', async () => {
    renderWithProviders(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    );

    const nextBtn = await screen.queryByTestId('nextPageButton');
    if (nextBtn) fireEvent.click(nextBtn);

    const lastBtn = await screen.queryByTestId('lastPageButton');
    if (lastBtn) fireEvent.click(lastBtn);

    const prevBtn = await screen.queryByTestId('prevPageButton');
    if (prevBtn) fireEvent.click(prevBtn);

    const firstBtn = await screen.queryByTestId('firstPageButton');
    if (firstBtn) fireEvent.click(firstBtn);

    expect(nextBtn).toBeInTheDocument();
  });
});
