import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const sliderMenu = document.querySelector('.menu__slider');
if (sliderMenu) {
  const menuSlider = new Swiper(sliderMenu, {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      310: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
}

const sliderTestimonials = document.querySelector('.testimonials__slider');
if (sliderTestimonials) {
  const testimonialsSlider = new Swiper(sliderTestimonials, {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.testimonials__slider-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
}
