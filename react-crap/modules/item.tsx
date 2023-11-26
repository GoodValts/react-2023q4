import { productParams } from "@/types/Interfaces";
import styles from "../styles/item.module.scss";

const ItemBlock = (item: productParams) => {
  if (item)
    return (
      <div className={styles.itemBlock} data-testid="detailed-card">
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
            Price: {Math.round(item.price)}${" "}
            {`(-${item.discountPercentage.toString()}%)`}
          </p>
          <p className={styles.property} data-testid="rating">
            Rating: {item.rating}
          </p>
          <p className={styles.property} data-testid="amount">
            Amount: {item.stock}
          </p>
        </div>
        <button className={styles.button} data-testid="button">
          Close add
        </button>
      </div>
    );
  return null;
};

export default ItemBlock;
