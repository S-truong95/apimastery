import Header from "./components/Header"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import Scientists from "./components/Scientists"
import Subjects from "./components/Subjects"
import Fields from "./components/Fields"
import apiActions from "./api/apiActions"

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
}

function header(){
    const header = document.getElementById("header");
    header.innerHTML = Header();
}

function sideNav(){
    const sideNav = document.getElementById("sideNav");
    sideNav.innerHTML = SideNav();
}

function footer(){
    const footer = document.getElementById("footer");
    footer.innerHTML = Footer();
}

function subjectNav(){
    const subjectButton = document.querySelector(".subjects");
    
    subjectButton.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44330/api/subject", subjects => {
            document.querySelector("#app").innerHTML = Subjects(subjects);
        });
    });

    const app = document.querySelector("#app");
    app.addEventListener("click", function(){
        if(event.target.classList.contains("add-subject_submit")) {
            const subject = event.target.parentElement.querySelector(
                ".add-subject_subjectName",
            ).value;
            const subjectDescription = event.target.parentElement.querySelector(
                ".add-subject_subjectDescription",
            ).value;

            console.log(subject);
            apiAction.postRequest("https://localhost:44330/api/subject",
            {
                name: subject,
                description: subjectDescription,
            },
            subjects =>{
                console.log(subjects);
                document.querySelector("#app").innerHTML = Subjects(subjects)
            })
        }
    })
}

function fieldNav(){
    const fieldButton = document.querySelector(".fields");
    
    fieldButton.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44330/api/field", fields => {
            document.querySelector("#app").innerHTML = Fields(fields);
        });
    });

    const app = document.querySelector("#app");
    app.addEventListener("click", function(){
        if(event.target.classList.contains("add-field_submit")) {
            const field = event.target.parentElement.querySelector(
                ".add-field_fieldName",
            ).value;
            const fieldDescription = event.target.parentElement.querySelector(
                ".add-field_fieldDescription",
            ).value;

            console.log(field);
            apiAction.postRequest("https://localhost:44330/api/fields",
            {
                name: field,
                description: fieldDescription,
            },
            fields =>{
                console.log(fields);
                document.querySelector("#app").innerHTML = Fields(fields)
            })
        }
    })
}

function scientistNav(){
    const scientistButton = document.querySelector(".scientists");
    
    scientistButton.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44330/api/scientist", scientists => {
            document.querySelector("#app").innerHTML = Scientists(scientists);
        });
    });

    const app = document.querySelector("#app");
    app.addEventListener("click", function(){
        if(event.target.classList.contains("add-scientist_submit")) {
            const scientist = event.target.parentElement.querySelector(
                ".add-scientist_scientistName",
            ).value;
            const scientistAge = event.target.parentElement.querySelector(
                ".add-scientist_scientistAge",
            ).value;
            const scientistBirthplace = event.target.parentElement.querySelector(
                ".add-scientist__scientistBirthplace",
            ).value;
            const scientistContribution = event.target.parentElement.querySelector(
                ".add-scientist__scientistContribution",
            ).value;

            console.log(scientist);
            apiAction.postRequest("https://localhost:44330/api/scientist",
            {
                name: scientist,
                age: scientistAge,
                birthplace: scientistBirthplace,
                contribution: scientistContribution
            },
            scientists =>{
                console.log(scientists);
                document.querySelector("#app").innerHTML = Scientists(scientists)
            })
        }
    })
}