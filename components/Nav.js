import Link from "next/link";

export default function Nav() {
  return (
    <nav style={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/listening">Listening</Link>
      <Link href="/reading">Reading</Link>
      <Link href="/speaking">Speaking</Link>
      <Link href="/writing">Writing</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "16px",
    borderBottom: "1px solid #ddd",
    marginBottom: "24px",
  },
};
