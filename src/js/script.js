
// $(document).ready(function(){
//     $('.carusel__inner').slick({
//         speed: 1200 ,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png" alt="left"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png" alt="right"></button>',
//         draggable: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 921,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               arrows:false,
//               dots:true
             
//             }
//           },
//         ]
        
//     })    
//     });
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    // items:4,
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause:true,
    center: true,
    items:1,
    loop:true,
    dots:true,
    margin:10,
    nav:true,});
});