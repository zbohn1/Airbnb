import styles from "@/styles/FilterHeader.module.scss";

const FilterHeader = ({ updateVisibility }) => {
  return (
    <header className={styles.filterheader}>
      <img src="/images/ex.png" onClick={updateVisibility}></img>
      <h4>Filters</h4>
    </header>
  );
};

export default FilterHeader;
