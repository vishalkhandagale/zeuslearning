let checked: number = 1;

function rememberMe(): void {
  let img = document.getElementById('pass-checked')as HTMLImageElement;
  if (checked == 1) {
    img.src = 'files/icons/checkbox-unchecked.svg';
    checked = 0;
  } else {
    img.src = 'files/icons/checkbox-checked.svg';
    checked = 1;
  }
}

function radioToggel1(): void {
  let a = document.getElementById('radio-btn-1') as HTMLElement;
  let b = document.getElementById('radio-btn-2') as HTMLElement;
  a.classList.add("selected");
  b.classList.remove("selected");
}

function radioToggel2(): void {
  let a = document.getElementById('radio-btn-1') as HTMLElement;
  let b = document.getElementById('radio-btn-2') as HTMLElement;
  b.classList.add("selected");
  a.classList.remove("selected");
}

function showPassword(): void {
  var x = document.getElementById("my-password") as HTMLInputElement;
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}