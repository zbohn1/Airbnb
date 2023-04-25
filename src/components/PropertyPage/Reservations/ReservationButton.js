import { Montserrat } from "@next/font/google";
import styles from "@/styles/ReservationButton.module.scss";

const ReservationButton = () => {
  return (
    <>
      <button className={styles.reservationbutton}>Reserve</button>
    </>
  );
};

export default ReservationButton;
