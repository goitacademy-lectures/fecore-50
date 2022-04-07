const btn = document.querySelector(".form-btn");
const checkbox = document.querySelector(".form-agreement-input");

checkbox.addEventListener("click", toggleCheckbox);

function toggleCheckbox() {
  checkbox.checked
    ? btn.removeAttribute("disabled")
    : btn.setAttribute("disabled", "disabled");
}
