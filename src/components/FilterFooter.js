import styles from "@/styles/FilterFooter.module.scss";
import { Montserrat } from "@next/font/google";
import { React, useEffect, useState, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const FilterFooter = ({ updateVisibility }) => {
  return (
    <footer className={styles.filterfooter}>
      <button className={styles.submit} onClick={updateVisibility}>
        Find Homes
      </button>
    </footer>
  );
};

export default FilterFooter;
