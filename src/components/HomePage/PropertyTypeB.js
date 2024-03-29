import styles from "@/styles/PropertyTypeB.module.scss";
import { useEffect, useState } from "react";
import React from "react";
import { Montserrat } from "@next/font/google";
import { SearchFilterContext } from "@/pages/index.js";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const PropertyTypeB = ({ typeImg, typeDescription, number }) => {
  const [selected, setSelected] = useState(false);
  const [tiny, setTiny] = useState(false);
  const [over, setOver] = useState(false);
  const {
    searchState,
    setSearchState,
    searchIncrement,
    setSearchIncrement,
    filterState,
    setFilterState,
    finalState,
    setFinalState,
  } = React.useContext(SearchFilterContext);

  //controls the outline on hover
  function hoverEffect() {
    setOver(true);
  }

  //controls getting rid of the outline on mouse out, needs to be separate from hovereffect since events fire multiple times
  function outEffect() {
    setOver(false);
  }

  //controls the decrease in size of the button
  function tinyEffect() {
    setTiny(!tiny);
  }

  //controls the increase in size of the button
  function largeEffect() {
    setTiny(false);
    if (selected == false) {
      setFilterState((prev) => {
        let curr = prev.PropertyType;
        curr[number] = typeDescription;
        return { ...prev, PropertyType: curr };
      });
    } else if (selected == true) {
      setFilterState((prev) => {
        let curr = prev.PropertyType;
        curr[number] = "";
        return { ...prev, PropertyType: curr };
      });
    }
    setSelected(!selected);
  }

  return (
    <div
      className={styles.shadowdiv}
      onMouseDown={tinyEffect}
      onMouseUp={largeEffect}
      onMouseOver={hoverEffect}
      onMouseOut={outEffect}
    >
      <div
        className={
          !selected && !over
            ? styles.containerunselected
            : !selected && over && !tiny
            ? styles.containerhover
            : !selected && over && tiny
            ? `${styles.containerhover} ${styles.tiny}`
            : styles.containerselected
        }
      >
        <img
          src={typeImg}
          alt={`Property Type of ${typeDescription}`}
          className={styles.img}
        />
        <h2 className={styles.description}>{typeDescription}</h2>
      </div>
    </div>
  );
};

export default PropertyTypeB;
