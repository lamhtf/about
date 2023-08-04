import styles from "./styles/home.module.scss";
import { TopMenuBar } from "@/components/TopMenuBar";
import Image01 from "../public/image01.jpg";
import Image02 from "../public/image02.jpg";
import Image03 from "../public/image03.jpg";
import Image04 from "../public/image04.jpg";
import Image05 from "../public/image05.jpg";
import Image06 from "../public/image06.jpg";
import Image07 from "../public/image07.jpg";
import Image08 from "../public/image08.jpg";
import { useEffect, useState } from "react";
import NxImage, { StaticImageData } from "next/image";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "We are FWD Group IT =P",
};

export default function Home() {
  const [width, setWidth] = useState(0);

  const Image = ({ src, alt }: { src: StaticImageData; alt: string }) => {
    useEffect(() => {
      console.log("window.innerWidth", window.innerWidth);
      setWidth(window.innerWidth / 1.5);
    });
    return (
      <NxImage
        src={src}
        style={{ width: width, height: width / 2, borderRadius: 16 }}
        alt={alt}
        quality={10}
        objectFit="contain"
      />
    );
  };

  return (
    <>
      <Head>
        <title>Welcome to FWD Group IT Felix Team</title>
        <meta
          property="og:image"
          content="https://fwdgo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage06.51df1ff9.jpg&w=3840&q=10"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />
      </Head>
      <TopMenuBar />
      <div className={styles.content}>
        <div className={styles.title}>Group IT</div>
        <Image src={Image08} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Group Digital</div>
        <Image src={Image01} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Group Brand & Marketing</div>
        <Image src={Image07} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry</div>
        <Image src={Image02} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry</div>
        <Image src={Image03} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry Rest Area - Foosball</div>
        <Image src={Image04} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry Rest Area - Switch</div>
        <Image src={Image05} alt="Office" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry Rest Area - Swing</div>
        <Image src={Image06} alt="Office" />
      </div>
    </>
  );
}
