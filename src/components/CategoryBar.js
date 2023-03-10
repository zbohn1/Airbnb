import Category from "./Category.js";
import React from "react";
import styles from "@/styles/Category.module.scss";

const CategoryBar = ({
  categories,
  updateVisibility,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [categoryStates, setCategoryStates] = React.useState(
    categories.map((value, index) => {
      if (index == 0) {
        return 2;
      } else {
        return 0;
      }
    })
  );

  //the cSelection function checks for the type of event and then changes the categoryState accordingly across all of the categories
  const cSelection = (categoryNum, type) => {
    if (type == "mouseover" && categoryStates[categoryNum] != 2) {
      setCategoryStates((prev) =>
        prev.map((value, index) => {
          if (index == categoryNum) {
            return 1;
          } else {
            return value;
          }
        })
      );
    } else if (type == "mouseout" && categoryStates[categoryNum] != 2) {
      setCategoryStates((prev) =>
        prev.map((value, index) => {
          if (index == categoryNum) {
            return 0;
          } else {
            return value;
          }
        })
      );
    } else if (type == "click" && categoryStates[categoryNum] != 2) {
      setCategoryStates((prev) =>
        prev.map((value, index) => {
          if (index == categoryNum) {
            setSelectedCategory(categories[index]);
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
    <>
      <div className={styles.categorycontainer}>
        {categories.map((value, index) => {
          return (
            <Category
              cSelection={cSelection}
              select={categoryStates[index]}
              propertyType={value}
              key={index}
              categoryNum={index}
            />
          );
        })}
        <button className="property-filter" onClick={updateVisibility}>
          Filters
        </button>
      </div>
    </>
  );
};

export default CategoryBar;
