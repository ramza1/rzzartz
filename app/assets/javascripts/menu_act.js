var index_page_top = 0;
var work_page_top = 0;
var about_page_top = 0;
var contact_page_top = 0;
$(document).ready(function () {
    index_page_top      = $('#index_page').position().top;
    work_page_top       = $('#work_page').position().top;
    about_page_top      = $('#about_page').position().top;
    contact_page_top    = $('#contact_page').position().top;
	service_page_top    = $('#service_page').position().top;
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
	$('ul.primary li a').click(function(e) {
		if($(this).parent().parent('ul.drop').size()>0)
		{
			return true;
		}
		else
		{
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
			else
			{
				$('ul.drop').hide();
				if($('.mobile-nav').css('visibility')=='visible')
				{
					$('ul.primary').css('display','none');
				}
				var $anchor = $(this);
			   $('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 54
				}, 1500);

				$('li').removeClass('current')
				var title = $anchor.attr("id");
				$('#section_' + title).addClass("current");
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
$(window).bind('scroll', function () {
    if ($(document).scrollTop() >= $('#index_page').offset().top - $(window).height()) {
        $('li').removeClass('current')
        $('#section_1').addClass("current");
    }
    if ($(document).scrollTop() >= $('#about_page').offset().top - $(window).height() + 300) {
        $('li').removeClass('current')
        $('#section_2').addClass("current");
    }
    if ($(document).scrollTop() >= $('#service_page').offset().top - $(window).height() + 300) {
        $('li').removeClass('current')
        $('#section_3').addClass("current");
    }
    if ($(document).scrollTop() >= $('#work_page').offset().top - $(window).height() + 300) {
        $('li').removeClass('current')
        $('#section_4').addClass("current");
    }
	if ($(document).scrollTop() >= $('#contact_page').offset().top - $(window).height()) {
        $('li').removeClass('current')
        $('#section_5').addClass("current");
    }
});


