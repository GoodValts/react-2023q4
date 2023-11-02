import styles from './results.module.scss';
import { BottomSectionInterface } from '../../types/Interfaces';

const ResultsBlock = ({ results }: BottomSectionInterface) => {
  return (
    <div className={styles.resultsBlock}>
      {results.products.map((params, index) => (
        <div key={index} className={styles.itemBlock}>
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
          <a className={styles.link} href={params.id.toString()}>
            See more
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResultsBlock;
