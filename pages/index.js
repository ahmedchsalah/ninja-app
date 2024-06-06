import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comp/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
          <Head>
              <title>Ninja | Home</title>
          </Head>
          <div>
              <h1 className={styles.title}>home page</h1>
              <p className={styles.text}>hjefbrsjfbaxjknjkbndfvsda</p>
              <p className={styles.text}>kiflfnsrkgndkrnvndjgn</p>
              <p className={styles.text}>nekgewrjejkvkmkmwewe</p>
          </div>
      </>
  );
}
