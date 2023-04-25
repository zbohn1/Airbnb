import { Montserrat } from "@next/font/google";
import styles from "@/styles/ExtraBenefits.module.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const ExtraBenefits = ({ filtered }) => {
  let benefitsArray = [];
  for (let i = 0; i < 3; i++) {
    let benefitsSnippet = `extra_benefits${i + 1}`;
    let descriptionSnippet = `extra_benefits${i + 1}_description`;
    let benefitsObject = {
      benefit: filtered[0][benefitsSnippet],
      description: filtered[0][descriptionSnippet],
    };
    //if there is an extra benefit, push the benefit and its description
    if (filtered[0][benefitsSnippet] != "") {
      console.log("a");
      benefitsArray.push(benefitsObject);
    }
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.marginContainer}>
          {benefitsArray.length > 0 ? (
            <img
              src={`/images/benefitsImages/${benefitsArray[0].benefit}.png`}
              className={styles.benefitsImg}
            />
          ) : null}
        </div>
        <div>
          {benefitsArray.length > 0 ? (
            <p className={styles.header}>{benefitsArray[0].benefit}</p>
          ) : null}
          {benefitsArray.length > 0 ? (
            <p className={styles.subheader}>{benefitsArray[0].description}</p>
          ) : null}
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.marginContainer}>
          {benefitsArray.length > 1 ? (
            <img
              src={`/images/benefitsImages/${benefitsArray[1].benefit}.png`}
              className={styles.benefitsImg}
            />
          ) : null}
        </div>
        <div>
          {benefitsArray.length > 1 ? (
            <p className={styles.header}>{benefitsArray[1].benefit}</p>
          ) : null}
          {benefitsArray.length > 1 ? (
            <p className={styles.subheader}>{benefitsArray[1].description}</p>
          ) : null}
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.marginContainer}>
          {benefitsArray.length > 2 ? (
            <img
              src={`/images/benefitsImages/${benefitsArray[2].benefit}.png`}
              className={styles.benefitsImg}
            />
          ) : null}
        </div>
        <div>
          {benefitsArray.length > 2 ? (
            <p className={styles.header}>{benefitsArray[2].benefit}</p>
          ) : null}
          {benefitsArray.length > 2 ? (
            <p className={styles.subheader}>{benefitsArray[2].description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExtraBenefits;
