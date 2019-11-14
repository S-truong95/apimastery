export default function Scientist(scientist){
    return`
        <section class='main-content_scientist'>
            <h1>${scientist.name}</h1>
        </section>
        <section class='update-scientist'>
            <input class="update-scientist_name" value="${scientist.name}">
            <input class='update-scientist_age' type='text' value="${scientist.age}">
            <input class="update-scientist_birthplace" value="${scientist.birthplace}">
            <input class='update-scientist_contribution' type='text' value="${scientist.contribution}">
            <button class="update-scientist_submit" id="buttonCrud">Save Changes</button>
            <input class="update-scientist_id" type='hidden' value="${scientist.id}">
            <input class="update-scientist_fieldid" type='hidden' value="${scientist.fieldId}">
            <input class="update-scientist_image" type='hidden' value="${scientist.image}">
        </section>
    `;
}