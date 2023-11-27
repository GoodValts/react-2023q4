import { productParams, responseInterface } from "@/types/Interfaces";
import styles from "../styles/products.module.scss";

const ResultsBlock = (props: productParams[]) => {
  const products = props;

  return (
    <div className={styles.resultsBlock}>
      {products &&
        products.length > 0 &&
        products.map((params: productParams, index: number) => (
          <div key={index} className={styles.itemBlock} data-testid="card">
            <h3 className={styles.header} data-testid="card-header">
              {params.title}
            </h3>
            <img
              className={styles.img}
              src={params.thumbnail}
              data-testid="card-image"
              alt={`${params.title} image`}
            ></img>
            <div className={styles.params}>
              <p className={styles.property} data-testid="card-category">
                Category: {params.category}
              </p>
              <p className={styles.property} data-testid="card-property">
                Price: {Math.round(params.price).toString()}${" "}
                {`(-${params.discountPercentage.toString()}%)`}
              </p>
            </div>
            <p className={styles.link} data-testid="card-link">
              See more
            </p>
          </div>
        ))}

      {!products && (
        <div className={styles.error} data-testid="no_results">
          No products with this params!
        </div>
      )}
    </div>
  );
};

export default ResultsBlock;
