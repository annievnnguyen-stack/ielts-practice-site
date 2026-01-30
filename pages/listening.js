import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      
      <p><strong>Section 1</strong></p>
      <p>
You will hear a telephone conversation between a father and his daughter Hannah about 
renting a flat. Look at questions 1 to 5. You will see that there is an example that has 
been done for you. In the exam you would have about 30 seconds to read the questions.
Now listen and answer questions 1 to 5.
      </p>

      {/* Audio */}
      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Questions */}
      <h3>Library Membership Form</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" placeholder="1 _______" />
            </td>
          </tr>

          <tr>
            <td>Student ID:</td>
            <td>
              <input type="text" placeholder="2 _______" />
            </td>
          </tr>

          <tr>
            <td>Course:</td>
            <td>
              <input type="text" placeholder="3 _______" />
            </td>
          </tr>

          <tr>
            <td>Library card valid for:</td>
            <td>
              <input type="text" placeholder="4 _______ months" />
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>
      </p>

    </ExamLayout>
  );
}
