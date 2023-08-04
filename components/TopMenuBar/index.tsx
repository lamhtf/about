import { useRouter } from "next/router";
import styles from "./styles/topMenuBar.module.scss";
import Link from "next/link";
import Head from "next/head";

export const TopMenuBar = () => {
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
      <div className={styles.menu}>
        <MenuItem label="Welcome" link="/" />
        <MenuItem label="About us" link="/about-us" />
        <MenuItem label="Join us" link="/join-us" />
      </div>
    </>
  );
};

const MenuItem = ({ label, link }: { label: string; link: string }) => {
  const router = useRouter();
  if (router.route === link)
    return (
      <Link href={link} className={styles.selected}>
        <span
          style={{
            color: "white",
          }}
        >
          {label}
        </span>
      </Link>
    );
  return (
    <Link href={link}>
      <span>{label}</span>
    </Link>
  );
};
