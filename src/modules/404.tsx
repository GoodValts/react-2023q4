import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const backToMain = () => {
    navigate('/');
  };

  return (
    <section className="user-message">
      <div>
        <div className="header__header">Page not found!</div>
        <button className="button" onClick={backToMain} data-testid="not-found">
          Return to main page
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
