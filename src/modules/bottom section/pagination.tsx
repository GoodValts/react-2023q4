import styles from './pagination.module.scss';
import firstPageIco from './../../assets/pagination-icons/firstPage.png';
import prevPageIco from './../../assets/pagination-icons/prevPage.png';
import nextPageIco from './../../assets/pagination-icons/nextPage.png';
import lastPageIco from './../../assets/pagination-icons/lastPage.png';
import { useContext } from 'react';
import AppContent from '../../common/controllers/paginationContext';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../../common/controllers/apiContext';

const Pagination = () => {
  const { page, setPage, limit, totalItems } = useContext(AppContent);
  const { searchStr } = useContext(ApiContext);
  const lastPage = Math.ceil(totalItems / limit);

  const navigate = useNavigate();

  const changePage = (button: string) => {
    if (page !== 1) {
      if (button === 'firstPage') {
        setPage(1);
        navigate(`../?search=${searchStr}&page=1`);
      }
      if (button === 'prevPage') {
        setPage(page - 1);
        navigate(`../?search=${searchStr}&page=${page - 1}`);
      }
    }
    if (page !== lastPage) {
      if (button === 'nextPage') {
        setPage(page + 1);
        navigate(`./?search=${searchStr}&page=${page + 1}`);
      }
      if (button === 'lastPage') {
        setPage(lastPage);
        navigate(`./?search=${searchStr}&page=${lastPage}`);
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
