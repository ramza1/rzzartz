/*
 * C1 page - Main Stylesheet
 * This file is part of ReoOnepage Template, a website template build for sale at ThemeForest.
 * All copyright to this file is hold by CC <CC24x7@gmail.com>.
 * Last Updated:
 * April 08, 2013
 *
 */

$(document).ready(function(e) {

// ------------ small screens menu switch -------------	
$('.menu_switch').click(function(e) {
    $('.navigation_outer').css('display','block');
});
$('.navigation_outer li').click(function(e) {
    if($('.menu-button').css('display')=='block')
	{
		e.preventDefault();
		$('.navigation_outer').css('display','none');
	}
});
// ------------ small screens menu switch -------------	
	
});



var originalNavClasses;

function toggleNav() {
var elem = document.getElementById('navigation'),
	classes = elem.className,
	newClasses;

if (originalNavClasses === undefined) { originalNavClasses = classes; }

elem.className = /expanded/.test(classes) ?
				  originalNavClasses :
				  originalNavClasses + ' expanded';
}
