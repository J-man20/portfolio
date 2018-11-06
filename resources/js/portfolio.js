$(document).ready(function(){
  $('.slideshow').slick({
    slidesToShow:1,
    responsive: [
    {
      breakpoint: 1109,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    ]
  }),
});
