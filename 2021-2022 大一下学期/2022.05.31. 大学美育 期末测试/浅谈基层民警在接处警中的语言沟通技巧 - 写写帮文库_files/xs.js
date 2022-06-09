jQuery(document).ready(function($) {
	 var example = $('.sf-menu').superfish({
            //add options here if required
            delay:       100,
            speed:       'fast',
            autoArrows:  false  
        }); 


    $('.header-menu-con').slicknav({
            prependTo: '#slick-mobile-menu',
            allowParentLinks: true,
            label: '导航'
        }); 
$(window).scroll(function(){
            if($(window).scrollTop()>200){
                $('.right_bar').show();
            }else{
                $('.right_bar').hide();
            }
        })
        $('.right_bar li').eq(0).hover(function(){
            $(this).animate({left:-116},300);
           // console.log(0)
        },function(){
            $(this).animate({left:0},300);
        });
        $('.right_bar li').eq(2).hover(function(){
            $(this).animate({left:-70},300);
           // console.log(2)
        },function(){
            $(this).animate({left:0},300);
        });
        $('.right_bar li').eq(1).hover(function(){
            $(this).find('.rtbar_shwx').show();
        },function(){
            $(this).find('.rtbar_shwx').hide();
        });
	$('body').on('click', '.gotop', function() {
        $('html,body').stop(1).animate({ scrollTop: '0' }, 300);
        return false
    });
});