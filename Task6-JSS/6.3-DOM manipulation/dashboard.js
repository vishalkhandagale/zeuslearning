function show1(){
    a=document.getElementById("content");
    a.classList.toggle("hide")

}
function show2(){
    a=document.getElementById("user");
    a.classList.toggle("hide")

}
function show3(){
    a=document.getElementById("reports");
    a.classList.toggle("hide")

}
function show4(){
    a=document.getElementById("admin");
    a.classList.toggle("hide")

}


var toggle = document.getElementsByClassName("navbar-toggler")[0];
var navbar = document.getElementsByClassName("navbar-nav")[0];
var onnav = false;
function showNav () {
    navbar.classList.remove("hide");
    onnav = true;
};
function showNavList() {
    onnav = true;
    navbar.classList.remove("hide");
};
function hideNavList () {
    onnav = false;
    navbar.classList.add("hide");
   
};
function hideNav() {
    onnav = false;
    setTimeout(function () {
        if (!onnav) {
            navbar.classList.add("hide");
           
        }
    }, 100);
};
// var alertToggle = document.getElementsByClassName("alert-image")[0];
var alertList = document.getElementsByClassName("alerts")[0];
var onalert = false;
function showAlert () {
    alertList.classList.remove("hide");
    onalert = true;
};
function showAlertList() {
    onalert = true;
    alertList.classList.remove("hide");
};
function hideAlertList () {
    onalert = false;
    alertList.classList.add("hide");
   
};
function hideAlert() {
    onalert = false;
    setTimeout(function () {
        if (!onalert) {
            alertList.classList.add("hide");
           
        }
    }, 100);
};


var announcementsList = document.getElementsByClassName("announcements")[0];
var onannounce = false;
function showAnnouncements () {
    announcementsList.classList.remove("hide");
    onannounce = true;
};
function showAnnouncementsList() {
    onannounce = true;
    announcementsList.classList.remove("hide");
};
function hideAnnouncementsList () {
    onannounce = false;
    announcementsList.classList.add("hide");
   
};
function hideAnnouncements() {
    onannounce = false;
    setTimeout(function () {
        if (!onannounce) {
            announcementsList.classList.add("hide");
           
        }
    }, 100);
};
