$(document).ready(function(){
  $('.slideshow').slick({
    slidesToShow:1,
    adaptiveHeight:true,
    adaptiveWidth:true,
    dots:true,
    arrows:true,
    responsive: [
    {
      breakpoint: 1109,
      settings: {
        slidesToShow: 1,
        dots:true,
        arrows:true,
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
        dots:true,
        arrows:true,
      }
    },
  ]
  });
});
