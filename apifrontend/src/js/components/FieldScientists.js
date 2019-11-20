export default function FieldScientists(field) {
    return `
    <p id="instructions">Click on Scientist's Image for Details</p>
    <div id="detail">
    <ul>
      <h3>Field: ${field.name}</h3>
      <h4>Description: ${field.description}</h4>          
        <input class="field_id" type="hidden" value="${field.id}">
        <img src=${field.image} class='fieldIMG'>
        <input class="field_id" type="hidden" value="${field.id}"></img>
        
    </ul>   
    
        <section id="wrapper2"> 
            ${field.scientists
            .map(scientist => {
              return `
              <div class="scientistDetails" id="scientistDetail">
                <h3>Scientist: ${scientist.name}</h3>
                <h4> Contribution: ${scientist.contribution}</h4>
                     <img class ="scientistIMG" src=${scientist.image}>
                        <input class="scientist_id" type="hidden" value="${scientist.id}">
                    </img>                    
                
              </div>    
              `;
            })
            .join("")}
        </section>
        
        <section class='add-scientist'>
            <h1>Add A Scientist!</h1>
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