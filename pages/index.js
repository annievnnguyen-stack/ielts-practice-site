import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>IELTS Practice</h1>
      <p style={styles.subtitle}>
        Choose a skill to start practicing
      </p>

      <div style={styles.grid}>
        <Card href="/listening" title="🎧 Listening" />
        <Card href="/reading" title="📖 Reading" />
        <Card href="/speaking" title="🗣 Speaking" />
        <Card href="/writing" title="✍️ Writing" />
      </div>
    </main>
  );
}

function Card({ href, title }) {
  return (
    <Link href={href} style={styles.card}>
      {title}
    </Link>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 24px",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    fontSize: "20px",
    fontWeight: "600",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#333",
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
};
