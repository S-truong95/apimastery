export default function Field(field){
    return`
        <section class='main-content_field'>
            <h2>${field.name}</h2>
        </section>
        <section class='update-field'>
            <input class="update-field_name" value="${field.name}">
            <input class='update-field_description' type='text' value="${field.description}">
            <button class="update-field_submit" id="button">Save Changes</button>
            <input class="update-field_id" type='hidden' value="${field.id}">
            <input class="update-field_subjectid" type='hidden' value="${field.subjectId}">
            <input class="update-field_image" type='hidden' value="${field.image}">
        </section>
    `;
}