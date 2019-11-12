import Header from "./components/Header"
import Footer from "./components/Footer"
import SideNav from "./components/SideNav"

export default () => {
    pageBuild();
};

function pageBuild(){
    footer();
    header();
    sideNav();
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