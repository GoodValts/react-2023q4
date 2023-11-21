import { fireEvent, screen } from '@testing-library/react';
import App from '../../../App';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from '../../testUtils/renderWithProviders';

describe('App', () => {
  test('renders header with correct text', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const headerElement = await screen.findByText(/Some crap/i);

    expect(headerElement).toBeInTheDocument();

    try {
      const errorBtn = screen.queryByTestId('error-button');
      if (errorBtn) fireEvent.click(errorBtn);
    } catch {
      console.log('error button clicked');
    }
  });
});
