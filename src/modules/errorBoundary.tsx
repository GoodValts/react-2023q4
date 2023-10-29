import React, { ErrorInfo } from 'react';
import { ErrorBoundaryInterface } from '../types/Interfaces';

class ErrorBoundary extends React.Component<
  ErrorBoundaryInterface['props'],
  ErrorBoundaryInterface['state']
> {
  constructor(props: ErrorBoundaryInterface['props']) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary error:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="user-message">
          Oops! Something went wrong. Please, reload this page..
          <button
            className="button"
            onClick={() => {
              location.reload();
            }}
          >
            Reload
          </button>
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
