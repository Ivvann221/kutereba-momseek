let slider = $(document).ready(function () {
  $('.slider-blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true
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