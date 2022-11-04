

var mixer = mixitup('.directions_list')

    

$('.dd').on('click', function () {
    $('.dd').removeclass('active')
    $(this).addclass('active')
})



$('.team_slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    responsive:
    [  
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
            },
        },

    ]


    
})

$('.prev').on('click', function (e) {
    e.preventDefault()
    $('.team_slider').slick('slickPrev')
})

$('.next').on('click', function (e) {
    e.preventDefault()
    $('.team_slider').slick('slickNext')
    
})

$('.testmonials_slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials_dots'),

    responsive:
    [  
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            },
        },
         

    ]



})

$('.prev1').on('click', function (e) {
    e.preventDefault()
    $('.testmonials_slider').slick('slickNext')
})

$('.next1').on('click', function (e) {
    e.preventDefault()
    $('.testmonials_slider').slick('slickPrev')
    
})


$('.program_acc_link').on('click',function (e) {
   e.preventDefault() 
   $(this).toggleClass('prog_active')
   $(this).children('.program_acc_text').slideToggle()
   
})



$(".header_nav-list a, .footer_go-top").on("click", function (e) {
e.preventDefault();
var id  = $(this).attr('href'),
top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1000);
});
    




setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header__top_open') === false) {
        $('.burger').addClass('burger-follow')
        } else {
        $('.burger').removeClass('burger-follow') 
        }
}, 0);


$('.burger, .overlay, .header_top a').on('click', function(e) {
    e.preventDefault()
    $('.header_top').toggleClass('header__top_open')
    $('.overlay').toggleClass('overlay-show')
})

$('.footer_top_title').on('click',function() {
$(this).next().slideToggle()
})


