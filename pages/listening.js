import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      
      <p><strong>Instructions </strong></p>
      <p>You will hear a telephone conversation between a father and his daughter Hannah about renting a flat. You will see that there is an example that has been done for you. </p>

<p><strong>Look at questions 1 to 5: </strong></p>

<p>Type the appropriate letters <strong>A or B or C in the box </strong></p>


      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>  </p>

 {/* Audio */}
      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>


<p>1.  How long did Hannah think it would be before she found a place to live? </p>

<p>2.  According to Hannah, there is a lack rental accommodation because </p>

<p>3.  The £400 rent is </p>

<p>4.  Hannah is currently  </p>

<p>5.  The place where Hannah’s new accommodation is located is  </p>

     

      {/* Answers */}
      <h3>Answer 1–5</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>Answer 1:</td>
            <td>
              <input type="text" placeholder="1 _" />
            </td>
          </tr>

          <tr>
            <td>Answer 2:</td>
            <td>
              <input type="text" placeholder="2 _" />
            </td>
          </tr>

          <tr>
            <td>Answer 3:</td>
            <td>
              <input type="text" placeholder="3 _" />
            </td>
          </tr>

          <tr>
            <td>Answer 4:</td>
            <td>
              <input type="text" placeholder="4 _ months" />
            </td>

          <tr>
            <td>Answer 5:</td>
            <td>
              <input type="text" placeholder="5 _ months" />
            </td>
          </tr>
        </tbody>
      </table>

    </ExamLayout>
  );
}
