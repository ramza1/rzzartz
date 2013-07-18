$(document).ready(function () {
	$('ul.primary li a').mouseover(function(e) {
		e.preventDefault();
		var temp_cls = $(this).attr('class');
		if(temp_cls!=undefined && temp_cls.indexOf("has-drop") !== -1)
		{
			if($(this).parent('li').find('ul.drop').css('display')=='block')
			{
				$(this).parent('li').find('ul.drop').hide();
			}
			else
			{
				$(this).parent('li').find('ul.drop').show();
			}
		}
    });
	
	// ------------ small screens menu switch -------------	
	$('.mobile-nav').click(function(e) {
		if($('ul.primary').css('display')=='block')
		{
			$('ul.primary').css('display','none');
		}
		else
		{
			$('ul.primary').css('display','block');
		}
	});
	// ------------ small screens menu switch -------------	
	$(function () {
		$(window).resize(function() {
			$('ul.drop').slideUp();
			$('ul.primary li').removeClass('active')
			$('ul.primary').removeAttr('style')
		});
	})
	
});
