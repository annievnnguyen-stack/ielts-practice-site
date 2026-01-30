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
Questions 1–5 </strong>
Circle the appropriate letters A–C.
Example
Hannah’s father 
A says her mother says hello.
B cannot hear her very well.
C wants her to video-call him.
1  How long did Hannah think it would be before she found a place to live?
A  Not more than two weeks.
B  Less than three weeks.
C  More than four weeks.
2  According to Hannah, there is a lack rental accommodation because
A it is the end of the academic year.
B  the town is not very big.
C  there are many new technology companies locally.
3  The £400 rent is
A  less than Hannah has paid before.
B  subsidised for students by the university.
C  expensive for where it is.
4  Hannah is currently 
A  in hotel accommodation.
B  being put up by friends.
C  staying in a student hostel.
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
