import { Montserrat } from "@next/font/google";
import GuestItem2 from "@/components/PropertyPage/Reservations/Guests/GuestItem2.js";
import styles from "@/styles/GuestHolder2.module.scss";

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

const GuestHolder2 = ({ show, changeGuests, numberGuests, guestClick }) => {
  return (
    <div className={show ? styles.wrapper : styles.hidden}>
      <div className={styles.guestitemwrapper}>
        {categories.map((value, index) => {
          return (
            <GuestItem2
              key={index}
              category={value}
              descriptor={descriptors[index]}
              changeGuests={changeGuests}
              numberGuests={numberGuests}
            />
          );
        })}
        <div className={styles.flex}>
          <h2 className={styles.close} onClick={() => guestClick()}>
            {" "}
            Close
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GuestHolder2;
