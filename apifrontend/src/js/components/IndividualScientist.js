export default function IndividualScientist(scientist) {
    return `
    
    <div id="detail">
    <h3>Scientist Details</h3>
    <img src=${scientist.image} class='scientistIMG'></img>
    <input class="field_id" type="hidden" value="${scientist.id}">       
    
            <h4>Name: ${scientist.name}</h4>
            <h4>Age: ${scientist.age}<h4>
            <h4>Birthplace: ${scientist.birthplace}</h4>
            <h4>Contribution: ${scientist.contribution}</h4>
            <p><input class="scientist_id" type="hidden" value="${scientist.id}"></p>
            <button class="edit-scientist_submit">Edit</button>
            <button class="delete-scientist_submit">Delete</button>
        
    
    `;
}