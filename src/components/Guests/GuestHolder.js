import { Montserrat } from "@next/font/google";
import GuestItem from "@/components/Guests/GuestItem.js";
import styles from "@/styles/GuestHolder.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const categories = ["Adults", "Children", "Infants", "Pets"];

const descriptors = [
  "Ages 13 or above",
  "Ages 2-12",
  "Under 2",
  "Bringing a service animal?",
];

const GuestHolder = ({ show, changeGuests }) => {
  return (
    <div className={show ? styles.wrapper : styles.hidden}>
      <div className={styles.guestitemwrapper}>
        {categories.map((value, index) => {
          return (
            <GuestItem
              key={index}
              category={value}
              descriptor={descriptors[index]}
              changeGuests={changeGuests}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GuestHolder;
