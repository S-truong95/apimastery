export default function Subjects(subjects) {
    return `
  <p id="instructions">Click on the Image to display related Fields</p>
    ${subjects
      .map(subject => {
        return `
             <section class="subjectgrid">
             <img src=${subject.image} class="subjectIMG"></img>       
              <h4>Description: ${subject.description}<h4>                      
              <button class="edit-subject_submit">Edit</button>
              <button class="delete-subject_submit">Delete</button>
              <input class="subject_id" type="hidden" value="${subject.id}">
             </section>
        `;
      })
      .join("")}
 
  <section class='add-subject'>
    <h2>Add A Subject!</h2>
    <input class='add-subject_subjectName' type='text' placeholder='Subject Name'>
    <input class='add-subject_subjectDescription' type='text' placeholder='Description'>
    <button class='add-subject_submit'id ="button">Submit</button>
  </section>
   
`;
}    
