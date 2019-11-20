import Header from "./components/Header"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import Scientists from "./components/Scientists"
import Subjects from "./components/Subjects"
import Fields from "./components/Fields"
import apiActions from "./api/apiActions"
import SubjectFields from "./components/SubjectFields"
import FieldScientists from "./components/FieldScientists"
import EditSubject from "./components/EditSubject"
import EditField from "./components/EditField"
import EditScientist from "./components/EditScientist"
import HomeNav from "./components/HomeNav"
import IndividualScientist from "./components/IndividualScientist"

export default () => {
    pageBuild();
};

function pageBuild(){
    footer();
    header();      
    sideNav();
    subjectNav();
    fieldNav();
    scientistNav();
    homeNav();
}

function header(){
    const header = document.getElementById("header");
    header.innerHTML = Header();
}

function sideNav(){
    const sideNav = document.getElementById("sideNav");
    sideNav.innerHTML = SideNav();

    sideNav.addEventListener("click", function(){
        if(event.target.classList.contains(".homeButton")){
            const homeNav = document.querySelector("#app");
            homeNav.innerHTML = HomeNav();
        }
    })    
}

function footer(){
    const footer = document.getElementById("footer");
    footer.innerHTML = Footer();
}

function homeNav(){
    const homeNav = document.getElementById("app");
    homeNav.innerHTML = HomeNav();

    
}

