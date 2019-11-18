export default function Fields(fields) {
    return `

    ${fields
      .map(field => {
        return `
             <section class="fieldgrid">
                <img src=${field.image} class="fieldIMG"></img>
                <h4>Field: ${field.name}</h4>
                <h4>Decription: ${field.description}<h4>                      
                <p><input class="field_id" type="hidden" value="${field.id}"></p>
                <button class="edit-field_submit">Edit</button>
                <button class="delete-field_submit">Delete</button>
             </section>
        `;
      })
      .join("")}
 
`;
}    