import styles from "@/styles/FilterInner.module.scss";
import { Montserrat } from "@next/font/google";
import { React, useEffect, useState, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const FilterInner = ({ header, subheader, children }) => {
  return (
    <div className={styles.topline}>
      <h4 className={styles.header}>{header}</h4>
      {subheader && <h6 className={styles.subheader}>{subheader}</h6>}
      <div>{children}</div>
    </div>
  );
};

export default FilterInner;
