import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navTo = useNavigate();

  const backToMain = () => {
    navTo('/');
  };

  return (
    <section className="user-message">
      <div>
        <div className="header__header">Page not found!</div>
        <button className="button" onClick={backToMain}>
          Return to main page
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
