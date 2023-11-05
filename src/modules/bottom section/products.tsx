import styles from './products.module.scss';
import { getItemFromApi } from '../../common/API/apiFunc';
import { useContext } from 'react';
import ApiContext from '../../common/controllers/apiContext';

const ResultsBlock = () => {
  const { isItem, setItem, setIsItem, products, setIsLoading } =
    useContext(ApiContext);

  const handleItem = async (id: number) => {
    try {
      setIsLoading(true);
      const itemData = await getItemFromApi(id);
      setItem(itemData);
      setIsItem(true);
      setIsLoading(false);
      console.log('isItem=', isItem);
    } catch (error) {
      throw new Error('failed to load item from API');
    }
  };

  return (
    <div className={styles.resultsBlock}>
      {products &&
        products.map((params, index) => (
          <div key={index} className={styles.itemBlock}>
            <h3 className={styles.header}>{params.title}</h3>
            <img className={styles.img} src={params.thumbnail}></img>
            <div className={styles.params}>
              <p className={styles.property}>Category: {params.category}</p>
              <p className={styles.property}>
                Price: {Math.round(params.price)}${' '}
                {`(-${params.discountPercentage.toString()}%)`}
              </p>
            </div>
            <p className={styles.link} onClick={() => handleItem(params.id)}>
              See more
            </p>
          </div>
        ))}
    </div>
  );
};

export default ResultsBlock;
