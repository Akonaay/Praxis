  $(document).ready(function () {
    $("#owl-agency").owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      margin: 50,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        736: {
          items: 1,
          nav: false
        }
      }
    })
  })
