import { Montserrat } from "@next/font/google";
import styles from "@/styles/HostPanel.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const HostPanel = ({ filtered }) => {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          <h3 className={styles.header}>Hosted by {filtered[0].host}</h3>
          <div>
            <p className={styles.subheader}>{`${
              filtered[0].number_beds * 2
            } guests | ${filtered[0].number_bedrooms} bedrooms | ${
              filtered[0].number_beds
            } beds | ${filtered[0].number_bathrooms} bath`}</p>
          </div>
        </div>
        <img src={`/images/HostImage/host.webp`} className={styles.hostImg} />
      </div>
    </>
  );
};

export default HostPanel;
