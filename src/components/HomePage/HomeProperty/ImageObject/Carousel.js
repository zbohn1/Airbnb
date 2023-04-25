import React from "react";
import ButtonGroup from "./ButtonGroup.js";
import ArrowButton from "./ArrowButton.js";
import styles from "@/styles/Carousel.module.scss";
import Link from "next/link";

const Carousel = ({ carouselImages, carouselNumber, id }) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [slide, setSlide] = React.useState(1);
  let direction = 0;

  function increaseIndexSlide() {
    direction = 0;
    setSlide(1);
    setImgIndex((prev) => {
      if (prev < carouselImages.length - 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  }

  function decreaseIndexSlide() {
    direction = 0;
    setSlide(1);
    setImgIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }

  // with this function, we update the slide value first, which triggers the class switch in the jsx. Then, after that has happened with set-timeout, we update the index, changing all of the pictures. this way you can still see the slide transition

  const switchImage = (e) => {
    if (e.currentTarget.value == 1) {
      if (imgIndex < carouselImages.length - 1) {
        direction = 1;
        setSlide(2);
        setTimeout(increaseIndexSlide, 500);
      } else {
        return null;
      }
    } else if (e.currentTarget.value == 2) {
      direction = -1;
      if (imgIndex > 0) {
        setSlide(0);
        setTimeout(decreaseIndexSlide, 500);
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <div className={styles.carouselcontainer} aria-label="carousel">
        {/* mapping the images based on index. If the index is zero, only the right hand button should appear 
        and only an image on the right side should be ready to go if the index is greater than zero but less than the end than two images should appear, 
        otherwise just one on the left -- the appropriate classes are provided to the images based on this logic to support the transition */}
        {carouselImages.map((value, index) => {
          if (imgIndex <= 0 && index == 0) {
            return (
              <Link href="/[id]" as={`${id}`}>
                <img
                  src={carouselImages[0]}
                  key={index}
                  className={
                    slide == 1 ? styles.currentleftimage : styles.currentimage
                  }
                  tabIndex={slide == 1 ? 0 : -1}
                  alt={`"image " ${index + 1} " of " ${
                    carouselImages.length - 1
                  }`}
                />
              </Link>
            );
          } else if (imgIndex <= 0 && index == 1) {
            return (
              <Link href="/[id]" as={`${id}`}>
                <img
                  src={carouselImages[1]}
                  key={index}
                  className={
                    slide == 1
                      ? styles.nextrightimage
                      : styles.currentrightimage
                  }
                  tabIndex={slide == 1 ? -1 : 0}
                  width="200px"
                  alt={`"image " ${index + 1} " of " ${
                    carouselImages.length - 1
                  }`}
                />
              </Link>
            );
          } else if (imgIndex > 0 && index == imgIndex - 1) {
            return (
              <Link href="/[id]" as={`${id}`}>
                <img
                  src={carouselImages[imgIndex - 1]}
                  key={index}
                  className={
                    slide == 1 && direction == 0
                      ? styles.nextleftimage
                      : slide == 0
                      ? styles.currentleftimage
                      : styles.nextleftimage
                  }
                  alt={`"image " ${index + 1} " of " ${
                    carouselImages.length - 1
                  }`}
                  tabIndex={slide == 0 ? 0 : -1}
                />
              </Link>
            );
          } else if (
            (imgIndex > 0 && index == imgIndex) ||
            imgIndex >= carouselImages.length - 1
          ) {
            return (
              <Link href="/[id]" as={`${id}`}>
                <img
                  src={carouselImages[imgIndex]}
                  key={index}
                  className={
                    slide == 1 ? styles.currentleftimage : styles.currentimage
                  }
                  tabIndex={slide == 1 ? 0 : -1}
                  alt={`"image " ${index + 1} " of " ${
                    carouselImages.length - 1
                  }`}
                />
              </Link>
            );
          } else if (
            (imgIndex > 0 && index == imgIndex + 1) ||
            imgIndex >= carouselImages.length - 1
          ) {
            return (
              <Link href="/[id]" as={`${id}`}>
                <img
                  src={carouselImages[imgIndex + 1]}
                  key={index}
                  className={
                    slide == 1 && direction == 0
                      ? styles.nextrightimage
                      : slide == 2
                      ? styles.currentrightimage
                      : styles.nextrightimage
                  }
                  tabIndex={slide == 2 ? 0 : -1}
                  alt={`"image " ${index + 1} " of " ${
                    carouselImages.length - 1
                  }`}
                />
              </Link>
            );
          }
        })}
        <ArrowButton
          switchImage={switchImage}
          value={2}
          className={styles.backbutton}
          index={imgIndex}
          finalIndex={0}
        >
          <img src={"/images/leftarrow.png"} />
        </ArrowButton>
        <ArrowButton
          switchImage={switchImage}
          value={1}
          className={styles.forwardbutton}
          index={imgIndex}
          finalIndex={carouselImages.length - 1}
        >
          <img src="/images/rightarrow.png" />
        </ArrowButton>
        <ButtonGroup carouselImages={carouselImages} imgIndex={imgIndex} />
      </div>
    </>
  );
};

//tomorrow: start by adding hidden class (multiple classes in react), then add comments for current-target, then add dots with color lighting up, then add transparency with buttons, then either figure out how to add json data or add information underneath

{
  /* }
        <img
          data-value={1}
          src={carouselImages[0]}
          width="200px"
          className={slide != 0 ? "next-left-image" : "current-right-image"}
        /> */
}
{
  /* ) : (
          <></>
        )} */
}
{
  /* <img
          src={carouselImages[1]}
          alt={"Property image #" + `${imgIndex}`}
          width="200px"
          className={slide == 1 ? "current-left-image" : "next-right-image"}
          data-value={2} */
}
// />
{
  /* {imgIndex < carouselImages.length - 1 ? (
          <img
            src={carouselImages[2]}
            width="200px"
            className={slide != 2 ? "next-right-image" : "current-left-image"}
            data-value={3}
          />
        ) : (
          <></>
        )} */
}
{
  //   /* </div>
  //       <ButtonGroup
  //         switchImage={switchImage}
  //         carouselImages={carouselImages}
  //         carouselNumber={carouselNumber}
  //       />
  //       <BackButton switchImage={switchImage} />
  //       <ForwardButton switchImage={switchImage} />
  //     </>
  //   );
  // }; */
}

export default Carousel;
