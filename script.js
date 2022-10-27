const toggleBtn = document.querySelector(".toggle button");
const toggleSign = document.querySelector(".toggle");
const upForm = document.querySelector(".sign-up-form");
const inForm = document.querySelector(".sign-in-form");
const forms = document.querySelectorAll("form");
const toggleTouch =  document.querySelector(".touch-toggle");
const formsRow = document.querySelector(".toggle-form-row");

forms.forEach((form) => {
    form.onsubmit = (e) => e.preventDefault(); 
});

toggleBtn.onclick = () => {
    toggleBtn.textContent = `sign ${ upForm.classList.contains("hide") ? "in" : "up"}`;
    toggleSign.classList.toggle("toggle-right");
    upForm.classList.toggle("hide");
    inForm.classList.toggle("show");
}

toggleTouch.onclick = () => {
    formsRow.classList.toggle("mobile-active");
    toggleTouch.textContent = `sign ${ formsRow.classList.contains("mobile-active") ? "in" : "up"}`; 
};