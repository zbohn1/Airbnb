import { Montserrat } from "@next/font/google";
import styles from "@/styles/Benefits.module.scss";

const Benefits = ({ filtered }) => {
  let amenitiesArray = [];
  for (let i = 0; i < 10; i++) {
    let amenitySnippet = `amenity${i + 1}`;
    //if there is an extra benefit, push the benefit and its description
    if (filtered[0][amenitySnippet] != "") {
      console.log("a");
      amenitiesArray.push(filtered[0][amenitySnippet]);
    }
  }

  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.title}>What This Place Offers</h2>
      <div className={styles.amenityFlex}>
        {amenitiesArray.map((value, index) => {
          return [
            <div className={styles.flexDiv}>
              <img src={`/images/amenitiesImages/${value}.png`} width="30px" />
              <p className={styles.amenityText}>{value}</p>
              <div className={styles.spacer}></div>
            </div>,
          ];
        })}
      </div>
    </div>
  );
};

export default Benefits;
