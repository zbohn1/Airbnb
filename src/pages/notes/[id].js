import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

//this route is going to have a parameter in it called i so path will be /notes/id

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  //id was what was put in the file name
  const { id } = router.query;
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>Notes {id}</div>
        </div>
      </main>
    </>
  );
}
