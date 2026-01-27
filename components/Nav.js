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



import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/listening", label: "Listening" },
    { href: "/reading", label: "Reading" },
    { href: "/speaking", label: "Speaking" },
    { href: "/writing", label: "Writing" },
  ];

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {links.map((link) => {
          const isActive = router.pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                ...styles.link,
                ...(isActive ? styles.active : {}),
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  nav: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    gap: "28px",
    padding: "16px 24px",
  },
  link: {
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    color: "#555",
    paddingBottom: "4px",
  },
  active: {
    color: "#0070f3",
    borderBottom: "2px solid #0070f3",
  },
};
