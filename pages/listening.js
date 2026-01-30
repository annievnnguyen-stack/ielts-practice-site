import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      
      <p><strong>Section 1</strong></p>
      <p>
You will hear a telephone conversation between a father and his daughter Hannah about 
renting a flat. Look at questions 1 to 5. You will see that there is an example that has 
been done for you. In the exam you would have about 30 seconds to read the questions.
      </p>
<p style={{ marginTop: 20 }}>
        <em>Now listen and answer questions 1 to 5.</em>
      </p>


      {/* Audio */}
      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Questions */}
      <h3>Put the appropriate letters A–C</h3>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          
      <p>
        <em>Now listen and answer questions 1 to 5.</em>
      </p>

<p><strong>Question 1: </strong></p>

<td>How long did Hannah think it would be before she found a place to live</td>
		<td>A.  Not more than two weeks</td>
		<td>B.  Less than three weeks</td>
		<td>C.  More than four weeks</td>
	 
		
          

      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>
      </p>

    </ExamLayout>
  );
}
