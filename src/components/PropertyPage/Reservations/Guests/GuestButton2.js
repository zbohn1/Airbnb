import { Montserrat } from "@next/font/google";
import styles from "@/styles/GuestButton2.module.scss";

const GuestButton2 = ({ guestClick, numberGuests }) => {
  return (
    <>
      <button
        id="guestbutton"
        className={styles.button}
        onClick={() => guestClick()}
      >
        <div className={styles.buttonflex}>
          <div className={styles.guestwording}>
            <div>Guests</div>
            <p>{`${numberGuests} guests`}</p>
          </div>
          <img
            src="/images/downarrow.png"
            alt="Down arrow"
            style={{ width: "15px", height: "15px" }}
          />
        </div>
      </button>
    </>
  );
};

export default GuestButton2;
