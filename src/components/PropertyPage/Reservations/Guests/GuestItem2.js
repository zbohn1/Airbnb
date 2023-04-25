import GuestButton3 from "@/components/PropertyPage/Reservations/Guests/GuestButton3.js";
import React from "react";
import { Montserrat } from "@next/font/google";
import styles from "@/styles/GuestItem2.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const GuestItem2 = ({ category, descriptor, changeGuests, numberGuests }) => {
  const [numCategory, setNumCategory] = React.useState(0);

  function increment(type) {
    if (type == "minus") {
      if (numCategory > 0) {
        changeGuests(type);
        setNumCategory((prev) => prev - 1);
      }
    } else if (type == "plus") {
      if (numCategory < 15 && category != "Adults") {
        changeGuests(type);
        setNumCategory((prev) => prev + 1);
      } else if (numCategory < 14) {
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
        <GuestButton3
          type="minus"
          img={"/images/minus.png"}
          incrementor={increment}
          current={numCategory}
        />
        <h2 className={styles.number}>
          {category == "Adults" ? numCategory + 1 : numCategory}
        </h2>
        <GuestButton3
          type="plus"
          img={"/images/plus.png"}
          incrementor={increment}
          current={category == "Adults" ? numCategory + 1 : numCategory}
        />
      </div>
    </div>
  );
};

export default GuestItem2;
