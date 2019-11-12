export default function Subjects(subjects) {
    return `

<section id="subjectgrid">    
<ul> 
    ${subjects
      .map(subject => {
        return `
             <li class="select-subject" id="subject">                
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
`;
}    
