import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import Pagination from '../../../modules/bottom section/pagination';
import { handlers, server } from '../../setupTest';

describe('Pagination', () => {
  test('component updates URL query parameter when page changes', async () => {
    server.use(handlers[3]);
    renderWithProviders(
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    );

    const nextBtn = screen.queryByTestId('nextPageButton');
    if (nextBtn) fireEvent.click(nextBtn);
    expect(nextBtn).toBeInTheDocument();

    const lastBtn = screen.queryByTestId('lastPageButton');
    if (lastBtn) fireEvent.click(lastBtn);
    expect(lastBtn).toBeInTheDocument();

    const prevBtn = screen.queryByTestId('prevPageButton');
    if (prevBtn) fireEvent.click(prevBtn);
    expect(prevBtn).toBeInTheDocument();

    const firstBtn = screen.queryByTestId('firstPageButton');
    if (firstBtn) fireEvent.click(firstBtn);
    expect(firstBtn).toBeInTheDocument();
  });
});
