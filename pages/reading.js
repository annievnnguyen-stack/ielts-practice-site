import ExamLayout from "../components/ExamLayout";

export default function Reading() {
  return (
    <ExamLayout title="IELTS Reading" timeInMinutes={60}>
      <article style={{ lineHeight: "1.7" }}>
        <h3>Passage 1</h3>

        <p>
          Climate change is one of the most pressing issues facing the modern world.
          Scientists agree that rising global temperatures are largely caused by
          human activities such as burning fossil fuels.
        </p>

        <p>
          Governments around the world are now seeking ways to reduce carbon
          emissions while maintaining economic growth. Renewable energy sources
          such as wind and solar power are becoming increasingly popular.
        </p>

        <p>
          However, critics argue that transitioning away from fossil fuels is
          expensive and may lead to job losses in traditional industries.
        </p>
      </article>
    </ExamLayout>
  );
}
