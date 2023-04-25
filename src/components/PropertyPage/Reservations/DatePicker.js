import styles from "@/styles/DatePicker.module.scss";

const DatePicker = ({ kind, start, value, updateDate }) => {
  return (
    <>
      <div className={styles.datecontainer}>
        <label for={kind}>{`${kind}:`}</label>
        <input
          type="date"
          id={kind}
          name={kind}
          value={value}
          min={start}
          onChange={(e) => updateDate(e.target.name, e.target.value)}
          className={styles.datepicker}
        ></input>
      </div>
    </>
  );
};

export default DatePicker;
