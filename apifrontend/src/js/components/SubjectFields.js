export default function SubjectField(subject){
    return`
    <div id="detail">
    <article>
        <img src=${subject.image} class='subjectIMG'>
        <input class="subject_id" type="hidden" value="${subject.id}"></img>
    </article>
    <article>
        <ul>
          <li>${subject.name}</li>
          <li>${subject.description}</li>          
            <input class="subject_id" type="hidden" value="${subject.id}">
            <button class="edit-subject_submit" id = "button">Edit</button>
            <button class="delete-subject_submit" id = "button">Delete</button>
        </ul>
    </article>
        <ul> 
            ${subject.fields
            .map(field => {
              return `
              <div class="fieldDetails" id="fieldDetail">
                <article>
                    <img class ="fieldIMG" src=${field.image}>
                        <input class="field_id" type="hidden" value="${field.id}">
                    </img>
                    <li>
                        <h3>${field.name}</h3>
                    </li>
                </article>
                
              </div>    
              `;
            })
            .join("")}
        </ul>
        <section class='add-field'>
            <h1>Add Field</h1>
            <input class="subject_id" type="hidden" value="${subject.id}">
            <input class='add-field_fieldName' type='text' placeholder='Field Name'>
            <input class='add-field_fieldDescription' type='text' placeholder='Description'>
            <button class='add-field_submit'id ="button">Submit</button>
        </section>
    </div>
  `;
}