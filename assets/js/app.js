// ----------------------------navbar----------------------------

let label = document.querySelector("#label")
let navbox = document.querySelector(".navbox")
label.addEventListener("click", function () {
    navbox.classList.toggle("left-0")
})
function showNav() {
    document.body.classList.toggle('overflow-hidden')
    document.getElementById("label").classList.toggle("cross_icon");
}
// scroll
// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('#scroll').fadeIn();
//         } else {
//             $('#scroll').fadeOut();
//         }
//     });
//     $('#scroll').click(function () {
//         $("html, body").animate({ scrollTop: 0 }, 500);
//         return false;
//     });
// });