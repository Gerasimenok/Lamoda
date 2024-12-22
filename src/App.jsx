import React, { useState, useEffect, useMemo } from "react";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import styles from "./styles/App.module.css";
import { generateProducts } from "./data.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState(["", ""]);
  const [sortOption, setSortOption] = useState("priceAsc");

  useEffect(() => {
    const generatedProducts = generateProducts(9);
    setProducts(generatedProducts);
  }, []);

  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      const nameMatches = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const descriptionMatches = product.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const colorMatches =
        selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceFrom = parseFloat(priceRange[0]);
      const priceTo = parseFloat(priceRange[1]);
      const priceMatches =
        (isNaN(priceFrom) || product.price >= priceFrom) &&
        (isNaN(priceTo) || product.price <= priceTo);

      return (
        (nameMatches || descriptionMatches) && colorMatches && priceMatches
      );
    });
  }, [products, searchTerm, selectedColors, priceRange]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filterProducts];
    switch (sortOption) {
      case "priceAsc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "ratingDesc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return sorted;
  }, [filterProducts, sortOption]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="search-input"
        name="search"
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск"
        autoComplete="off"
      />
      <Sort sortOption={sortOption} setSortOption={setSortOption} />
      <div className={styles.mainContent}>
        <div className={styles.filterContainer}>
          <Filter
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            products={products}
          />
        </div>
        <div className={styles.productListContainer}>
          <ProductList products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;
