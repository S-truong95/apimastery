export default function Fields(fields) {
    return `

<section id="fieldgrid">    
<ul> 
    ${fields
      .map(field => {
        return `
             <li class="select-field" id="field">
                <img src=${field.image} class="fieldIMG"></img>
                <h3>${field.name}</h3>
                <h5>${field.description}<h5>                      
                <p><input class="field_id" type="hidden" value="${field.id}"></p>
                <button class="edit-field_submit">Edit</button>
                <button class="delete-field_submit">Delete</button>
             </li>
        `;
      })
      .join("")}
 </ul>
 </section>
`;
}    