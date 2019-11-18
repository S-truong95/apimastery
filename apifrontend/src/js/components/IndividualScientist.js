export default function IndividualScientist(scientist) {
    return `
    <div id="detail">
    <article>
        <img src=${scientist.image} class='scientistIMG'></img>
        <input class="field_id" type="hidden" value="${scientist.id}">
    </article>
    <article>
        <ul>
            <h3>${scientist.name}</h3>
            <h5>${scientist.age}<h5>
            <h5>${scientist.birthplace}</h5>
            <h5>${scientist.contribution}</h5>
            <p><input class="scientist_id" type="hidden" value="${scientist.id}"></p>
            <button class="edit-scientist_submit">Edit</button>
            <button class="delete-scientist_submit">Delete</button>
        </ul>
    </article>
    `;
}