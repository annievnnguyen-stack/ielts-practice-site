import ExamLayout from "../components/ExamLayout";

export default function Writing() {
  return (
    <ExamLayout title="IELTS Writing" timeInMinutes={60}>
      
      <section style={{ marginBottom: 30 }}>
        <h3>Task 1</h3>
        <p>
          The chart below shows the percentage of households with internet access
          in three countries between 2000 and 2020.
        </p>

        <textarea
          placeholder="Write at least 150 words..."
          rows={8}
          style={{ width: "100%", padding: 10 }}
        />
      </section>

      <section>
        <h3>Task 2</h3>
        <p>
          Some people believe that children should be taught how to manage money
          at school. Others think this is the responsibility of parents.
          Discuss both views and give your own opinion.
        </p>

        <textarea
          placeholder="Write at least 250 words..."
          rows={10}
          style={{ width: "100%", padding: 10 }}
        />
      </section>

    </ExamLayout>
  );
}
