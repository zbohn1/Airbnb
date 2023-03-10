import RadioButton from "@/components/RadioButton.js";
import styles from "@/styles/RadioContainer.module.scss";

const RadioContainer = ({ header, subheader }) => {
  return (
    <div className={styles.radioflex}>
      <div>
        <h4>{header}</h4>
        <p>{subheader}</p>
      </div>
      <RadioButton />
    </div>
  );
};

export default RadioContainer;
