export default function Subjects(subjects) {
    return `

    ${subjects
      .map(subject => {
        return `
             <section class="subjectgrid">
             <img src=${subject.image} class="subjectIMG"></img>            
                <h4>Subject: ${subject.name}</h4>
                <h4>Description: ${subject.description}<h4>                      
                <p><input class="subject_id" type="hidden" value="${subject.id}"></p>
                <button class="edit-subject_submit">Edit</button>
                <button class="delete-subject_submit">Delete</button>
             </section>
        `;
      })
      .join("")}
 
  <section class='add-subject'>
    <h2>Add Subject</h2>
    <input class='add-subject_subjectName' type='text' placeholder='Subject Name'>
    <input class='add-subject_subjectDescription' type='text' placeholder='Description'>
    <button class='add-subject_submit'id ="button">Submit</button>
  </section>
   
`;
}    
