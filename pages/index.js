import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>IELTS Practice</h1>
      <p className={styles.subtitle}>Select a skill to practice</p>

      <div className={styles.grid}>
        <Link href="/listening" className={styles.card}>
          <h2>🎧 Listening</h2>
          <p>Practice IELTS listening skills</p>
        </Link>

        <Link href="/reading" className={styles.card}>
          <h2>📖 Reading</h2>
          <p>Improve reading comprehension</p>
        </Link>

        <Link href="/speaking" className={styles.card}>
          <h2>🎤 Speaking</h2>
          <p>Prepare speaking answers</p>
        </Link>

        <Link href="/writing" className={styles.card}>
          <h2>✍️ Writing</h2>
          <p>Practice Task 1 & Task 2</p>
        </Link>
      </div>
    </div>
  );
}
