jQuery(function(){
    /*Portfolio*/

    $('.button[filter]').click(function(){
        if($(this).attr('val')=='off'){
            $('.button[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter='+$(this).attr('filter')+']').show(300);
            if($(this).attr('filter')=='all'){
                $('.button[filter]').attr('val', 'off').removeClass('focused');
                $(this).attr('val', 'on').addClass('focused');
                $('.filter > div').show(300);
            }
        }
    });
    
    /*Slider*/

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    /*Menu*/

    $("ul.menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
        return false;
    });

    /*drop menu for devices*/

    $('.menu_icon').click(function(){
        $('nav').slideToggle(500);
        $('ul.menu').css({'display':'flex', 'flex-direction':'column'})
        if($('.menu_icon').html()=='<i class="fa fa-bars" aria-hidden="true"></i>'){
            $(this).html('<i class="fa fa-times" aria-hidden="true"></i>')
        }else{
            $(this).html('<i class="fa fa-bars" aria-hidden="true"></i>') 
        }
    });

    /*toTop button*/

    $(window).scroll(function(){
        if($(this).scrollTop() !=0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function(){
        $('body,html').animate({scrollTop:0}, 800);
    });
})
   

