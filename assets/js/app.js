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
// -----------------------team-seaction------------------
$('.team_slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });