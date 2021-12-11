$(document).ready(function () {
  $("#owl-agency").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autospeed: 10,
    margin: 50,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      736: {
        items: 1,
        nav: false,
      },
    }, 
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
          items: 1
        },
        767: {
          items: 2
        },
        1000: {
          items: 3
        }
    },
  });

  //  Mission/Vision Accordion
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("pactive");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
