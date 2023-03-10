import styles from "@/styles/Carousel.module.scss";

const ArrowButton = ({
  className,
  switchImage,
  value,
  children,
  index,
  finalIndex,
}) => {
  return (
    <>
      <button
        value={value}
        onClick={switchImage}
        className={`${className} ${index == finalIndex && styles.hidden}`}
        ari-label={`${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default ArrowButton;
