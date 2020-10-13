const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle nav {
toggle.addEventListener("click", function () {
    document.body.classList.toggle("show-nav")
})

// Show modal
open.addEventListener("click", function () {
    modal.classList.add("show-modal")
});

// Hide modal 
close.addEventListener("click", function () {
    modal.classList.remove("show-modal")
})

window.addEventListener("click", function (e) {
    e.target == modal ? modal.classList.remove("show-modal") : false;
    // if (e.target == modal) {
    //     modal.classList.remove("show-modal");
    // } else {
    //     return false;
    // }
})