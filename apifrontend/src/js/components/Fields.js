export default function Fields(fields) {
    return `
    <p id="instructions">Click on Images for Details</p>

    ${fields
      .map(field => {
        return `
             <section class="fieldgrid">
                <img src=${field.image} class="fieldIMG"></img>                
                <h4>Decription: ${field.description}<h4>                      
                <button class="edit-field_submit">Edit</button>
                <button class="delete-field_submit">Delete</button>
                <input class="field_id" type="hidden" value="${field.id}">
             </section>
        `;
      })
      .join("")}
 
`;
}    