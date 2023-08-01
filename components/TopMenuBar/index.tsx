import { useRouter } from "next/router";
import styles from "./styles/topMenuBar.module.scss";
import Link from "next/link";

export const TopMenuBar = () => {
  return (
    <div className={styles.menu}>
      <MenuItem label="Welcome" link="/" />
      <MenuItem label="About us" link="/about-us" />
      <MenuItem label="Join us" link="/join-us" />
    </div>
  );
};

const MenuItem = ({ label, link }: { label: string; link: string }) => {
  const router = useRouter();
  if (router.route === link)
    return (
      <Link href={link}>
        <span style={{ fontWeight: "bold", color: "white" }}>{label}</span>
      </Link>
    );
  return (
    <Link href={link}>
      <span>{label}</span>
    </Link>
  );
};
