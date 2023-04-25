import styles from "@/styles/PropertyHeader.module.scss";
import { react, useEffect, useState } from "react";

const PropertyHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headeritem1}>
          <img src="/images/logo.png" className={styles.logo} />
        </div>
      </header>
    </>
  );
};

export default PropertyHeader;
