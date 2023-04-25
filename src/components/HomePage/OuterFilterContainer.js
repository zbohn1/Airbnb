import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/OuterFilterContainer.module.scss";
import FilterContainer from "@/components/HomePage/FilterContainer.js";
import FilterHeader from "@/components/HomePage/FilterHeader.js";
import FilterFooter from "@/components/HomePage/FilterFooter.js";

const OuterFilterContainer = ({ visibility, updateVisibility }) => {
  const filterContainerVariants = {
    hidden: { opacity: 0, y: "100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={
        visibility ? styles.outerfiltercontainer : styles.outercontainerhidden
      }
      variants={filterContainerVariants}
      initial="hidden"
      animate={visibility ? "visible" : "hidden"}
    >
      <FilterHeader updateVisibility={updateVisibility} />
      <FilterContainer />
      <FilterFooter updateVisibility={updateVisibility} />
    </motion.div>
  );
};

export default OuterFilterContainer;
