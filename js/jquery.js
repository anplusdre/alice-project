$(document).ready(function () {


    //Hamburger Menu
    $('.stackMenu a').click(function () {
        $('.rw').toggleClass('active');
    });


    $('.navigation a').click(function (e) {
        e.preventDefault();
        $('.navigation a').removeClass('active');
        $(this).addClass('active');
    });


    $('.js-tilt').tilt({
        glare: true,
        maxGlare: .9
    })
    
        
        
    $('.media').mouseenter(function(){
        $(this).find('div').css({
            display: 'block'
        });
    $(this).slick({
        autoplay: true,
        arrows: false,
        pauseOnFocus: true,
        dots: true,
        dotsClass: 'timeSlide',
        pauseOnDotsHover: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

        
    });
    
     $('.media').mouseleave(function(){
      
         $(this).slick("unslick");
         $('.hide').css({
            display: 'none'
        })
        
    
     });
    
    
    var $items = $('.card');
var $btns = $('.nav-unsorted li a').click(function() {
  if (this.id == 'all') {
    $items.show().fadeIn(450);
  } else {
    var $el = $('.' + this.id).show().fadeIn(450);
    $items.not($el).hide().fadeOut(450);
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
    
    
    
    
    
    
    
    
    
    
    
    /*$('.media').mouseenter(function(){
        $(this).children('div').animate({
            opacity: '1'
        },200 )
    });
    
    $('.media').mouseleave(function(){
        $(this).children('div').animate({
            opacity: '0'
        },200 )
    });*/




    /*function slideShow()
{
    window.setInterval("changeImage()", 500);
}

function changeImage()
{   
var imgSrcs = ["images//traps//1.jpg",
    "images//traps//2.jpg",
    "images//traps//3.jpg",
    "images//traps//4.jpg"]
var i = Math.floor((Math.random() * 3));
var element = document.getElementById("slideShow");
element.src= imgSrcs[i];
}*/

});