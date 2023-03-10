import { Montserrat } from "@next/font/google";
import GeoButton from "@/components/GeoButton.js";
import styles from "@/styles/RegionHolder.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const regions = [
  "/images/regionImages/I'm flexible.png",
  "/images/regionImages/Europe.png",
  "/images/regionImages/Italy.png",
  "/images/regionImages/Central America.png",
  "/images/regionImages/United Kingdom.png",
  "/images/regionImages/Mexico.png",
];

const title = [
  "I'm flexible",
  "Europe",
  "Italy",
  "Central America",
  "United Kingdom",
  "Mexico",
];

const RegionHolder = ({ show, openClose }) => {
  return (
    <div className={show ? styles.wrapper : styles.hidden}>
      <div>
        <h2 className={styles.title}> Search by region</h2>
      </div>
      <div className={styles.buttonwrapper}>
        {regions.map((value, index) => {
          return (
            <GeoButton
              key={index}
              image={value}
              title={title[index]}
              openClose={openClose}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RegionHolder;
