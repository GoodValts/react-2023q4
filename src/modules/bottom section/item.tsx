import styles from './item.module.scss';
import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../common/redux/hooks/appHooks';
import {
  selectItemId,
  selectPage,
  setItemId,
} from '../../common/redux/reducers/viewMode';
import { useGetItemQuery } from '../../common/API/apiService';
import { selectSearchValue } from '../../common/redux/reducers/search';

const ItemBlock = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = useAppSelector(selectItemId);
  const { data: item } = useGetItemQuery({ itemId: id || 0 });
  const searchValue = useAppSelector(selectSearchValue);
  const page = useAppSelector(selectPage);

  const handleClick = () => {
    dispatch(setItemId(undefined));
    navigate(`../?search=${searchValue}&page=${page}`);
  };

  console.log('item selected', item);

  if (item)
    return (
      <div className={styles.itemBlock} data-testid="card">
        <img
          className={styles.img}
          src={item.thumbnail}
          data-testid="image"
        ></img>
        <h3 className={styles.header} data-testid="header">
          {item.title}
        </h3>
        <div className={styles.params}>
          <p className={styles.property} data-testid="description">
            {item.description}
          </p>
          <p className={styles.property} data-testid="category">
            Category: {item.category}
          </p>
          <p className={styles.property} data-testid="price">
            Price: {Math.round(item.price)}${' '}
            {`(-${item.discountPercentage.toString()}%)`}
          </p>
          <p className={styles.property} data-testid="rating">
            Rating: {item.rating}
          </p>
          <p className={styles.property} data-testid="amount">
            Amount: {item.stock}
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => handleClick()}
          data-testid="button"
        >
          Close add
        </button>
      </div>
    );
  return null;
};

export default ItemBlock;
