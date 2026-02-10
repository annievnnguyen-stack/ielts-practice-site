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
<p><strong>QUESTION 1. </strong> How long did Hannah think it would be before she found a place to live?
</p>
 

<label><input type="radio" name="q1" value="A" />
A. Not more than two weeks. 
</label>

<label><input type="radio" name="q1" value="B" />
B. Less than three weeks.
</label>

<label><input type="radio" name="q1" value="C" />
C. More than four weeks. 
</label>

</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>QUESTION 2.</strong> According to Hannah, there is a lack rental accommodation because  
</p>

<label><input type="radio" name="q2" value="A" />
A. It is the end of the academic year.
</label>

<label><input type="radio" name="q2" value="B" />
B. The town is not very big. 
</label>

<label><input type="radio" name="q2" value="C" />
C. There are many new technology companies locally. 
</label>


</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>QUESTION 3.</strong> The £400 rent is </p>
  
<label><input type="radio" name="q3" value="A" />
A. Less than Hannah has paid before.
</label>

<label><input type="radio" name="q3" value="B" />
B. Subsidised for students by the university.
</label>

<label><input type="radio" name="q3" value="C" />
C. Expensive for where it is. 
</label>



</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>QUESTION 4.</strong> Hannah is currently</p>
  
<label><input type="radio" name="q4" value="A" />
A. In hotel accommodation.
</label>

<label><input type="radio" name="q4" value="B" />
B. Being put up by friends.
</label>

<label><input type="radio" name="q4" value="C" />
C. Staying in a student hostel.
</label>

</div>

<div style={{ marginBottom: 20 }}>
  <p><strong>QUESTION 5.</strong> The place where Hannah’s new accommodation is located is </p>
  
<label><input type="radio" name="q5" value="A" />
A. Lively.
</label>

<label><input type="radio" name="q5" value="B" />
B. Peaceful.
</label>

<label><input type="radio" name="q5" value="C" />
C. central.
</label>

</div>


      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>
      </p>

    </ExamLayout>
  );
}