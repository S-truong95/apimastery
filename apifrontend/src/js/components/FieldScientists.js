export default function FieldScientists(field) {
    return `
    <div id="detail">
    <article>
        <img src=${field.image} class='fieldIMG'>
        <input class="field_id" type="hidden" value="${field.id}"></img>
    </article>
    <article>
        <ul>
          <li>${field.name}</li>
          <li>${field.description}</li>          
            <input class="field_id" type="hidden" value="${field.id}">
            <button class="edit-field_submit" id = "button">Edit</button>
            <button class="delete-field_submit" id = "button">Delete</button>
        </ul>
    </article>
        <ul> 
            ${field.scientists
            .map(scientist => {
              return `
              <div class="scientistDetails" id="scientistDetail">
                <article>
                    <img class ="scientistIMG" src=${scientist.image}>
                        <input class="scientist_id" type="hidden" value="${scientist.id}">
                    </img>
                    <li>
                        <h3>${scientist.name}</h3>
                    </li>
                </article>
                
              </div>    
              `;
            })
            .join("")}
        </ul>
        <section class='add-scientist'>
            <h1>Add Scientist</h1>
            <input class="field_id" type="hidden" value="${field.id}">
            <input class='add-scientist_scientistName' type='text' placeholder='Scientist Name'>
            <input class='add-scientist_scientistAge' type='text' placeholder='Age'>
            <input class='add-scientist_scientistBirthplace' type='text' placeholder='Birthplace'>
            <input class='add-scientist_scientistContribution' type='text' placeholder='Contribution'>
            <button class='add-scientist_submit'id ="button">Submit</button>
        </section>
    </div>
  `;
}