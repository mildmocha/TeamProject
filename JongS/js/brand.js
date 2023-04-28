var swiper2 = new Swiper(".mini_silder", {
  slidesPerView:"auto",
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    centeredSlides: true,
    loop : false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },
});