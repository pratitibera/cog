/*--- customs js ---*/


// Sticky Header   
$(document).ready(function(){  
    
     $('[data-fancybox]').fancybox({loop : true});
   
            var scroll_pos = 0;
            var width = $(window).width();
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 90) {
                    if(width > 767){
                        $(".bottom-form").css('display', 'block');
                    }
                    else{
                        $(".bottom-form").css('display', 'none');
                    }
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
                    $(".bottom-form").css('display', 'none');
                    
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
            
            $('.carousel-target').on('click', function() {
                $('#floor-plan-slide').carousel(parseInt($(this).attr('data-slide-to')));
                $('.carousel-target.active').removeClass('active');
                $(this).addClass('active');
            });
            
$.validator.addMethod("customemail", 
    function(value, element) {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
    }, 
    "Please enter valid email"
);

$.validator.addMethod("customphone", 
    function(value, element) {
        return /^\d{10}$/.test(value);
    }, 
    "Please enter 10 digit mobile number"
);

 $("form[data-form-validate='true']").each(function() {
     var $this = $(this);
     $(this).validate({
          rules:{
            name :{ required : true },
            phone :{ required : true, customphone: true },
            email : { required : true, customemail : true },
            message : { required : true },
        },
        messages:{
            name :{ required : "This field is required" },
            phone :{ required : "This field is required", customphone: "Please enter 10 digit mobile number" },
            email : { required : "This field is required", customemail : "Please enter valid email" },
            message :{ required : "This field is required" },
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            $this.find('.btn').prop('disabled', true);
            
            var $form = $this[0];

            $.ajax({
                url: 'submit.php',
                type: 'POST',
                data : new FormData($form),
                contentType: false,
                cache: false,
                processData: false,
                success: function(data){
                      $(this).trigger("reset");
                      window.open('thank-you.php','_self');
                      //window.location.href = "https://www.mrgsector106gurgaon.com/thankyou.php";
                      
                }
            });
        },
     });
 });

});
        

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



