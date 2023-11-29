import styles from '../common_form/commonForm.module.scss';
import { useNavigate } from 'react-router-dom';

const ReactForm = () => {
  const navTo = useNavigate();

  const goBack = () => {
    navTo(-1);
  };

  return (
    <section className={styles.section}>
      <button className={styles.returnButton} onClick={goBack}>
        Return
      </button>

      <form className={styles.form}>
        <h2 className={styles.header}>React form</h2>
      </form>
    </section>
  );
};

export default ReactForm;
