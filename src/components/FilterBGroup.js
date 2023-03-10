import React from "react";
import FilterButton from "@/components/FilterButton.js";
import styles from "@/styles/FilterBGroup.module.scss";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const FilterBGroup = ({ buttonArray, header }) => {
  const [buttonStates, setButtonStates] = React.useState(
    buttonArray.map((value, index) => {
      if (index == 0) {
        return 2;
      } else {
        return 0;
      }
    })
  );

  //the bSelection function checks for the type of event and then changes the categoryState accordingly across all of the categories
  const bSelection = (buttonNum, type) => {
    console.log(type);
    if (type == "mouseover" && buttonStates[buttonNum] != 2) {
      setButtonStates((prev) =>
        prev.map((value, index) => {
          if (index == buttonNum) {
            return 1;
          } else {
            return value;
          }
        })
      );
    } else if (type == "mouseout" && buttonStates[buttonNum] != 2) {
      setButtonStates((prev) =>
        prev.map((value, index) => {
          if (index == buttonNum) {
            return 0;
          } else {
            return value;
          }
        })
      );
    } else if (type == "click" && buttonStates[buttonNum] != 2) {
      setButtonStates((prev) =>
        prev.map((value, index) => {
          if (index == buttonNum) {
            return 2;
          } else if (value == 2) {
            return 0;
          } else {
            return 0;
          }
        })
      );
    }
    return 1;
  };

  return (
    <div>
      <h4 className={styles.header}>{header}</h4>
      <div className={styles.buttonflex}>
        {buttonArray.map((value, index) => {
          return (
            <FilterButton
              text={value}
              key={index}
              index={index}
              selected={buttonStates[index]}
              buttonNum={index}
              bSelection={bSelection}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterBGroup;
