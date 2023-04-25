import GuestButton from "@/components/HomePage/Guests/GuestButton.js";
import React from "react";
import { Montserrat } from "@next/font/google";
import styles from "@/styles/GuestItem.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const GuestItem = ({ category, descriptor, changeGuests }) => {
  const [numCategory, setNumCategory] = React.useState(0);

  function increment(type) {
    if (type == "minus") {
      if (numCategory > 0) {
        changeGuests(type);
        setNumCategory((prev) => prev - 1);
      }
    } else if (type == "plus") {
      if (numCategory < 15) {
        changeGuests(type);
        setNumCategory((prev) => prev + 1);
      }
    }
  }

  return (
    <div className={styles.itemwrapper}>
      <div>
        <h2 className={styles.category}>{category}</h2>
        <h2 className={styles.descriptor}>{descriptor}</h2>
      </div>
      <div className={styles.incrementorgroup}>
        <GuestButton
          type="minus"
          img={"/images/minus.png"}
          incrementor={increment}
          current={numCategory}
        />
        <h2 className={styles.number}>{numCategory}</h2>
        <GuestButton
          type="plus"
          img={"/images/plus.png"}
          incrementor={increment}
          current={numCategory}
        />
      </div>
    </div>
  );
};

export default GuestItem;
