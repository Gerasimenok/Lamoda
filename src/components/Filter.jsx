import React from "react";
import styles from "../styles/Filter.module.css";

const Filter = ({
  selectedColors,
  setSelectedColors,
  priceRange,
  setPriceRange,
  products,
}) => {
  const colors = [...new Set(products.map((product) => product.color))];

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    const parsedValue =
      value === "" ? "" : Math.max(0, Math.min(9999, parseFloat(value)));
    newRange[index] = isNaN(parsedValue) ? "" : parsedValue;
    setPriceRange(newRange);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.colorFilter}>
        <h3>Цвет:</h3>
        <ul className={styles.colorList}>
          {colors.map((color) => (
            <li key={color}>
              <input
                type="checkbox"
                id={color}
                name={color}
                checked={selectedColors.includes(color)}
                onChange={() => {
                  if (selectedColors.includes(color)) {
                    setSelectedColors(
                      selectedColors.filter((c) => c !== color)
                    );
                  } else {
                    setSelectedColors([...selectedColors, color]);
                  }
                }}
              />
              <label htmlFor={color}>{color}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.priceFilter}>
        <h3>Цена:</h3>
        <input
          type="number"
          id="price-from"
          name="price-from"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(0, e.target.value)}
          placeholder="от"
        />
        <input
          type="number"
          id="price-to"
          name="price-to"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(1, e.target.value)}
          placeholder="до"
        />
      </div>
    </div>
  );
};

export default Filter;
