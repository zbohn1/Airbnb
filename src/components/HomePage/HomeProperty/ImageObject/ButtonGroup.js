const ButtonGroup = ({ carouselImages, imgIndex }) => {
  return (
    <>
      <div className="carousel-circle-wrapper">
        {/* creating one button with id of the index of the array for each image. */}
        {carouselImages.map((value, index) => {
          if (index < 5) {
            return (
              <div
                data-value={index}
                value={index}
                key={index}
                className={`carousel-circle ${
                  imgIndex == index && "carousel-circle-highlighted"
                }`}
              ></div>
            );
          }
        })}
      </div>
    </>
  );
};

export default ButtonGroup;
