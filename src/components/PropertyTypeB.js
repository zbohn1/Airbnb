import styles from "@/styles/PropertyTypeB.module.scss";
import { React, useEffect, useState } from "react";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const PropertyTypeB = ({ typeImg, typeDescription }) => {
  const [selected, setSelected] = useState(false);
  const [tiny, setTiny] = useState(false);
  const [over, setOver] = useState(false);
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
