// -----------------------------backtotop------------------------------
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

// -----------------------------preloader---------------------------
setTimeout(() => {
  const box = document.getElementById("preloader");

  preloader.style.display = "none";

  window.scrollTo(0, 0);

  document.body.classList.remove("overflow-hidden");
}, 4000);

// ----------------------------navbar----------------------------
let label = document.querySelector("#label")
let navbox = document.querySelector(".navbox")
label.addEventListener("click", function () {
  navbox.classList.toggle("right-0");
})
function showNav() {
  document.body.classList.toggle('overflow-hidden')
  document.getElementById("label").classList.toggle("cross_icon");
}
function remove() {
  document.body.classList.remove('overflow-hidden')
  navbox.classList.remove("right-0");
  document.getElementById("label").classList.toggle("cross_icon");
}
// -----------------------team-seaction------------------
$('.team_slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
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
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// -------------------AOS-CODE-----------------------


