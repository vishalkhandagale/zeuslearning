function show1() {
    var a = document.getElementById("content");
    if (a) {
        a.classList.toggle("hide");
    }
}
function show2() {
    var a = document.getElementById("user");
    if (a) {
        a.classList.toggle("hide");
    }
}
function show3() {
    var a = document.getElementById("reports");
    if (a) {
        a.classList.toggle("hide");
    }
}
function show4() {
    var a = document.getElementById("admin");
    if (a) {
        a.classList.toggle("hide");
    }
}

function courseToggel() {
    var a = document.getElementById('courses');
    var b = document.getElementById('classes');
    a.classList.add("selected-courses-classes");
    b.classList.remove("selected-courses-classes");
}
function classToggel() {
    var a = document.getElementById('courses');
    var b = document.getElementById('classes');
    b.classList.add("selected-courses-classes");
    a.classList.remove("selected-courses-classes");
}

var toggle = document.getElementsByClassName("navbar-toggler")[0];
var navbar = document.getElementsByClassName("navbar-nav")[0];
var onnav = false;
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
var alertList = document.getElementsByClassName("alerts")[0];
var onalert = false;
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
var announcementsList = document.getElementsByClassName("announcements")[0];
var onannounce = false;
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


