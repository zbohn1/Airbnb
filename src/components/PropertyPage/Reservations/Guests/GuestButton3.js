import styles from "@/styles/GuestButton3.module.scss";

const GuestButton3 = ({ type, incrementor, img, current }) => {
  return (
    <>
      <button
        onClick={() => incrementor(type)}
        type="button"
        width="30px"
        className={styles.button}
      >
        <img src={img} alt={type} width="16px" />
        <div
          className={
            (current < 1 && type == "minus") || (current > 14 && type == "plus")
              ? styles.overlay
              : styles.hidden
          }
        ></div>
      </button>
    </>
  );
};

export default GuestButton3;
