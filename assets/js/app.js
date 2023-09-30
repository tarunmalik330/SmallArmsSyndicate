// ----------------------------navbar----------------------------

let label = document.querySelector("#label")
let navbox = document.querySelector(".navbox")
let nav_bg = document.querySelector(".nav_bg")
label.addEventListener("click", function () {
    navbox.classList.toggle("right-0");
})
function showNav() {
    document.body.classList.toggle('overflow-hidden')
    document.getElementById("label").classList.toggle("cross_icon");
}