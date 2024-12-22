import React from "react";
import styles from "../styles/Sort.module.css";

const Sort = ({ sortOption, setSortOption }) => {
  const options = [
    { value: "priceAsc", label: "Сначала дешевые" },
    { value: "priceDesc", label: "Сначала дорогие" },
    { value: "ratingDesc", label: "Сначала популярные" },
  ];

  return (
    <div className={styles.sortContainer}>
      <div className={styles.buttonGroup}>
        {options.map((option) => (
          <button
            key={option.value}
            className={`${styles.sortButton} ${
              sortOption === option.value ? styles.active : ""
            }`}
            onClick={() => setSortOption(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sort;
