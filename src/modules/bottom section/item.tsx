import styles from './products.module.scss';
import { useContext } from 'react';
import { ItemBlockInterface } from '../../types/Interfaces';
import ApiContext from '../../common/controllers/apiContext';

const ItemBlock = ({ params }: ItemBlockInterface) => {
  const { setIsItem } = useContext(ApiContext);

  const handleClick = () => {
    console.log('close add');
    setIsItem(false);
  };

  if (params)
    return (
      <div className={styles.itemBlock}>
        <h3 className={styles.header}>{params.title}</h3>
        <img className={styles.img} src={params.thumbnail}></img>
        <div className={styles.params}>
          <p className={styles.property}>Category: {params.category}</p>
          <p className={styles.property}>
            Price: {Math.round(params.price)}${' '}
            {`(-${params.discountPercentage.toString()}%)`}
          </p>
          <p className={styles.property}>Rating: {params.rating}</p>
          <p className={styles.property}>Amount: {params.stock}</p>
          <p className={styles.property}>{params.description}</p>
        </div>
        <button className={styles.link} onClick={() => handleClick()}>
          Close add
        </button>
      </div>
    );
  return null;
};

export default ItemBlock;
