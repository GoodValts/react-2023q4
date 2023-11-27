function NotFoundPage() {
  return (
    <section className="user-message">
      <div>
        <div className="header__header">Page not found!</div>
        <button
          className="button"
          onClick={() => (window.location.pathname = "/")}
          data-testid="not-found"
        >
          Return to main page
        </button>
      </div>
    </section>
  );
}

export default NotFoundPage;
