import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../src/common/API/apiFunc', () => ({
  getFromApi: jest.fn().mockResolvedValue({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  }),
}));

describe('App', () => {
  test('renders header with correct text', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerElement = await screen.findByText(/Some crap/i);
    expect(headerElement).toBeInTheDocument();
  });
});
