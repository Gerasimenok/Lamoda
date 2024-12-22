import React from "react";
import styles from "../styles/ProductList.module.css";

const ProductList = ({ products }) => {
  const displayedProducts = products.slice(0, 9);

  return (
    <div className={styles.productList}>
      {displayedProducts.length === 0 ? (
        <p className={styles.noProducts}>
          По вашему запросу ничего не найдено.
        </p>
      ) : (
        displayedProducts.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <img src={product.imageUrl} alt={product.name} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productColor}>
              <strong>Цвет:</strong> {product.color}
            </p>
            <p className={styles.productPrice}>
              <strong>Цена:</strong> {product.price} BYN
            </p>
            <p className={styles.productRating}>
              <strong>Рейтинг:</strong> {product.rating} из 5
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
