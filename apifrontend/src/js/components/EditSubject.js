export default function Subject(subject){
    return`
        <section class='main-content_subject'>
            <h1>${subject.name}</h1>
        </section>
        <section class='update-subject'>
            <input class="update-subject_name" value="${subject.name}">
            <input class='update-subject_description' type='text' value="${subject.description}">
            <button class="update-subject_submit" id="button">Save Changes</button>
            <input class="update-subject_id" type='hidden' value="${subject.id}">
            <input class="update-subject_image" type='hidden' value="${subject.image}">
        </section>
    `;
}