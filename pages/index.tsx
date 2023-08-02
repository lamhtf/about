import styles from "./styles/home.module.scss";
import { TopMenuBar } from "@/components/TopMenuBar";
import Image01 from '../assets/image01.jpg';
import Image02 from '../assets/image02.jpg';
import Image03 from '../assets/image03.jpg';
import Image04 from '../assets/image04.jpg';
import Image05 from '../assets/image05.jpg';
import Image06 from '../assets/image06.jpg';
import Image07 from '../assets/image07.jpg';
import Image08 from '../assets/image08.jpg';
import { useEffect, useState } from "react";
import NxImage from 'next/image'

export default function Home() {

  const [width, setWidth] = useState(0);

  const Image = (props) => {
	  useEffect(() => {
      console.log('window.innerWidth',window.innerWidth);
	    setWidth(window.innerWidth/1.5);
	  });
	  return <NxImage src={props.src} style={{ width: width, height: width/2, borderRadius:16 }} alt="Office" quality={10} objectFit="contain"/> ;
	};

  return (
    <>
      <TopMenuBar />
      <div className={styles.content}>
        <div className={styles.title}>Group IT</div>
        <Image
          src={Image08}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Group Digital</div>
        <Image
          src={Image01}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Group Brand & Marketing</div>
        <Image
          src={Image07}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry</div>
        <Image
          src={Image02}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry</div>
        <Image
          src={Image03}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry Rest Area - Foosball</div>
        <Image
          src={Image04}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry Rest Area - Switch</div>
        <Image
          src={Image05}
          alt="Office"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Pantry Rest Area - Swing</div>
        <Image
          src={Image06}
          alt="Office"
        />
      </div>
    </>
  );
}
