import styles from "@/styles/HomeProperty.module.scss";
import Link from "next/link";

const HomePropertyText = ({ location, price, stars, id }) => {
  return (
    <>
      <Link
        href="/[id]"
        as={`${id}`}
        style={{ textDecoration: "none", color: "none" }}
      >
        <div className={styles.toplinewrapper}>
          <h4 className={styles.location}>{location}</h4>
          <h6 className={styles.stars}>★ {stars}</h6>
        </div>
        <p>Feb 26 - Mar 3</p>
        <div className={styles.pricewrapper}>
          <h4 className={styles.priceline}>${price}</h4>
          <h6 className={styles.priceline}>night</h6>
        </div>
      </Link>
    </>
  );
};

export default HomePropertyText;
