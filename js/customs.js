/*--- customs js ---*/


// Sticky Header   
$(document).ready(function () {

  $('[data-fancybox]').fancybox({
    loop: true
  });

  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 90) {
      $(".immenu-header").css('background-color', '#000');
      $(".header-menu a").css('color', '#fff');
      $(".header-menu a").css('border-bottom-color', '#fff');
      $(".immenu-header").css('border-bottom-color', '#fff');
      $("#menuopenicon").css('color', '#fff');
      $(".header-menu a:after").css('background-color', '#000');
      $("#barsicon").css('color', '#fff');
      $(".mobile_menu").css('background-color', '#000');
      $(".mobile_menu span").css('color', '#fff');
      $(".mobile_menu").css('border-bottom-color', '#fff');

    } else {

      $(".mobile_menu").css('border-bottom-color', '#fff');
      $(".mobile_menu span").css('color', '#fff');
      $(".immenu-header").css('background-color', 'transparent');
      $(".header-menu a").css('color', '#fff');
      $(".mobile_menu").css('background-color', 'transparent');
      $(".header-menu a:after").css('background-color', '#fff');
      $(".immenu-header").css('border-bottom-color', '#fff');
      $(".header-menu a").css('border-bottom-color', '#fff');
      $("#menuopenicon").css('color', '#fff');
      $("#barsicon").css('color', '#fff');
    }
  });


  $('#floor-plan-slide').bind('slide.bs.carousel', function (e) {
    var to_slide = $('.carousel-item.active').attr('data-slide-no');
    $('.carousel-target.active').removeClass('active');
    $('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
  });

  $('.carousel-target').on('click', function () {
    $('#floor-plan-slide').carousel(parseInt($(this).attr('data-slide-to')));
    $('.carousel-target.active').removeClass('active');
    $(this).addClass('active');
  });
});


// Sticky Header1   

//scroll 


// parallax


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";

  $('body').addClass('scroll-fixed');


  $('.mobilemenu-link').show();

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $('body').removeClass('scroll-fixed');

  $('.mobilemenu-link').hide();

}