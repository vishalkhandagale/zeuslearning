function show1() {
    const a = document.getElementById("content");
    if (a) {
        a.classList.toggle("hide");
    }
}

function show2() {
    const a = document.getElementById("user");
    if (a) {
        a.classList.toggle("hide");
    }
}

function show3() {
    const a = document.getElementById("reports");
    if (a) {
        a.classList.toggle("hide");
    }
}

function show4() {
    const a = document.getElementById("admin");
    if (a) {
        a.classList.toggle("hide");
    }
}

const toggle = document.getElementsByClassName("navbar-toggler")[0] as HTMLElement;
const navbar = document.getElementsByClassName("navbar-nav")[0] as HTMLElement;
let onnav = false;

function showNav() {
    navbar.classList.remove("hide");
    onnav = true;
}

function showNavList() {
    onnav = true;
    navbar.classList.remove("hide");
}

function hideNavList() {
    onnav = false;
    navbar.classList.add("hide");
}

function hideNav() {
    onnav = false;
    setTimeout(function () {
        if (!onnav) {
            navbar.classList.add("hide");
        }
    }, 100);
}

const alertList = document.getElementsByClassName("alerts")[0] as HTMLElement;
let onalert = false;

function showAlert() {
    alertList.classList.remove("hide");
    onalert = true;
}

function showAlertList() {
    onalert = true;
    alertList.classList.remove("hide");
}

function hideAlertList() {
    onalert = false;
    alertList.classList.add("hide");
}

function hideAlert() {
    onalert = false;
    setTimeout(function () {
        if (!onalert) {
            alertList.classList.add("hide");
        }
    }, 100);
}

const announcementsList = document.getElementsByClassName("announcements")[0] as HTMLElement;
let onannounce = false;

function showAnnouncements() {
    announcementsList.classList.remove("hide");
    onannounce = true;
}

function showAnnouncementsList() {
    onannounce = true;
    announcementsList.classList.remove("hide");
}

function hideAnnouncementsList() {
    onannounce = false;
    announcementsList.classList.add("hide");
}

function hideAnnouncements() {
    onannounce = false;
    setTimeout(function () {
        if (!onannounce) {
            announcementsList.classList.add("hide");
        }
    }, 100);
}
