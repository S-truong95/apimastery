import Header from "./components/Header"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"
import Scientists from "./components/Scientists"
import Subjects from "./components/Subjects"
import Fields from "./components/Fields"

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
        apiAction.getRequest("https://localhost:44330/api/subject", subjects => {
            document.querySelector("#app").innerHTML = Subjects(subjects);
        });
    });
}

function fieldNav(){
    const fieldButton = document.querySelector(".fields");
    
    fieldButton.addEventListener("click", function(){
        apiAction.getRequest("https://localhost:44330/api/field", fields => {
            document.querySelector("#app").innerHTML = Fields(fields);
        });
    });

}

function scientistNav(){
    const scientistButton = document.querySelector(".scientists");
    
    scientistButton.addEventListener("click", function(){
        apiAction.getRequest("https://localhost:44330/api/scientist", scientists => {
            document.querySelector("#app").innerHTML = Scientists(scientists);
        });
    });
}