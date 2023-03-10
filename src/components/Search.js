import React from "react";
import styles from "@/styles/Search.module.scss";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const Search = ({ searchClick, menuOpen }) => {
  return (
    <div className={!menuOpen ? styles.container : styles.hidden}>
      <button
        className={styles.regionbutton}
        id="regionbutton"
        onClick={searchClick}
      >
        <div className={styles.innerdiv}>Anywhere</div>
        <span className={styles.innerline}></span>
      </button>
      <button
        className={styles.guestbutton}
        id="guestbutton"
        onClick={searchClick}
      >
        <div className={styles.innerdiv}>Add guests</div>
        <div className={styles.searchbackground}>
          <img
            src="/images/searchicon.png"
            alt="search icon"
            style={{ width: "15px" }}
          />
        </div>
      </button>
    </div>
  );
};

export default Search;
