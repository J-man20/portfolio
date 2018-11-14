$(document).ready(function(){
  $('.slideshow').slick({
    slidesToShow:1,
    adaptiveHeight:true,
    adaptiveWidth:true,
    responsive: [
    {
      breakpoint: 1109,
      settings: {
        slidesToShow: 1,

      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,

      }
    },
  ]
  });
});
