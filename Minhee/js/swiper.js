/* swiper */
const swiper = new Swiper(".main_silder", {
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  /* swiper end */
  
  /* brand slider */
  var swiper2 = new Swiper(".brand_slide", {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 40,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });
  /* brand slider end */