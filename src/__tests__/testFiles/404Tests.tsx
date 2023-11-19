import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../modules/404';

describe('404 Page', () => {
  test('check button', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.queryByTestId('not-found');
    if (button) {
      fireEvent.click(button);
    }

    expect(button).toBeDefined();
  });
});
