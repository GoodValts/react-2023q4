import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../../common/controllers/apiContext';
import AppContent from '../../common/controllers/paginationContext';
import styles from './pagination.module.scss';

const PageOptions = () => {
  const { setLimit, setPage } = useContext(AppContent);
  const { searchStr } = useContext(ApiContext);

  const navigate = useNavigate();

  const handleLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const limit = parseInt(event.target.value);
    setLimit(limit);
    setPage(1);
    navigate(`./?search=${searchStr}?page=1`);
  };

  return (
    <select className={styles.select} onChange={handleLimit}>
      <option value="5">5 per page</option>
      <option value="10">10 per page</option>
      <option value="20">20 per page</option>
      <option value="50">50 per page</option>
    </select>
  );
};

export default PageOptions;
