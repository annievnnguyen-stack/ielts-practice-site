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


      <p style={{ marginTop: 20 }}>
        <em>You will hear the recording ONCE only.</em>
      </p>


      {/* Audio */}
      <audio controls style={{ width: "100%", margin: "20px 0" }}>
        <source src="/audio/sample-listening.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>


 {/* Questions */}

     <h3>Choose the correct answer (A, B or C)</h3>

<div style={{ marginTop: 20 }}>
<p><strong>QUESTION 1. </strong> How long did Hannah think it would be before she found a place to live?
</p>
 
<p>
<label><input type="radio" name="q1" value="A" />
 <strong> A</strong> Not more than two weeks. 
</label>
</p>

<p>
<label><input type="radio" name="q1" value="B" />
 <strong> B</strong> Less than three weeks.
</label>
</p>

<p>
<label><input type="radio" name="q1" value="C" />
 <strong> C</strong> More than four weeks. 
</label>
</p>

</div>

<div style={{ marginTop: 20 }}>
  <p><strong>QUESTION 2.</strong> According to Hannah, there is a lack rental accommodation because  
</p>

<p>
<label><input type="radio" name="q2" value="A" />
 <strong> A</strong> It is the end of the academic year.
</label>
</p>

<p>
<label><input type="radio" name="q2" value="B" />
 <strong> B</strong> The town is not very big. 
</label>
</p>

<p>
<label><input type="radio" name="q2" value="C" />
 <strong> C</strong> There are many new technology companies locally. 
</label>
</p>

</div>

<div style={{ marginTop: 20 }}>
  <p><strong>QUESTION 3.</strong> The £400 rent is </p>
  
<p>
<label><input type="radio" name="q3" value="A" />
 <strong> A</strong> Less than Hannah has paid before.
</label>
</p>

<p>
<label><input type="radio" name="q3" value="B" />
 <strong> B</strong> Subsidised for students by the university.
</label>
</p>

<p>
<label><input type="radio" name="q3" value="C" />
 <strong> C</strong> Expensive for where it is. 
</label>
</p>



</div>

<div style={{ marginTop: 20 }}>
  <p><strong>QUESTION 4.</strong> Hannah is currently</p>
  
<p>
<label><input type="radio" name="q4" value="A" />
 <strong> A</strong> In hotel accommodation.
</label>
</p>

<p>
<label><input type="radio" name="q4" value="B" />
 <strong> B</strong> Being put up by friends.
</label>
</p>

<p>
<label><input type="radio" name="q4" value="C" />
 <strong> C</strong> Staying in a student hostel.
</label>
</p>

</div>

<div style={{ marginTop: 20 }}>
  <p><strong>QUESTION 5.</strong> The place where Hannah’s new accommodation is located is </p>
  
<p>
<label><input type="radio" name="q5" value="A" />
 <strong> A</strong> Lively.
</label>
</p>

<p>
<label><input type="radio" name="q5" value="B" />
 <strong> B</strong> Peaceful.
</label>
</p>

<p>
<label><input type="radio" name="q5" value="C" />
 <strong> C</strong> central.
</label>
</p>

</div>


    </ExamLayout>
  );
}