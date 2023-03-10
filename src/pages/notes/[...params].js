import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

//this route is going to have a parameter in it called i so path will be /notes/id

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  //params can basically be anything this is a catch all route - review next.js catch all route - useful for pages that have same layout but different urls --
  const { params } = router.query;
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>Notes {params}</div>
        </div>
      </main>
    </>
  );
}
