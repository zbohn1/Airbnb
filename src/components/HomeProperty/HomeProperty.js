import Carousel from "./ImageObject/Carousel.js";
import HomePropertyText from "./HomePropertyText.js";
import styles from "@/styles/HomeProperty.module.scss";

const HomeProperty = ({ carouselImages, price, location, stars }) => {
  return (
    <>
      <article className={styles.propertywrapper}>
        <Carousel carouselImages={carouselImages} carouselNumber={1} />
        <HomePropertyText price={price} location={location} stars={stars} />
      </article>
    </>
  );
};

export default HomeProperty;
