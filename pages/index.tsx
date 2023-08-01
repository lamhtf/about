import Link from "next/link";
import styles from "./styles/home.module.scss";
import { TopMenuBar } from "@/components/TopMenuBar";

export default function Home() {
  return (
    <>
      <TopMenuBar />
      <div>Home</div>
    </>
  );
}
