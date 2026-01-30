import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.home}>
        ⬅ Back to Home
      </Link>

      <Link href="/listening">🎧 Listening</Link>
      <Link href="/reading">📘 Reading</Link>
      <Link href="/speaking">🗣 Speaking</Link>
      <Link href="/writing">✍️ Writing</Link>
    </nav>
  );
}
