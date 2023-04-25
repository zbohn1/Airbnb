import { Montserrat } from "@next/font/google";
import styles from "@/styles/DescriptionContainer.module.scss";

const DescriptionContainer = ({ filtered }) => {
  console.log(filtered);
  return (
    <div className={styles.container}>
      <p className={styles.description}>{`${filtered[0].description}`}</p>
    </div>
  );
};

export default DescriptionContainer;
