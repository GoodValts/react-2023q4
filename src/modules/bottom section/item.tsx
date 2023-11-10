import styles from './item.module.scss';
import { useContext } from 'react';
import ApiContext from '../../common/controllers/apiContext';
import { useNavigate } from 'react-router-dom';
import PaginationContext from '../../common/controllers/paginationContext';

const ItemBlock = () => {
  const { item, setIsItem } = useContext(ApiContext);
  const navigate = useNavigate();
  const { page } = useContext(PaginationContext);
  const { searchStr } = useContext(ApiContext);

  const handleClick = () => {
    console.log('close add');
    navigate(`../?search=${searchStr}&page=${page}`);
    setIsItem(false);
  };

  if (item)
    return (
      <div className={styles.itemBlock} data-testid="item">
        <img className={styles.img} src={item.thumbnail}></img>
        <h3 className={styles.header}>{item.title}</h3>
        <div className={styles.params}>
          <p className={styles.property}>{item.description}</p>
          <p className={styles.property}>Category: {item.category}</p>
          <p className={styles.property}>
            Price: {Math.round(item.price)}${' '}
            {`(-${item.discountPercentage.toString()}%)`}
          </p>
          <p className={styles.property}>Rating: {item.rating}</p>
          <p className={styles.property}>Amount: {item.stock}</p>
        </div>
        <button className={styles.button} onClick={() => handleClick()}>
          Close add
        </button>
      </div>
    );
  return null;
};

export default ItemBlock;
