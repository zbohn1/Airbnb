import { Montserrat } from "@next/font/google";
import styles from "@/styles/TopText.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const TopText = ({ filtered }) => {
  return (
    <>
      <div>
        <h3 className={styles.headerText}>{filtered[0].name}</h3>
        <div>
          <p className={styles.subheaderText}>★ 5.0</p>
          <p
            className={styles.subheaderText2}
          >{`${filtered[0].city_id}, ${filtered[0].country}`}</p>
        </div>
      </div>
    </>
  );
};

export default TopText;
