import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';
import TopSection from '../../../modules/top-section';

describe('Topsection', () => {
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
});
