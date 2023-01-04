let slider = $(document).ready(function () {
  $('.slider-blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
     },{

      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
     },
     { breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
      
      }
    ]
  });
});

$('.item').on('click', function () {
  $('.item').removeClass('active');
  $(this).addClass('active');
  let tabs = $(this).data("tabs");

  $('.content').addClass('d-none');
  $('.content[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.content[data-tabs = ' + tabs + ']').addClass('d-block');
}) 