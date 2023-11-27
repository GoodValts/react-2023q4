import styles from "../styles/pagination.module.scss";
import firstPageIco from "../public/pagination/firstPage.png";
import prevPageIco from "../public/pagination/prevPage.png";
import nextPageIco from "../public/pagination/nextPage.png";
import lastPageIco from "../public/pagination/lastPage.png";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className={styles.paginationBlock}>
      <button data-testid="firstPageButton">
        <Image
          className={styles.buttonImage}
          src={firstPageIco}
          alt="toFirstPage"
        />
      </button>
      <button data-testid="prevPageButton">
        <Image
          className={styles.buttonImage}
          src={prevPageIco}
          alt="toPrevPage"
        />
      </button>
      <div className={styles.pageNumber}>1</div>
      <button data-testid="nextPageButton">
        <Image
          className={styles.buttonImage}
          src={nextPageIco}
          alt="toNextPage"
        />
      </button>
      <button data-testid="lastPageButton">
        <Image
          className={styles.buttonImage}
          src={lastPageIco}
          alt="toLastPage"
        ></Image>
      </button>
    </div>
  );
};

export default Pagination;
