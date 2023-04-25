import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Json from "@/components/jsondata.js";
import TopText from "@/components/PropertyPage/TopText.js";
import ImgContainer from "@/components/PropertyPage/ImgContainer.js";
import HostPanel from "@/components/PropertyPage/HostPanel.js";
import ExtraBenefits from "@/components/PropertyPage/ExtraBenefits.js";
import PropertyHeader from "@/components/PropertyPage/PropertyHeader.js";
import ReservationContainer from "@/components/PropertyPage/Reservations/ReservationContainer.js";
import styles from "@/styles/Id.module.scss";
import DescriptionContainer from "@/components/PropertyPage/DescriptionContainer.js";
import Benefits from "@/components/PropertyPage/Benefits.js";

//this route is going to have a parameter in it called id so path will be /id

export default function PropertyPage() {
  const router = useRouter();

  //id was what was put in the file name
  const { id } = router.query;

  let preFiltered = Json;
  let filtered = Json.filter((property) => property.id == id);

  console.log(filtered);

  //add images in id folder with id and then index of for loop to get all images for this property
  let imgArray = [];
  for (let i = 1; i < 6; i++) {
    let link = `/images/property_images/${id}/a${id}${i}.webp`;
    imgArray.push(link);
  }

  return (
    <>
      <PropertyHeader />
      <main style={{ padding: "30px 160px" }}>
        <TopText filtered={filtered} />
        <ImgContainer imgArray={imgArray} />
        <div className={styles.flex}>
          <div className={styles.widthLimit}>
            <HostPanel filtered={filtered} />
            <ExtraBenefits filtered={filtered} />
            <DescriptionContainer filtered={filtered} />
            <Benefits filtered={filtered} />
          </div>
          <ReservationContainer filtered={filtered} />
        </div>
      </main>
    </>
  );
}
