export default function Subjects(subjects) {
    return `

<section id="subjectgrid">    
<ul> 
    ${subjects
      .map(subject => {
        return `
             <li class="select-subject" id="subject">
             <img src=${subject.image} class="subjectIMG"></img>            
                <h3>${subject.name}</h3>
                <h5>${subject.description}<h5>                      
                <p><input class="subject_id" type="hidden" value="${subject.id}"></p>
                <button class="edit-subject_submit">Edit</button>
                <button class="delete-subject_submit">Delete</button>
             </li>
        `;
      })
      .join("")}
 </ul>
 </section>
  <section class='add-subject'>
    <h1>Add Subject</h1>
    <input class='add-subject_subjectName' type='text' placeholder='Subject Name'>
    <input class='add-subject_subjectDescription' type='text' placeholder='Description'>
    <button class='add-subject_submit'id ="button">Submit</button>
  </section>
   
`;
}    
