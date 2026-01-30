import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      <p><strong>Section 1:</strong> Listen to the audio and answer the questions.</p>

      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <p>Questions will appear here.</p>
    </ExamLayout>
  );
}