function subjectNav(){
    const subjectButton = document.querySelector(".subjectButton");
    const app = document.querySelector("#app");
    
    subjectButton.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44330/api/subject", subjects => {
            document.querySelector("#app").innerHTML = Subjects(subjects);
        });
    });

    app.addEventListener("click", function(){
        if(event.target.classList.contains("subjectIMG")) {
            const subjectId = event.target.parentElement.querySelector(".subject_id")
                .value;
                apiActions.getRequest(`https://localhost:44330/api/subject/${subjectId}`, 
                subject => {
                    console.log("Subject: " + subject.name);
            document.querySelector("#app").innerHTML = SubjectFields(subject);
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("add-subject_submit")) {
            const subject = event.target.parentElement.querySelector(
                ".add-subject_subjectName",
            ).value;
            const subjectDescription = event.target.parentElement.querySelector(
                ".add-subject_subjectDescription",
            ).value;
            const subjectIMG = "./images/subject.jpg"

            console.log(subject);
            apiActions.postRequest("https://localhost:44330/api/subject",
            {
                name: subject,
                description: subjectDescription,
                image: subjectIMG
            },
            subjects =>{
                console.log(subjects);
                document.querySelector("#app").innerHTML = Subjects(subjects)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("delete-subject_submit")) {
            const subjectId = event.target.parentElement.querySelector(".subject_id")
                .value;
            console.log("delete " + subjectId);
            apiActions.deleteRequest(`https://localhost:44330/api/subject/${subjectId}`,
            subjects =>{
               document.querySelector("#app").innerHTML = Subjects(subjects)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("edit-subject_submit")) {
            const subjectId = event.target.parentElement.querySelector(".subject_id")
                .value;
            console.log("edit " + subjectId);
            apiActions.getRequest(`https://localhost:44330/api/subject/${subjectId}`,
            subject =>{
               document.querySelector("#app").innerHTML = EditSubject(subject)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("update-subject_submit")) {
            const subjectId = event.target.parentElement.querySelector(".update-subject_id")
                .value;
            const subjectImage = event.target.parentElement.querySelector(".update-subject_image")
                .value;
            const subjectName = event.target.parentElement.querySelector(".update-subject_name")
                .value;
            const subjectDescription = event.target.parentElement.querySelector(".update-subject_description")
                .value;
            
            const subjectData = {
                id: subjectId,
                name: subjectName,
                description: subjectDescription,
                image: subjectImage
            }
            apiActions.putRequest(`https://localhost:44330/api/subject/${subjectId}`,
            subjectData,
            subject => {
                document.querySelector("#app").innerHTML = Subjects(subject)
            }
            );
        }
    })
}

function fieldNav(){
    const fieldButton = document.querySelector(".fieldsButton");
    const app = document.querySelector("#app");

    fieldButton.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44330/api/field", fields => {
            document.querySelector("#app").innerHTML = Fields(fields);
        });
    });

    app.addEventListener("click", function(){
        if(event.target.classList.contains("fieldIMG")) {
            const fieldId = event.target.parentElement.querySelector(".field_id")
                .value;
                apiActions.getRequest(`https://localhost:44330/api/field/${fieldId}`, 
                field => {
                    console.log("Field: " + field.name);
            document.querySelector("#app").innerHTML = FieldScientists(field);
            })
        }
    })

    
    app.addEventListener("click", function(){
        if(event.target.classList.contains("add-field_submit")) {
            const field = event.target.parentElement.querySelector(
                ".add-field_fieldName",
            ).value;
            const fieldDescription = event.target.parentElement.querySelector(
                ".add-field_fieldDescription",
            ).value;
            const subjectId = event.target.parentElement.querySelector(".subject_id")
            .value;
            const fieldIMG = "./images/field.jpg"

            console.log(field);
            apiActions.postRequest("https://localhost:44330/api/field",
            {
                name: field,
                description: fieldDescription,
                subjectId: subjectId,
                image: fieldIMG
            },
            fields =>{
                console.log(fields);
                document.querySelector("#app").innerHTML = Fields(fields)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("delete-field_submit")) {
            const fieldId = event.target.parentElement.querySelector(".field_id")
                .value;
            console.log("delete " + fieldId);
            apiActions.deleteRequest(`https://localhost:44330/api/field/${fieldId}`,
            fields =>{
               document.querySelector("#app").innerHTML = Fields(fields)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("edit-field_submit")) {
            const fieldId = event.target.parentElement.querySelector(".field_id")
                .value;
            console.log("edit " + fieldId);
            apiActions.getRequest(`https://localhost:44330/api/field/${fieldId}`,
            field =>{
               document.querySelector("#app").innerHTML = EditField(field)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("update-field_submit")) {
            const fieldId = event.target.parentElement.querySelector(".update-field_id")
                .value;
            const fieldName = event.target.parentElement.querySelector(".update-field_name")
                .value;
            const fieldDescription = event.target.parentElement.querySelector(".update-field_description")
                .value;
            const fieldSubjectId = event.target.parentElement.querySelector(".update-field_subjectid")
                .value;
            const fieldImage = event.target.parentElement.querySelector(".update-field_image")
                .value;
                
            
            const fieldData = {
                id: fieldId,
                name: fieldName,
                description: fieldDescription,
                image: fieldImage,
                subjectId: fieldSubjectId

            }
            apiActions.putRequest(`https://localhost:44330/api/field/${fieldId}`,
                fieldData,
                field => {
                    document.querySelector("#app").innerHTML = Fields(field)
            }
            );
        }
    })
}

function scientistNav(){
    const scientistButton = document.querySelector(".scientistsButton");
    const app = document.querySelector("#app");

    scientistButton.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44330/api/scientist", scientists => {
            document.querySelector("#app").innerHTML = Scientists(scientists);
        });
    });

    app.addEventListener("click", function(){
        if(event.target.classList.contains("scientistIMG")) {
            const scientistId = event.target.parentElement.querySelector(".scientist_id")
                .value;
                apiActions.getRequest(`https://localhost:44330/api/scientist/${scientistId}`, 
                scientist => {
                    console.log("Scientist: " + scientist.name);
            document.querySelector("#app").innerHTML = IndividualScientist(scientist);
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("add-scientist_submit")) {
            const scientist = event.target.parentElement.querySelector(
                ".add-scientist_scientistName",
            ).value;
            const scientistAge = event.target.parentElement.querySelector(
                ".add-scientist_scientistAge",
            ).value;
            const scientistBirthplace = event.target.parentElement.querySelector(
                ".add-scientist_scientistBirthplace",
            ).value;
            const scientistContribution = event.target.parentElement.querySelector(
                ".add-scientist_scientistContribution",
            ).value;
            const fieldId = event.target.parentElement.querySelector(".field_id")
            .value;
            const scientistIMG = "./images/scientist.jpg"

            console.log(scientist);
            apiActions.postRequest("https://localhost:44330/api/scientist",
            {
                name: scientist,
                age: scientistAge,
                birthplace: scientistBirthplace,
                contribution: scientistContribution,
                fieldId: fieldId,
                image: scientistIMG
            },
            scientists =>{
                console.log(scientists);
                document.querySelector("#app").innerHTML = Scientists(scientists)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("delete-scientist_submit")) {
            const scientistId = event.target.parentElement.querySelector(".scientist_id")
                .value;
            console.log("delete " + scientistId);
            apiActions.deleteRequest(`https://localhost:44330/api/scientist/${scientistId}`,
            scientists =>{
               document.querySelector("#app").innerHTML = Scientists(scientists)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("edit-scientist_submit")) {
            const scientistId = event.target.parentElement.querySelector(".scientist_id")
                .value;
            console.log("edit " + scientistId);
            apiActions.getRequest(`https://localhost:44330/api/scientist/${scientistId}`,
            scientist =>{
               document.querySelector("#app").innerHTML = EditScientist(scientist)
            })
        }
    })

    app.addEventListener("click", function(){
        if(event.target.classList.contains("update-scientist_submit")) {
            const scientistId = event.target.parentElement.querySelector(".update-scientist_id")
                .value;
            const scientistName = event.target.parentElement.querySelector(".update-scientist_name")
                .value;
            const scientistAge = event.target.parentElement.querySelector(".update-scientist_age")
                .value;
            const scientistContribution = event.target.parentElement.querySelector(".update-scientist_contribution")
                .value;
            const scientistBirthplace = event.target.parentElement.querySelector(".update-scientist_birthplace")
                .value;
            const scientistFieldId = event.target.parentElement.querySelector(".update-scientist_fieldid")
                .value;
            const scientistImage = event.target.parentElement.querySelector(".update-scientist_image")
                .value;
                
            
            const scientistData = {
                id: scientistId,
                name: scientistName,
                birthplace: scientistBirthplace,
                image: scientistImage,
                fieldId: scientistFieldId,
                age: scientistAge,
                contribution: scientistContribution
            }
            apiActions.putRequest(`https://localhost:44330/api/scientist/${scientistId}`,
                scientistData,
                scientist => {
                    document.querySelector("#app").innerHTML = Scientists(scientist)
            }
            );
        }
    })
}