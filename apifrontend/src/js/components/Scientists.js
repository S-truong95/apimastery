export default function Scientists(scientists) {
    return `  

    ${scientists
      .map(scientist => {
        return `
             <section class="scientistgrid">
                <img src=${scientist.image} class="scientistIMG"></img>
                <h4> ${scientist.name}</h4>
                <h4>${scientist.age}</h4>
                <h4>${scientist.birthplace}</h4>
                <h4>Contribution: ${scientist.contribution}</h4>
                <h4><input class="scientist_id" type="hidden" value="${scientist.id}"></h4>                
                <button class="edit-scientist_submit">Edit</button>
                <button class="delete-scientist_submit">Delete</button>
                </section>
             
        `;
      })
      .join("")} 

    <section class='add-scientist'>
      <h2>Add A Scientist!</h2>
        <input class='add-scientist_scientistName' type='text' placeholder='Scientist Name'>
        <input class='add-scientist_scientistAge' type='text' placeholder='Age'>
        <input class='add-scientist_scientistBirthplace' type='text' placeholder='Birthplace'>
        <input class='add-scientist_scientistContribution' type='text' placeholder='Contribution'>
        <button class='add-scientist_submit' id="button">Submit</button>
    </section>
`;
}    