import styles from './pagination.module.scss';
import { PaginationInterface } from '../../types/Interfaces';
import firstPageIco from './../../assets/pagination-icons/firstPage.png';
import prevPageIco from './../../assets/pagination-icons/prevPage.png';
import nextPageIco from './../../assets/pagination-icons/nextPage.png';
import lastPageIco from './../../assets/pagination-icons/lastPage.png';

const Pagination = ({ currentPage, totalPages }: PaginationInterface) => {
  // console.log('currentPage=', currentPage);
  // console.log('totalPages=', totalPages);

  return (
    <div className={styles.paginationBlock}>
      <button
        className={currentPage === 1 ? styles.button_unactive : styles.button}
      >
        <img
          className={styles.buttonImage}
          src={firstPageIco}
          alt="toFirstPage"
        />
      </button>
      <button
        className={currentPage === 1 ? styles.button_unactive : styles.button}
      >
        <img
          className={styles.buttonImage}
          src={prevPageIco}
          alt="toPrevPage"
        />
      </button>
      <div className={styles.pageNumber}>{currentPage}</div>
      <button
        className={
          currentPage === totalPages ? styles.button_unactive : styles.button
        }
      >
        <img
          className={styles.buttonImage}
          src={nextPageIco}
          alt="toNextPage"
        />
      </button>
      <button
        className={
          currentPage === totalPages ? styles.button_unactive : styles.button
        }
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
