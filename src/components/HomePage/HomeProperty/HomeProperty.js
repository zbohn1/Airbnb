import Carousel from "./ImageObject/Carousel.js";
import HomePropertyText from "./HomePropertyText.js";
import styles from "@/styles/HomeProperty.module.scss";

const HomeProperty = ({ carouselImages, price, location, stars, id }) => {
  return (
    <>
      <article className={styles.propertywrapper}>
        <Carousel carouselImages={carouselImages} carouselNumber={1} id={id} />
        <HomePropertyText
          price={price}
          location={location}
          stars={stars}
          id={id}
        />
      </article>
    </>
  );
};

export default HomeProperty;
