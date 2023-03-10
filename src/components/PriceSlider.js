import React, { useState } from "react";
import styles from "@/styles/PriceSlider.module.scss";

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(480);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "minPrice" && value < maxPrice) {
      setMinPrice(parseInt(value));
    } else if (name === "maxPrice" && value > minPrice) {
      setMaxPrice(parseInt(value));
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
        max={maxPrice}
        value={minPrice}
        step="20"
        className={styles.slider}
        onChange={handleChange}
      />
      <input
        type="range"
        name="maxPrice"
        min={minPrice}
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
