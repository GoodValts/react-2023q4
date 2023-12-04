import styles from './terms.module.scss';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navTo = useNavigate();

  const returnToPrevPage = () => {
    navTo(-1);
  };

  return (
    <>
      <h1 className={styles.header}>Conditions & Terms:</h1>
      <p className={styles.paragraph}>
        Rule 1: For all that is good, against all that is bad.
      </p>
      <p className={styles.paragraph}>
        Rule 2: If not for the sake of all that is good, against all that is bad
        – refer to Rule 1.
      </p>
      <button className={styles.button} onClick={returnToPrevPage}>
        Return
      </button>
    </>
  );
};

export default Terms;
