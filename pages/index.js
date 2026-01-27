import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>IELTS Practice</h1>
      <p>Select a skill to practice</p>

      <div style={{ marginTop: "30px" }}>
        <p><Link href="/listening">🎧 Listening</Link></p>
        <p><Link href="/reading">📖 Reading</Link></p>
        <p><Link href="/speaking">🗣 Speaking</Link></p>
        <p><Link href="/writing">✍️ Writing</Link></p>
      </div>
    </div>
  );
}
