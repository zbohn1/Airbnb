import styles from "@/styles/FilterButton.module.scss";

const FilterButton = ({ text, selected, index, buttonNum, bSelection }) => {
  function selectionPart1(e) {
    bSelection(buttonNum, e.type);
  }

  return (
    <>
      <button
        className={
          selected == 0
            ? styles.unselected
            : selected == 1
            ? styles.hoverbutton
            : styles.selected
        }
        onMouseOver={selectionPart1}
        onMouseOut={selectionPart1}
        onClick={selectionPart1}
      >
        {text}
      </button>
    </>
  );
};

export default FilterButton;
