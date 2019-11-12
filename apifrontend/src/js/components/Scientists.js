export default function Scientists(scientists) {
    return `

<section id="scientistgrid">    
<ul> 
    ${scientists
      .map(scientist => {
        return `
             <li class="select-scientist" id="scientist">
                <img src=${scientist.image} class="scientistIMG"></img>
                <h3>${scientist.name}</h3>
                <h5>${scientist.age}<h5>
                <h5>${scientist.birthplace}</h5>
                <h5>${scientist.contribution}</h5>
                <p><input class="scientist_id" type="hidden" value="${scientist.id}"></p>
                <button class="edit-scientist_submit">Edit</button>
                <button class="delete-scientist_submit">Delete</button>
             </li>
        `;
      })
      .join("")}
 </ul>
 </section>
`;
}    