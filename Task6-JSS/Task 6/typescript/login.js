var checked = 1;
function rememberMe() {
    var img = document.getElementById('pass-checked');
    if (checked == 1) {
        img.src = 'files/icons/checkbox-unchecked.svg';
        checked = 0;
    }
    else {
        img.src = 'files/icons/checkbox-checked.svg';
        checked = 1;
    }
}
function radioToggel1() {
    var a = document.getElementById('radio-btn-1');
    var b = document.getElementById('radio-btn-2');
    a.classList.add("selected");
    b.classList.remove("selected");
}
function radioToggel2() {
    var a = document.getElementById('radio-btn-1');
    var b = document.getElementById('radio-btn-2');
    b.classList.add("selected");
    a.classList.remove("selected");
}
function showPassword() {
    var x = document.getElementById("my-password");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
