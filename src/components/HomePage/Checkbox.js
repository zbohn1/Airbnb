import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Checkbox.module.scss";
import { Montserrat } from "@next/font/google";
import { SearchFilterContext } from "@/pages/index.js";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const Checkbox = ({ checkLabel, subLabel, name, number }) => {
  const [checked, setChecked] = useState(false);

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

  const handleCheck = () => {
    let nextCheck = !checked;
    if (nextCheck == true) {
      setFilterState((prev) => {
        let curr = prev[name];
        curr[number] = checkLabel;

        return { ...prev, name: curr };
      });
    } else if (nextCheck == false) {
      setFilterState((prev) => {
        let curr = prev[name];
        curr[number] = "";
        return { ...prev, name: curr };
      });
    }
    setChecked(!checked);
    console.log(filterState);
  };

  return (
    <div style={{ width: "340px" }}>
      <label className={styles.container}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={checked}
          onChange={handleCheck}
        />
        <motion.span
          className={styles.checkmark}
          animate={{
            backgroundColor: checked ? "#000" : "#fff",
          }}
          transition={{ duration: 0.2 }}
        >
          {checked && (
            <motion.div
              className={styles.checkmarkIcon}
              animate={{ rotate: 45 }}
            />
          )}
        </motion.span>
        <span className={styles.label}>{checkLabel}</span>
      </label>
      {subLabel && <p className={styles.sublabel}>{subLabel}</p>}
    </div>
  );
};

export default Checkbox;
