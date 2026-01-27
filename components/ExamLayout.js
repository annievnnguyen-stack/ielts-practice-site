import { useEffect, useState } from "react";
import styles from "../styles/Exam.module.css";
import Link from "next/link";

export default function ExamLayout({ title, timeInMinutes, children }) {
  const [timeLeft, setTimeLeft] = useState(timeInMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.timer}>
          ⏱️ {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
        <Link href="/" className={styles.exit}>
          Exit
        </Link>
      </header>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
