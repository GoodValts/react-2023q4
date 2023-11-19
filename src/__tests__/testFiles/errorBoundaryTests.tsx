import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../../modules/errorBoundary';

describe('ErrorBoundary', () => {
  const reloadPage = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        reload: reloadPage,
      },
    });
  });

  test('renders children when there is no error', () => {
    const ChildComponent = () => <div>Child component</div>;
    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    const childComponent = getByText('Child component');
    expect(childComponent).toBeInTheDocument();
  });

  test('reloads the page when the reload button is clicked', () => {
    const ErrorThrowingComponent = () => {
      throw new Error('Test error');
    };

    const { getByTestId } = render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );

    const reloadButton = getByTestId('errorBoundary');
    fireEvent.click(reloadButton);

    expect(reloadPage).toHaveBeenCalled();
  });
});
