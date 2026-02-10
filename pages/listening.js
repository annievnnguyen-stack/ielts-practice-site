import ExamLayout from "../components/ExamLayout";

export default function Listening() {
  return (
    <ExamLayout title="IELTS Listening" timeInMinutes={30}>
      
      <p><strong>Instructions</strong></p>

      <p>You will hear a telephone conversation between a father and his daughter Hannah about renting a flat. </p>

      <p>Look at questions 1 to 5. </p>


<p style={{ marginTop: 20 }}>
<em>Example</em>
</p>

<p>Hannah’s father</p>
<p><strong>A</strong> says hello to ANNIE.</p>
<p><strong>B</strong> cannot hear her very well.</p>
<p><strong>C</strong> wants her to video-call him.</p>



      {/* Audio */}
      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>


 {/* Questions */}

     <h3>Choose the correct answer (A, B or C)</h3>

<div style={{ marginBottom: 20 }}>
  <p><strong>1.</strong></p>
  <label><input type="radio" name="q1" value="A" /> A</label><br />
  <label><input type="radio" name="q1" value="B" /> B</label><br />
  <label><input type="radio" name="q1" value="C" /> C</label>
</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>2.</strong></p>
  <label><input type="radio" name="q2" value="A" /> A</label><br />
  <label><input type="radio" name="q2" value="B" /> B</label><br />
  <label><input type="radio" name="q2" value="C" /> C</label>
</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>3.</strong></p>
  <label><input type="radio" name="q3" value="A" /> A</label><br />
  <label><input type="radio" name="q3" value="B" /> B</label><br />
  <label><input type="radio" name="q3" value="C" /> C</label>
</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>4.</strong></p>
  <label><input type="radio" name="q4" value="A" /> A</label><br />
  <label><input type="radio" name="q4" value="B" /> B</label><br />
  <label><input type="radio" name="q4" value="C" /> C</label>
</div>


      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>
      </p>

    </ExamLayout>
  );
}