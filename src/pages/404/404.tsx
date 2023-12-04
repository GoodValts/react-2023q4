import styles from './404.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navTo = useNavigate();

  const backToMain = () => {
    navTo('/');
  };

  return (
    <section className={styles.message}>
      <div>
        <div className={styles.header}>Page not found!</div>
        <button className={styles.button} onClick={backToMain}>
          Return to main page
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
