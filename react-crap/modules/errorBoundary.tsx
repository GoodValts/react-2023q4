import React, { ErrorInfo } from "react";
import { ErrorBoundaryInterface } from "../types/Interfaces";

class ErrorBoundary extends React.Component<
  ErrorBoundaryInterface["props"],
  ErrorBoundaryInterface["state"]
> {
  constructor(props: ErrorBoundaryInterface["props"]) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
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
            data-testid="errorBoundary"
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
