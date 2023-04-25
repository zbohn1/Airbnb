import styles from "@/styles/Category.module.scss";
import { Montserrat } from "@next/font/google";
import { React, useEffect, useState, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const Category = ({ select, propertyType, cSelection, categoryNum }) => {
  let text = useRef();
  const [width, setWidth] = useState(100);

  function selectionPart1(e) {
    cSelection(categoryNum, e.type);
  }

  useEffect(() => {
    setWidth(text.current.offsetWidth);
  });

  let imgPos = width / 2 - 11;
  return (
    // the button is positioned over the image, text, and line so that it can handle all of the click events.
    //the image, text, and line have three classes that change based on the selection state, which is passed in as a prop
    <>
      <div className={styles.categorywrapper} style={{ width: `${width}px` }}>
        <button
          name="button"
          type="button"
          className={styles.invisiblebutton}
          onMouseOver={selectionPart1}
          onMouseOut={selectionPart1}
          onClick={selectionPart1}
          aria-hidden="true"
        ></button>
        <img
          className={
            select == 0
              ? styles.normalimg
              : select == 1
              ? styles.hoverimg
              : styles.selectedimg
          }
          src={`/images/category_images/${propertyType}.png`}
          style={{ left: `${imgPos}px` }}
        />
        <h6
          ref={text}
          className={
            select == 0
              ? styles.normaltext
              : select == 1
              ? styles.hovertext
              : styles.selectedtext
          }
        >
          {propertyType}
        </h6>
        <div
          className={
            select == 0
              ? styles.hiddenline
              : select == 1
              ? styles.hoverline
              : styles.selectedline
          }
          style={{
            width: `${width}px`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Category;
