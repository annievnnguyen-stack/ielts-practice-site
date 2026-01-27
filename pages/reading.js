import ExamLayout from "../components/ExamLayout";

export default function Reading() {
  return (
    <ExamLayout title="IELTS Reading Test" timeInMinutes={60}>
      <h3>Reading Passage 1</h3>

      <p>
        The International English Language Testing System (IELTS) is designed to
        assess the language ability of candidates who need to study or work where
        English is used as the language of communication.
      </p>

      <h4>Question 1</h4>
      <p>What is the main purpose of IELTS?</p>

      <ul>
        <li>A. To test grammar only</li>
        <li>B. To assess English ability for study or work</li>
        <li>C. To teach English</li>
        <li>D. To replace school exams</li>
      </ul>
    </ExamLayout>
  );
}
