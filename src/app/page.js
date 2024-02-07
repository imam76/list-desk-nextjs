import Image from "next/image";
import styles from "./page.module.css";
import Greet from './greet';
import Galery from './galery';

export default function Home() {
  return (
    <main className={styles.main}>
      <Greet />
      <Galery />
      asdasdd
    </main>
  );
}
