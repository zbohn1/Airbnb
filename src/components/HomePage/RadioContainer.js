import RadioButton from "@/components/HomePage/RadioButton.js";
import styles from "@/styles/RadioContainer.module.scss";

const RadioContainer = ({ header, subheader, number }) => {
  return (
    <div className={styles.radioflex}>
      <div>
        <h4>{header}</h4>
        <p>{subheader}</p>
      </div>
      <RadioButton number={number} name={header} />
    </div>
  );
};

export default RadioContainer;
