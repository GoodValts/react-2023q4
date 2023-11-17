// import { useNavigate } from 'react-router-dom';
import { setItemsPerPage, setPage } from '../../common/redux/reducers/viewMode';
import { useAppDispatch } from '../../common/redux/hooks/appHooks';
import styles from './pagination.module.scss';

const PageOptions = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectorValue = parseInt(event.target.value);
    dispatch(setItemsPerPage(selectorValue));
    dispatch(setPage(1));
    // navigate(`./search:=${searchStr}?page=1`);
  };

  return (
    <select className={styles.select} onChange={handleSelect}>
      <option value="5">5 per page</option>
      <option value="10">10 per page</option>
      <option value="20">20 per page</option>
      <option value="50">50 per page</option>
    </select>
  );
};

export default PageOptions;
