// $(document).ready(function() {
//     $('.slick-slider').lightSlider({
//         autoWidth:false,
//         loop:true,
//         arrows: true,
//         onSliderLoad: function() {
//             $('.slick-slider').removeClass('cS-hidden');
//         } 
//     });  
// });

$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
  });