import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      
    <p><strong>Instructions </strong></p>
      <p>You will hear a telephone conversation between a father and his daughter Hannah about renting a flat. You will see that there is an example that has been done for you. </p>

<p><strong>Look at questions 1 to 5: </strong></p>

<p>Type the appropriate letters <strong>A or B or C in the box </strong></p>



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
            <td>1.  How long did Hannah think it would be before she found a place to live?</td>
            <td>
              <input type="text" placeholder="1 _" />
            </td>
          </tr>

          <tr>
            <td>2.  According to Hannah, there is a lack rental accommodation because</td>
            <td>
              <input type="text" placeholder="2 _" />
            </td>
          </tr>

          <tr>
            <td>3.  The £400 rent is</td>
            <td>
              <input type="text" placeholder="3 _" />
            </td>
          </tr>

          <tr>
            <td>4.  Hannah is currently</td>
            <td>
              <input type="text" placeholder="4 _" />
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
