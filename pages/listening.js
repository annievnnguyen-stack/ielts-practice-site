import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      
      <p><strong>Instructions</strong></p>

      <p>You will hear a telephone conversation between a father and his daughter Hannah about renting a flat. </p>

      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>
      </p>

      <p style={{ marginTop: 20 }}>
      <p>You will see that there is an example that has been done for you. Type the appropriate <strong>ANSWERS A or B or C in the box </strong>.
      </p>




      {/* Audio */}
      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>



      {/* Questions */}


      <h3>ANSWERS</h3>
     <p>Now listen and answer questions 1 to 5. </p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>Example:</td>
            <td>
              <input type="text" placeholder="0 B" />
            </td>
          <tr>
            <td>Question 1:</td>
            <td>
              <input type="text" placeholder="1 _" />
            </td>
          </tr>

          <tr>
            <td>Question 2:</td>
            <td>
              <input type="text" placeholder="2 _" />
            </td>
          </tr>

          <tr>
            <td>Question 3:</td>
            <td>
              <input type="text" placeholder="3 _" />
            </td>
          </tr>

          <tr>
            <td>Question 4:</td>
            <td>
              <input type="text" placeholder="4 _" />
            </td>
          <tr>
            <td>Question 5:</td>
            <td>
              <input type="text" placeholder="5 _" />
            </td>
          </tr>
        </tbody>
      </table>



    </ExamLayout>
  );
}
