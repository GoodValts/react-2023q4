import styles from './pagination.module.scss';
import { PaginationInterface } from '../../types/Interfaces';
import firstPageIco from './../../assets/pagination-icons/firstPage.png';
import prevPageIco from './../../assets/pagination-icons/prevPage.png';
import nextPageIco from './../../assets/pagination-icons/nextPage.png';
import lastPageIco from './../../assets/pagination-icons/lastPage.png';
import { useState, useEffect } from 'react';

const Pagination = ({
  currentPage,
  totalItems,
  limit,
}: PaginationInterface) => {
  // console.log('currentPage=', currentPage);
  // console.log('totalPages=', totalPages);
  const lastPage = Math.ceil(totalItems / limit);

  const [page, setPage] = useState(1);

  const changePage = (button: string) => {
    if (page !== 1) {
      if (button === 'firstPage') setPage(1);
      if (button === 'prevPage') setPage(page - 1);
    }
    if (page !== lastPage) {
      if (button === 'nextPage') setPage(page + 1);
      if (button === 'lastPage') setPage(lastPage);
    }
    console.log('this.page=', page);
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.paginationBlock}>
      <button
        className={page === 1 ? styles.button_unactive : styles.button}
        onClick={() => changePage('firstPage')}
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
      >
        <img
          className={styles.buttonImage}
          src={prevPageIco}
          alt="toPrevPage"
        />
      </button>
      <div className={styles.pageNumber}>{page.toString()}</div>
      <button
        className={page === lastPage ? styles.button_unactive : styles.button} // currentPage === lastPage ? styles.button_unactive : styles.button
        onClick={() => changePage('nextPage')}
      >
        <img
          className={styles.buttonImage}
          src={nextPageIco}
          alt="toNextPage"
        />
      </button>
      <button
        className={page === lastPage ? styles.button_unactive : styles.button} // currentPage === lastPage ? styles.button_unactive : styles.button
        onClick={() => changePage('lastPage')}
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
