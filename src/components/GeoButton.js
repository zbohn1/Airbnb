import styles from "@/styles/GeoButton.module.scss";
import { Montserrat } from "@next/font/google";
import React from "react";
import { SearchFilterContext } from "@/pages/index.js";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const GeoButton = ({ image, title, openClose }) => {
  const [selected, setSelected] = React.useState(false);
  const [tiny, setTiny] = React.useState(false);

  const { searchState, setSearchState } = React.useContext(SearchFilterContext);

  //setTimeout so that you have time to see the animation
  function openCloseAndAdd() {
    setTimeout(() => openClose("guest"), 50);
    setSearchState((prev) => {
      return { ...prev, region: title };
    });
  }

  //controls the outline on hover
  function hoverEffect() {
    setSelected(true);
  }

  //controls getting rid of the outline on mouse out, needs to be separate from hovereffect since events fire multiple times
  function outEffect() {
    setSelected(false);
  }

  //controls the decrease in size of the button
  function tinyEffect() {
    setTiny(true);
  }

  //controls the increase in size of the button
  function largeEffect() {
    setTiny(false);
  }
  return (
    <div>
      <div
        height="123px"
        width="123px"
        onMouseDown={tinyEffect}
        onMouseUp={largeEffect}
        onMouseOver={hoverEffect}
        onMouseOut={outEffect}
        style={{ width: "123px", height: "123px", position: "relative" }}
        onClick={openCloseAndAdd}
      >
        <img
          src={image}
          alt={title}
          className={
            !selected
              ? styles.imgunselected
              : selected && !tiny
              ? styles.imgselected
              : `${styles.imgselected} ${styles.tiny}`
          }
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default GeoButton;
