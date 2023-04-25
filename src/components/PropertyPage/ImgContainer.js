import styles from "@/styles/ImgContainer.module.scss";

const ImgContainer = ({ imgArray }) => {
  return (
    <div>
      <div className={styles.flexDiv}>
        <img src={imgArray[0]} className={styles.firstImg} />
        <div className={styles.otherImgContainer}>
          {imgArray.map((image, index) => {
            if (index > 0) {
              return (
                <img
                  src={imgArray[index]}
                  key={index}
                  className={styles.secondSet}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ImgContainer;
