
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
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    center: true,
    items:1,
    loop:true,
    dots:true,
    margin:10,
    nav:true,});

        
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
        .eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');


    // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    //   $(this)
    //     .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    //     .closest('div.container').find('div.catalog__content').removeClass
    //     ('catalog__content_active').eq($(this).index()).addClass
    //     ('catalog__content_active');
    // });
    // $('.catalog-item__link').each(function(i) {
    //   $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $('.catalog-item__content').toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').toggleClass('catalog-item__list_active');
    //   })
    // })
    
});