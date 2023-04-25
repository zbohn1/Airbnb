import React, { useState } from "react";
import styles from "@/styles/PriceSlider.module.scss";
import { SearchFilterContext } from "@/pages/index.js";

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(480);

  const {
    searchState,
    setSearchState,
    searchIncrement,
    setSearchIncrement,
    filterState,
    setFilterState,
    finalState,
    setFinalState,
  } = React.useContext(SearchFilterContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice" && value < maxPrice) {
      let nextPrice = parseInt(value);
      setMinPrice(parseInt(value));
      setFilterState((prev) => {
        return { ...prev, minPrice: nextPrice };
      });
    } else if (name === "maxPrice" && value > minPrice) {
      let nextPrice = parseInt(value);
      setMaxPrice(parseInt(value));
      setFilterState((prev) => {
        return { ...prev, maxPrice: nextPrice };
      });
    }
  };

  const formatPrice = (price) => {
    if (price == 480) {
      return `$${price}+`;
    }
    return `$${price}`;
  };

  let minFormatted = formatPrice(minPrice);
  let maxFormatted = formatPrice(maxPrice);
  if (maxFormatted == "480") {
    maxFormatted = "480+";
  }
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>{`min Price: ${minFormatted}`}</span>
        <span className={styles.label}>{`max Price: ${maxFormatted}`}</span>
      </div>
      <input
        type="range"
        name="minPrice"
        min="0"
        max="480"
        value={minPrice}
        step="20"
        className={styles.slider}
        onChange={handleChange}
      />
      <input
        type="range"
        name="maxPrice"
        min="0"
        max="480"
        value={maxPrice}
        step="20"
        className={styles.slider}
        onChange={handleChange}
      />
    </div>
  );
};

export default PriceSlider;
