// JavaScript Document

var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
$(document).ready(function() {
	$("#submit").click(function() {
		$('#name').removeClass('inperr');$('#email').removeClass('inperr');$('#subject').removeClass('inperr');
		$('#phone').removeClass('inperr');$('#msg').removeClass('inperr');
		var name    = $('#name').val();
		var email   = $('#email').val();
		var phone   = $('#phone').val();
		var subject = $('#subject').val();
		var msg     = $('#msg').val();
		if(name == ''){
			$('.contact_message').html('Name Required.');
			$('#name').addClass('inperr');
		}else if(email == ''){
			$('.contact_message').html('Email Required.'); $('#email').addClass('inperr');
		}else if(email != '' && !pattern.test(email) ){
			$('.contact_message').html('Valid email Required.');$('#email').addClass('inperr');
		}else if(phone == ''){
			 $('.contact_message').html('Phone Required.');$('#phone').addClass('inperr');
		}else if(subject == ''){
			 $('.contact_message').html('Suject Required.');$('#subject').addClass('inperr');
		}else if(msg == ''){
			 $('.contact_message').html('Message Required.');$('#msg').addClass('inperr');
		}else{
				$.ajax({
					type : "POST",
					async:false,
					url: "reachus.php",
					data:"name="+name+"&email="+email+"&phone="+phone+"&subject="+subject+"&msg="+msg,
						success: function(data){
								if(data != ''){
									 $('.contact_message').html(data);
								}
							}
				});
		}
	
	});

});
