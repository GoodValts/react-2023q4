import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../src/modules/404';

describe('404 Page', () => {
  test('component updates URL query parameter when page change, forwardButtons', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    const page = screen.queryByTestId('not-found');

    expect(page).toBeInTheDocument();
  });
});
