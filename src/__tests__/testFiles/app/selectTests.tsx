import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import PageOptions from '../../../modules/bottom section/select';
import { handlers, server } from '../../setupTest';

describe('Select', () => {
  test('card component renders the relevant card data', async () => {
    server.use(handlers[3]);
    renderWithProviders(
      <MemoryRouter>
        <PageOptions />
      </MemoryRouter>
    );

    await waitFor(() => {
      const select: HTMLSelectElement = screen.getByTestId('select');
      fireEvent.change(select, { target: { value: '10' } });

      expect(select.value).toEqual('10');
    });
  });
});
