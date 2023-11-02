import styles from './pagination.module.scss';

const PageOptions = () => {
  return (
    <select className={styles.select}>
      <option value="5">5 per page</option>
      <option value="10">10 per page</option>
      <option value="20">20 per page</option>
      <option value="50">50 per page</option>
    </select>
  );
};

export default PageOptions;
