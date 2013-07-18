$(document).ready(function(){
	$('.theme_icon').click(function(e){
		e.preventDefault();
		slide_switch_panel();
	});
	$('.theme_colors ul li a').click(function(e) {
        e.preventDefault();
		$('#theme_main_style').attr('href','css/' + $(this).attr('href') + '.css'); 
		slide_switch_panel(); 
    });
});
function slide_switch_panel()
{
	if($('.theme_changer').css('left')=='0px')
	{
		$('.theme_changer').animate({left:'-120px'},500);
	}
	else
	{
		$('.theme_changer').animate({left:'0px'},500);
	}
}