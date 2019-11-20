export default function SubjectField(subject){
    return `
    <p id="instructions">Click on Field Images for Details</p>
    <div id="detail">    
        <ul>
          <h3>Subject: ${subject.name}</h3>
          <h4>Description: ${subject.description}</h4>          
            <input class="subject_id" type="hidden" value="${subject.id}">
            <img src=${subject.image} class='subjectIMG'>
            <input class="subject_id" type="hidden" value="${subject.id}"></img> 
                     
        </ul>
      
        <section id="wrapper2"> 
            ${subject.fields
            .map(field => {
              return `
              <div class="fieldDetails" id="fieldDetail">                
                <h3>Field: ${field.name}</h3>
                <h4>Description: ${field.description}</h4>
                    <img class ="fieldIMG" src=${field.image}>
                        <input class="field_id" type="hidden" value="${field.id}">
                    </img>                  
                </div>    
              `;
            })
            .join("")}
        </section>
        
        <section class='add-field'>
            <h1>Add A Field!</h1>
            <input class="subject_id" type="hidden" value="${subject.id}">
            <input class='add-field_fieldName' type='text' placeholder='Field Name'>
            <input class='add-field_fieldDescription' type='text' placeholder='Description'>
            <button class='add-field_submit'id ="button">Submit</button>
        </section>
    </div>
  `;
}