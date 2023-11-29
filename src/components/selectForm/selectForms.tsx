import styles from './selectForms.module.scss';
import { useNavigate } from 'react-router-dom';

const SelectForms = () => {
  const navTo = useNavigate();

  const routeToCommonForm = () => {
    navTo('commonForm');
  };

  const routeToReactForm = () => {
    navTo('reactForm');
  };

  return (
    <div className="flex">
      <button className={styles.button} onClick={routeToCommonForm}>
        Common form
      </button>
      <button className={styles.button} onClick={routeToReactForm}>
        React form
      </button>
    </div>
  );
};

export default SelectForms;
