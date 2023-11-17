import styles from './pagination.module.scss';
import firstPageIco from './../../assets/pagination-icons/firstPage.png';
import prevPageIco from './../../assets/pagination-icons/prevPage.png';
import nextPageIco from './../../assets/pagination-icons/nextPage.png';
import lastPageIco from './../../assets/pagination-icons/lastPage.png';
// import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../common/redux/hooks/appHooks';
import {
  selectItemsPerPage,
  selectPage,
  setPage,
} from '../../common/redux/reducers/viewMode';
import { selectSearchValue } from '../../common/redux/reducers/search';
import { useGetResultsQuery } from '../../common/API/apiService';

const Pagination = () => {
  // const { limit, totalItems } = useContext(AppContent);
  // const lastPage = Math.ceil(totalItems / limit);

  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector(selectSearchValue);
  const page = useAppSelector(selectPage);
  const itemsPerPage = useAppSelector(selectItemsPerPage);

  const { data } = useGetResultsQuery({
    searchValue,
    itemsPerPage,
    page,
  });

  const totalItems = data?.total;
  const lastPage = totalItems ? Math.ceil(totalItems / itemsPerPage) : 1;

  const changePage = (button: string) => {
    if (page !== 1) {
      if (button === 'firstPage') {
        dispatch(setPage(1));
        // navigate(`../?search=${searchStr}&page=1`);
      }
      if (button === 'prevPage') {
        dispatch(setPage(page - 1));
        // navigate(`../?search=${searchStr}&page=${page - 1}`);
      }
    }
    if (page !== lastPage) {
      if (button === 'nextPage') {
        dispatch(setPage(page + 1));
        // navigate(`./?search=${searchStr}&page=${page + 1}`);
      }
      if (button === 'lastPage') {
        dispatch(setPage(lastPage));
        // navigate(`./?search=${searchStr}&page=${lastPage}`);
      }
    }
  };

  return (
    <div className={styles.paginationBlock}>
      <button
        className={page === 1 ? styles.button_unactive : styles.button}
        onClick={() => changePage('firstPage')}
        data-testid="firstPageButton"
      >
        <img
          className={styles.buttonImage}
          src={firstPageIco}
          alt="toFirstPage"
        />
      </button>
      <button
        className={page === 1 ? styles.button_unactive : styles.button}
        onClick={() => changePage('prevPage')}
        data-testid="prevPageButton"
      >
        <img
          className={styles.buttonImage}
          src={prevPageIco}
          alt="toPrevPage"
        />
      </button>
      <div className={styles.pageNumber}>{page.toString()}</div>
      <button
        className={page === lastPage ? styles.button_unactive : styles.button}
        onClick={() => changePage('nextPage')}
        data-testid="nextPageButton"
      >
        <img
          className={styles.buttonImage}
          src={nextPageIco}
          alt="toNextPage"
        />
      </button>
      <button
        className={page === lastPage ? styles.button_unactive : styles.button}
        onClick={() => changePage('lastPage')}
        data-testid="lastPageButton"
      >
        <img
          className={styles.buttonImage}
          src={lastPageIco}
          alt="tolastPage"
        />
      </button>
    </div>
  );
};

export default Pagination;
