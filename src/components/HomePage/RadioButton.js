import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "@/styles/RadioButton.module.scss";
import { SearchFilterContext } from "@/pages/index.js";

const RadioButton = ({ number, name }) => {
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

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    let currentCheck = !checked;
    if (currentCheck) {
      setFilterState((prev) => {
        let curr = prev.ExtraBenefits;
        curr[number] = name;

        return { ...prev, ExtraBenefits: curr };
      });
    } else {
      setFilterState((prev) => {
        let curr = prev.ExtraBenefits;
        curr[number] = "";
        return { ...prev, ExtraBenefits: curr };
      });
    }
    console.log(filterState);
    setChecked(!checked);
  };

  //useCycle will move the x value back and forth between the two values when paired with onclick. Note that I may need to reconfigure for mobile with on-tap
  const [x, cycleX] = useCycle(0, 12);

  return (
    <label className={styles.container}>
      <div className={styles.div}></div>
      <input
        type="checkbox"
        className={styles.radio}
        checked={checked}
        onChange={handleCheck}
      />

      {/* animate moves the x property to the x value, and cyclex changes the x value, transition controls how quickly it moves */}
      <motion.span
        className={styles.checkmark}
        animate={{
          x: x,
        }}
        onClick={() => cycleX()}
        transition={{ duration: 0.5 }}
      >
        {checked && <motion.span className={styles.check}></motion.span>}
      </motion.span>
    </label>
  );
};

export default RadioButton;
